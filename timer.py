import os
from flask import Flask, redirect, render_template, request


app = Flask(__name__)






if __name__ == '__main__':
    app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 8080)), debug=True)