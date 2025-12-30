import { useState } from 'react'
import './App.css'

function App() {

  const [maternalMortality, setMaternalMortality] = useState("")
  
  const [formData, setFormData] = useState({
    age: "",
    systolicBP: "",
    diastolicBP: "",
    bs: "",
    bodyTemp: "",
    heartRate: ""
  })

  const sendFormData = {
    age: Number(formData.age),
    systolicBP: Number(formData.systolicBP),
    diastolicBP: Number(formData.diastolicBP),
    bs: Number(formData.bs),
    bodyTemp: Number(formData.bodyTemp),
    heartRate: Number(formData.heartRate),
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/predict', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendFormData)
    })
    const result = await response.json()
    
    console.log("Result:", result)

    switch (result.prediction) {
      case 0: 
        setMaternalMortality("Low Risk")
        break
      case 1: 
        setMaternalMortality("Mid Risk")
        break
      case 2:
        setMaternalMortality("High Risk")
        break
    }
  }

  return (
    <>
      <form>
        <label>Age* <input type="number" name="age" value={formData.age} onChange={handleChange} required/></label>
        <label>Systolic BP* <input type="number" name="systolicBP" value={formData.systolicBP} onChange={handleChange} required/></label>
        <label>Diastolic BP* <input type="number" name="diastolicBP" value={formData.diastolicBP} onChange={handleChange} required/></label>
        <label>BS (mmol/L)* <input type="number" name="bs" value={formData.bs} onChange={handleChange} required/></label>
        <label>Body Temperature (F)* <input type="number" name="bodyTemp" value={formData.bodyTemp} onChange={handleChange} required/></label>
        <label>Heart Rate (bpm)* <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} required/></label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        Risk of Maternal Mortality:<span className={`result-${maternalMortality.toLowerCase().replace(" ", "-")}`}> {maternalMortality}</span>
      </div>
    </>
  )
}

export default App
