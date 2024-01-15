from flask import Blueprint, render_template

home_controller = Blueprint("home_controller", __name__)


@home_controller.get("/")
def index():
    return render_template("index.html", greeting="Bem vinda Naiara!")
