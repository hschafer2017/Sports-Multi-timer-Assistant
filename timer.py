import os
from flask import Flask, redirect, render_template, request


app = Flask(__name__)

@app.route('/')
def get_homepage():
   return render_template('index.html')
   
@app.route('/login', methods=['POST'])
def login(): 
    sport = request.form['sport']
    team = request.form['team']
    username = request.form['username']
    meet = request.form['meet']
    return redirect("/" + sport + "/" + team + "/" + username + "/" + meet) 

@app.route('/<sport>/<team>/<username>/<meet>')
def get_user_page(sport, team, username, meet):
    return render_template('timer_page.html', username = username, team = team, sport = sport, meet = meet)

@app.route('/<sport>/<team>/<username>/<meet>/new', methods = ['POST'])
def timer_setup(sport, team, username, meet):
    event = request.form['Event']
    heat = request.form['Heat']
    lane_count = request.form['Lanes']
    lanes = int(lane_count)
    return redirect("/" + sport + "/" + team + "/" + username + "/" + meet + '/' + event + "/" + heat + "/" + lane_count)

@app.route('/<sport>/<team>/<username>/<meet>/<event>/<heat>/<lane_count>')
def timer_set(sport, team, username, meet, event, heat, lane_count):
    lanes = int(lane_count)
    return render_template('timer_page.html', username = username, team = team, sport = sport, meet = meet, event = event, heat = heat, lane_count = lane_count)

@app.route('/time', methods = ['POST'])
def time():
    LN_ONE = request.form['LN_ONE']
    LN_TWO = request.form['LN_TWO']
    LN_THREE = request.form['LN_THREE']
    SPLIT_ONE = request.form['SPLIT_ONE']
    return LN_ONE 

if __name__ == '__main__':
    app.run(host=os.getenv('IP'), port=int(os.getenv('PORT')), debug = True)