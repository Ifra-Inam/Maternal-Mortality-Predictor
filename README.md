# Maternal Mortality Predictor

**Maternal Mortality Predictor** is a web application designed to help medical professionals assess the risk of maternal mortality for patients. Using advanced machine learning techniques, the tool predicts whether a patient is at **High**, **Mid**, or **Low** risk, providing actionable insights to improve patient care.

By integrating this tool into clinical practice, healthcare professionals can:

* Identify high-risk patients early and provide targeted interventions.
* Allocate resources efficiently for maternal care.
* Make data-driven decisions to reduce maternal mortality rates.

---

## Features

* **User-friendly interface:** Built with React and CSS for quick input of patient data.
* **Backend:** Powered by Flask, handling requests and serving predictions.
* **Machine learning model:** Random Forest tuned via grid search and hyperparameter optimization.
* **Data preprocessing:** Includes scaling and oversampling to handle imbalanced datasets.
* **Risk prediction:** Displayed immediately on the web interface after form submission.

---

## Technologies Used

* **Frontend:** React, CSS
* **Backend:** Flask
* **Machine Learning & Data Processing:** Python, Pandas, NumPy, scikit-learn, imbalanced-learn
* **Other Libraries (for development/notebook work):** TensorFlow, Matplotlib

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Ifra-Inam/Maternal-Mortality-Predictor.git
cd backend
```

### 2. Create a virtual environment

**Windows:**

```bash
python -m venv venv
```

**Mac/Linux:**

```bash
python3 -m venv venv
```

### 3. Activate the virtual environment

**Windows (PowerShell):**

```bash
.\venv\Scripts\Activate
```

**Mac/Linux:**

```bash
source venv/bin/activate
```

### 4. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the backend

```bash
python training.py   
python app.py        
```

### 6. Navigate to the frontend folder

```bash
cd ../frontend
```

### 7. Install frontend dependencies

```bash
npm install
```

### 8. Run the frontend

```bash
npm run dev
```

---

## Usage

1. Open the app in your browser.
2. Fill in patient information on the form (e.g., age, medical data).
3. Click **Submit** to receive the risk prediction.

**Example Results:**

<img width="600" alt="Low Risk" src="https://github.com/user-attachments/assets/9ea6b72a-0419-4912-80fa-9afb2e552a7e" />  
<img width="600" alt="Mid Risk" src="https://github.com/user-attachments/assets/d8bf451a-8733-47f1-a753-b16d701ccb18" />  
<img width="600" alt="High Risk" src="https://github.com/user-attachments/assets/51127244-6ff2-4815-abd7-476043e3956e" />  

---

## Model Details

* **Algorithm:** Random Forest Classifier
* **Preprocessing:** Scaling, oversampling
* **Hyperparameter Tuning:** Grid search
* **Features Used:** Various patient health metrics (e.g., age, systolicBP, diastolicBP)
* **Output:** Risk classification — High, Mid, or Low

---

## Dataset

Trained on the **Maternal Health Risk dataset** from UCI:

Ahmed, M. (2020). *Maternal Health Risk [Dataset]*. UCI Machine Learning Repository. [https://doi.org/10.24432/C5DP5D](https://doi.org/10.24432/C5DP5D)

---

## Potential Real-World Applications

* Provide **early warning** for high-risk pregnancies.
* Assist doctors in **prioritizing care**.
* Support **evidence-based decision making** to improve maternal health outcomes.
* Serve as a **training tool** for medical staff and students.

---

## License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

## Acknowledgments

* Dataset from UCI Machine Learning Repository
* Inspiration from maternal health research and AI-driven healthcare solutions
