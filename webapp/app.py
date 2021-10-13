from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('home.html')

@app.route('/<rfun>', methods =['GET', 'POST'])
def mcal(rfun):
    url = rfun + ".html"
    return render_template(url)
