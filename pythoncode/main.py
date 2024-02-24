from flask import Flask, render_template, request, redirect
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'helloworld'
socketio = SocketIO(app,cors_allowed_origins="*")


def handle_message(message):
    print("Received message: "+message
    if message != "Used Connected!":
        (send(message, broadcast=True)


@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    socketio.run(app, host="localhost")
    
