from flask import Flask, render_template
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'helloworld'
socketio = SocketIO(app, cors_allowed_origins="*",logger=True, engineio_logger=True)

@socketio.on('message')
def handle_message(message):
    print("Received message: " + message)
    if message != "User Connected!":
        send(message, broadcast=True)


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    socketio.run(app,host="192.168.1.250",allow_unsafe_werkzeug=True)


