from flask import Flask, Response, stream_template
from serverRender import serverRender

app = Flask(__name__)
app.config.from_object("config")

@app.route("/")
def index():
    context = serverRender()
    return Response(stream_template("index.html", react_context=context))

if __name__ == "__main__":
    app.run(port=app.config.get("PORT"))