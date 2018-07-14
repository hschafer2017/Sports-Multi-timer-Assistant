import os
from flask import Flask, redirect, render_template, request, session
from pymongo import MongoClient
import json

MONGODB_URI = os.environ.get('MONGODB_URI')
MONGODB_NAME = os.environ.get('MONGODB_NAME')

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
    event_name = request.form['event']
    heat_num = request.form['heat']
    event = "Event: " + event_name
    heat = "Heat: " + heat_num
    return redirect("/" + sport + "/" + team + "/" + username + "/" + meet + '/' + event + "/" + heat)

@app.route('/<sport>/<team>/<username>/<meet>/<event>/<heat>')
def timer_set(sport, team, username, meet, event, heat):
    return render_template('timer_page.html', username = username, team = team, sport = sport, meet = meet, event = event, heat = heat)

@app.route('/time', methods = ['POST'])
def time():
    
    meet = request.form['meet']
    event = request.form['event']
    heat = request.form['heat']
    # lanes = request.form['lanes'][0]
    # print(lanes)
    timer_one = request.form['lanes1']
    timer_two = request.form['lanes2']
    timer_three = request.form['lanes3']
    final_one = request.form['final1']
    final_two = request.form['final2']
    final_three = request.form['final3']
    split_one = request.form['split1']
    split_two = request.form['split2']
    split_three = request.form['split3']
    
    n = 9
    splits_one = [split_one[i:i+n] for i in range(0, len(split_one), n)]
    splits_two = [split_two[i:i+n] for i in range(0, len(split_two), n)]
    splits_three = [split_three[i:i+n] for i in range(0, len(split_three), n)]
    
    print("hello here")
    
    # meet_data = {
    # 	"event": event,
    # 	"heat": heat,
    # 	"lanes": lanes,
    # }
    
    
    
    
    meet_data = {
    	"event": event,
    	"heat": heat,
    	"lanes": {
    		timer_one: {
    			'final': final_one, 
                'splits': splits_one,
    		},
    		timer_two: {
    			'final': final_two, 
                'splits': splits_two,
    		},
    		timer_three: {
        		'final': final_three, 
                'splits': splits_three,
    		}
    	}
    }
    
    print(meet_data)
    
    with MongoClient(MONGODB_URI) as conn: 
        db = conn[MONGODB_NAME]
        coll = db['final-times']
        coll.insert(meet_data)
        
    return "0"
    
if __name__ == '__main__':
    app.run(host=os.getenv('IP'), port=int(os.getenv('PORT')), debug = True)