import numpy as np
import pickle
from flask import Flask, request, render_template, jsonify

model = pickle.load(open('model.pkl', 'rb')) 
model2 = pickle.load(open('model2.pkl', 'rb'))

app = Flask(__name__)
@app.route('/predict', methods =['POST'])
def predict():
    features = [float(i) for i in request.form.values()]
    array_features = [np.array(features)]
    prediction = model.predict(array_features)
    output = prediction
    if output == 1:
        return jsonify({"result" : "0"})
    elif output == 2:
        return jsonify({"result" : "1"})

@app.route('/predict2', methods =['POST'])
def predict2():
    features = [float(i) for i in request.form.values()]
    print(features)
    array_features = [np.array(features)]
    prediction = model2.predict(array_features)
    output = prediction
    if output == 0:
        return jsonify({"result" : "0"})
    elif output == 1:
        return jsonify({"result" : "1"})

if __name__ == '__main__':
    app.run()