import numpy as np
import pickle
from flask import Flask, request, render_template, jsonify

model = pickle.load(open('model.pkl', 'rb')) 

app = Flask(__name__)
@app.route('/predict', methods =['POST'])
def predict():
    features = [float(i) for i in request.form.values()]
    array_features = [np.array(features)]
    prediction = model.predict(array_features)
    output = prediction
    if output == 1:
        return jsonify({"result" : "1"})
    elif output == 2:
        return jsonify({"result" : "2"})

if __name__ == '__main__':
    app.run()