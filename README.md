# Maternal Mortality Predictor

**Maternal Mortality Predictor** is a web application designed to help medical professionals assess the risk of maternal mortality for patients. Using advanced machine learning techniques, the tool predicts whether a patient is at **High**, **Mid**, or **Low** risk, providing healthcare providers with actionable insights to improve patient care.

By integrating this tool into clinical practice, healthcare professionals can:

* Identify high-risk patients early and provide targeted interventions.
* Allocate resources efficiently for maternal care.
* Make data-driven decisions to reduce maternal mortality rates.

---

## Features

* **User-friendly interface** built with React and CSS for quick input of patient data.
* **Backend powered by Flask**, handling requests and serving predictions.
* **Machine learning model** Random Forest tuned via grid search and hyperparameter optimization.
* **Data preprocessing** includes scaling and oversampling to handle imbalanced datasets.
* **Risk prediction** is displayed immediately on the web interface after form submission.

---

## Technologies Used

* **Frontend:** React, CSS
* **Backend:** Flask
* **Machine Learning & Data Processing:** Python, Pandas, NumPy, scikit-learn, imbalanced-learn
* **Other Libraries (for development/notebook work):** TensorFlow, Matplotlib, 

---

### Getting Started

1. Clone the repository

```bash
git clone https://github.com/Ifra-Inam/Maternal-Mortality-Predictor.git
cd backend
```

2. Create a virtual environment

  ## Windows:
   ```bash
   python -m venv venv
   ```
  ## Mac/Linux:
  ```bash
  python3 -m venv venv
  ```

3. Activate virtual environment:

   ## Windows (PowerShell):
    ```bash
    .\venv\Scripts\Activate
    ```
  ## Mac/Linux:
  ```bash
  source venv/bin/activate
  ```

4. Install dependencies
   ```bash
    pip install -r requirements.txt
   ```

5. Run the backend:
   ```bash
   python training.py  
   python app.py
    ```
   
6. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
7. Install dependencies:
   ```bash
   npm install
   ```
8. Run the frontend:
   ```bash
   npm run dev
   ```
   
---

## Usage

1. Open the app in your browser.
2. Fill in the patient information on the form (e.g., age, medical information, etc.).
3. Click **Submit** to receive the risk prediction.

<img width="1115" height="569" alt="img1" src="https://github.com/user-attachments/assets/a0518fd3-3b31-42e7-9f3e-2f4fc0d630c2" />
 
* Low Risk: <img width="1115" height="569" alt="lowrisk" src="https://github.com/user-attachments/assets/9ea6b72a-0419-4912-80fa-9afb2e552a7e" />
* Mid Risk: <img width="1114" height="566" alt="img2" src="https://github.com/user-attachments/assets/d8bf451a-8733-47f1-a753-b16d701ccb18" />
* High Risk: <img width="1115" height="568" alt="img3" src="https://github.com/user-attachments/assets/51127244-6ff2-4815-abd7-476043e3956e" />

---

## Model Details

* **Algorithm:** Random Forest Classifier
* **Preprocessing:** Scaling, oversampling 
* **Hyperparameter Tuning:** Grid search to optimize model performance
* **Features Used:** Various patient health metrics (e.g., age, systolicBP, diastolicBP)
* **Output:** Risk classification — High, Mid, or Low

---

## Dataset

The model was trained on the **Maternal Health Risk dataset** from UCI:

Ahmed, M. (2020). *Maternal Health Risk [Dataset]*. UCI Machine Learning Repository. [https://doi.org/10.24432/C5DP5D](https://doi.org/10.24432/C5DP5D)

---

## Potential Real-World Applications

This tool can be deployed in hospitals or clinics to:

* Provide **early warning** for high-risk pregnancies.
* Assist doctors in **prioritizing care** for patients at higher risk.
* Support **evidence-based decision making**, improving maternal health outcomes.
* Serve as a **training tool** for medical students and staff to understand risk factors.

---

## License

This project is licensed under the MIT License — feel free to use, modify, and distribute as you see fit.

---

## Acknowledgments

* Dataset from UCI Machine Learning Repository.
* Inspiration from maternal health research and AI-driven healthcare solutions.
