from flask import Flask
from src.controllers.home_controller import home_controller

app = Flask(__name__)

app.static_folder = "src/views/static"
app.template_folder = "src/views/templates"

app.register_blueprint(home_controller, url_prefix="/")


if __name__ == "__main__":
    app.run(debug=True, port=8000)
