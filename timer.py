import os
from flask import Flask, redirect, render_template, request

app = Flask(__name__)

@app.route('/')
def get_homepage():
   return render_template('index.html')
   
@app.route('/login', methods=['POST'])
def login(): 
    team = request.form['team']
    username = request.form['username']
    return redirect("/" + team + "/" + username) 
# Pass two arguments through redirect without having to make an extra page 

@app.route('/<team>/<username>')
def get_user_page(team, username):
    return render_template('timer_page.html', username = username, team = team)



if __name__ == '__main__':
    app.run(host=os.getenv('IP'), port=int(os.getenv('PORT')), debug = True)