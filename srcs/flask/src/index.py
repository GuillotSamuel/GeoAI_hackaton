from flask import Flask, request, jsonify
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
import datetime

from model import PrithviSeg
from run import PrithviSegmentationModule

app = Flask(__name__)

import torch

model = PrithviSeg()

def train_model():
    print("Starting training...")
    dummy_input = torch.randn(1, 3, 224, 224)
    output = PrithviSeg(dummy_input)
    print("Training over. Outputs :", output.shape)

def predict_model():
    print("Starting predictions...")
    dummy_input = torch.randn(1, 3, 224, 224)
    output = PrithviSegmentationModule(dummy_input)
    print("Predictions over. Outputs :", output.shape)


### --- TO CONFIGURE --- ###
# Interval in days for training the model
training_days = 30
# Interval in days for predictions
prediction_days = 3

# Define the tasks
def training_task():
    with app.app_context():
        print(f"Training task executed at: {datetime.datetime.now()}")
        run_model()

def prediction_task():
    with app.app_context():
        print(f"Prediction task executed at: {datetime.datetime.now()}")
        print("Running prediction task...")

# Scheduler setup
scheduler = BackgroundScheduler()

def update_scheduler():
    global scheduler
    scheduler.remove_all_jobs()

    scheduler.add_job(training_task, IntervalTrigger(days=training_days), id="training_task")
    scheduler.add_job(prediction_task, IntervalTrigger(days=prediction_days), id="prediction_task")

# Initialize the scheduler
update_scheduler()
scheduler.start()

@app.route("/")
def index():
    return (
        f"Flask app is running! Training interval: {training_days} days, "
        f"Prediction interval: {prediction_days} days."
    )

@app.route("/update-intervals", methods=["POST"])
def update_intervals():
    global training_days, prediction_days
    data = request.json

    if (
        "training_days" in data
        and isinstance(data["training_days"], int)
        and data["training_days"] > 0
        and "prediction_days" in data
        and isinstance(data["prediction_days"], int)
        and data["prediction_days"] > 0
    ):
        # Update the intervals
        training_days = data["training_days"]
        prediction_days = data["prediction_days"]

        # Restart scheduler with updated intervals
        update_scheduler()
        return jsonify(
            {
                "message": f"Intervals updated: training every {training_days} days, predictions every {prediction_days} days."
            }
        )
    return jsonify({"error": "Invalid input. Both intervals must be positive integers."}), 400

@app.teardown_appcontext
def shutdown_scheduler(exception=None):
    scheduler.shutdown(wait=False)

if __name__ == "__main__":
    app.run(debug=True)
