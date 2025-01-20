from flask import Flask, Response, render_template, stream_template
from serverRender import serverStringRender, serverPipeRender

app = Flask(__name__)
app.config.from_object("config")

@app.route("/pipe")
def pipe():
    context = serverPipeRender()
    return Response(stream_template("index.pipe.html", react_context = context))

@app.route("/")
def index():
    context = serverStringRender()
    return render_template("index.string.html", react_context = context)

if __name__ == "__main__":
    app.run(port=app.config.get("PORT"))