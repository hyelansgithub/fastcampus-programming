from flask import *

app = Flask(__name__)

@app.route("/flask")
def hello():
    return "hello flask"

@app.route("/user/<username>")
def user(username):
    return render_template("profile.html", name=username)

@app.route("/people/<age>/<name>")
def people(age, name):
    users = {
        name:age,
        "jin":[
        {"age":35},
        {"email":"helan.jeong@gmail.com"},
        ]
    }
    return jsonify(users)

app.run()
