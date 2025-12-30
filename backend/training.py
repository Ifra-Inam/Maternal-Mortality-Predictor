import pandas as pd
import numpy as np
from imblearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import RandomOverSampler
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv("sample_data.csv")

# Ordinal encoding for target variable
oe = {"low risk": 0, "mid risk": 1, "high risk": 2}
df["RiskLevel"] = df["RiskLevel"].str.strip().str.lower().map(oe)

X = df.iloc[:,:-1].values
y = df.iloc[:,-1].values

# Pipeline bundles preprocessing and the model so transformations are applied consistently and in the correct order during training and prediction
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('ros', RandomOverSampler()),
    ('model', RandomForestClassifier(max_depth=35, n_estimators=1500))
])

# Fits the entire pipeline so the Flask app can call predict() without re-implementing scaling or preprocessing logic
pipe.fit(X, y)

joblib.dump(pipe, 'maternal_mortality_prediction_model.pkl')
