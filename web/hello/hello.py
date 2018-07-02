from flask import *

app = Flask(__name__) # 플라스크 패키지에 있는 모듈 중에 하나

@app.route("/")
def hello():
    return "hello flask"

app.run() # run 하면 실행이 되는 것
