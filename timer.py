import os
from flask import Flask, redirect, render_template, request, session
from pymongo import MongoClient
import json
characters_in_splits = 9

MONGODB_URI = os.environ.get('MONGODB_URI')
MONGODB_NAME = os.environ.get('MONGODB_NAME')

app = Flask(__name__)


@app.route('/')
def get_homepage():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    """Assign a team, username, and meet to user and data document"""
    sport = request.form['sport']
    team = request.form['team']
    username = request.form['username']
    meet = request.form['meet']
    return redirect("/" + sport + "/" + team + "/" + username + "/" + meet)


@app.route('/<sport>/<team>/<username>/<meet>')
def get_user_page(sport, team, username, meet):
    """Take user to stopwatch page"""
    return render_template('timer_page.html', username=username,
                           team=team, sport=sport, meet=meet)


@app.route('/<sport>/<team>/<username>/<meet>/new', methods=['POST'])
def setup_timers(sport, team, username, meet):
    """Choose event and heat for document, depending on sport chosen"""
    meet = request.form['meet']
    event_name = request.form['event']
    heat_num = request.form['heat']
    event = "Event: " + event_name
    heat = "Heat: " + heat_num

    return redirect("/" + sport + "/" + team + "/" + username + "/"
                    + meet + '/' + event + "/" + heat)


@app.route('/<sport>/<team>/<username>/<meet>/<event>/<heat>')
def timers_ready_with_event_heat(sport, team, username, meet, event, heat):
    """Display event and heat user is timing for (not required)"""
    return render_template('timer_page.html', username=username,
                           team=team, sport=sport, meet=meet,
                           event=event, heat=heat)


@app.route('/time', methods=['POST'])
def save_times():
    """Save times to MongoDB"""

    # Get times from AJAX call
    team = request.form['team']
    username = request.form['username']
    meet = request.form['meet']
    event = request.form['event']
    heat = request.form['heat']
    timer_one = request.form['lanes1']
    timer_two = request.form['lanes2']
    timer_three = request.form['lanes3']
    final_one = request.form['final1']
    final_two = request.form['final2']
    final_three = request.form['final3']
    split_one = request.form['split1']
    split_two = request.form['split2']
    split_three = request.form['split3']

    # Data structure
    meet_data = {
        'team': team,
        'username': username,
        'meet': meet,
        'event': event,
        'heat': heat,
        'lanes': {
            timer_one: {
                'final': final_one,
                'splits': iterate_split_times(split_one),
            },
            timer_two: {
                'final': final_two,
                'splits': iterate_split_times(split_two),
            },
            timer_three: {
                'final': final_three,
                'splits': iterate_split_times(split_three),
            }
        }
    }

    # Connects to MongoDB and inserts meet_data as a document in
    # final-times collection
    with MongoClient(MONGODB_URI) as conn:
        db = conn[MONGODB_NAME]
        coll = db['final-times']
        coll.insert(meet_data)

    # Return OK as page is prevented from reloading via AJAX function
    # Reloading page would clear stopwatches
    return 'OK'


@app.route('/<sport>/<team>/<username>/<meet>/view', methods=['POST'])
def view_times_on_page(sport, team, username, meet):
    """View saved times underneath stopwatches"""

    # Get from hidden fields
    meet = request.form['meet']
    event_name = request.form['event']
    heat_num = request.form['heat']

    # Get times from MongoDB and put into list
    meet_data = get_times_from_database()
    show_times = []

    # Append new times saved to view page
    for times in meet_data:
        show_times.append(times)
    return render_template('timer_page.html', username=username,
                           team=team, sport=sport, meet=meet,
                           event=event_name, heat=heat_num,
                           show_times=show_times, meets=meet)


def iterate_split_times(split_number):
    """Iterates over split list brought in from AJAX call."""
    # There are 9 characters in each split time "00:00.00", list
    # comprehension breaks them up. See README.
    return [split_number[i:i+characters_in_splits] for i in range(0,
                         len(split_number), characters_in_splits)]


def get_times_from_database():
    """Get times from MongoDB to render on view times page"""
    with MongoClient(MONGODB_URI) as conn:
        db = conn[MONGODB_NAME]
        coll = db['final-times']
        all_times = coll.find()
        return all_times


if __name__ == '__main__':
    app.run(host=os.getenv('IP'), port=int(os.getenv('PORT')), debug=True)
