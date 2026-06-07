from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/ats")
def ats():
    return render_template("ats.html")

@app.route("/github")
def github():
    return render_template("github.html")

@app.route("/linkedin")
def linkedin():
    return render_template("linkedin.html")

@app.route("/jobmatch")
def jobmatch():
    return render_template("jobmatch.html")

@app.route("/interview")
def interview():
    return render_template("interview.html")

if __name__ == "__main__":
    app.run(debug=True)