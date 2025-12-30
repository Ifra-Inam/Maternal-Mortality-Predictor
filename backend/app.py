from flask import Flask, request, jsonify
import pandas as pd
from joblib import load
from flask_cors import CORS

model = load('./maternal_mortality_prediction_model.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        df = pd.DataFrame([data])
        prediction = model.predict(df)[0]
        print(f"Prediction: {prediction}")
        return jsonify({"prediction": int(prediction)}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)