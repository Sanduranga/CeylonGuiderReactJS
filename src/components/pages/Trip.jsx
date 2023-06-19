import React, { useState } from 'react'
import './Trip.css'
import TripPlan, { Vehicles } from '../other/TripPlan'


export default function Trip() {

    const [form_data, setForm_data] = useState({
        name: '',
        vehicleType: '',
        tripDate: '',
        contactNo: ''
      })
    const [submitted, setSubmitted] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    const handleChange = (event) => {
      setForm_data({
        ...form_data,
        [event.target.name]:event.target.value})   
    }

    const {name, vehicleType,tripDate,contactNo} = form_data

    const avilableCar = 18
    const avilableVan = 8
    const avilableBus = 0



  return (
    <div className='tripContainer'>
        <div className="first"></div>
        <div className="table">           
                    <p>Plan your Trip</p>
                       <h3>
                       From Colombo To:
                       </h3>
                       <br/>
                       <br/>
                   <table>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Days</th>
                            <th>Vehicles</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sigiriya</td>
                            <td>2 days</td>
                            <td>Cars</td>
                        </tr>
                        <tr>
                           <td>Anuradhapura</td>
                           <td>3 days</td>
                           <td>{avilableCar}</td>
                        </tr>
                        <tr>
                         <td>Jafna</td>
                           <td>6 days</td>
                           <td>Vans</td>
                        </tr>
                        <tr>
                           <td>Nuwara Eliya</td>
                           <td>3 days</td>
                         <td>{avilableVan}</td>
                        </tr>
                        <tr>
                            <td>Kandy</td>
                            <td>1 days</td>
                            <td>Buses</td>
                        </tr>
                        <tr>
                          <td>trinco</td>
                          <td>4 days</td>
                          <td>{avilableBus}</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
        <div className="second">
            {!submitted ? (
            <form onSubmit={handleSubmit}>

                <div>
                  <input type="text" name='name' placeholder="Enter your name" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="dropdown">Select a vehicle type  :   </label>
                  <select name='vehicleType' onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="bus">Bus</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date">When will you go  :   </label>
                  <input type="date" name="tripDate" onChange={handleChange}/>
                </div>
                <div>
                  <input type="number" name='contactNo' placeholder="Enter your contact number" onChange={handleChange}/>
                </div>
                <div className='formBtn'>
                  <button type="submit" value="Submit">Submit</button>
                </div>
            </form>
            ) : (name=='' || vehicleType=='' || contactNo=='' || tripDate=='') ? (<div className='fieldMust'>All fields must be filled!
              <div><a href='/plan_your_trip'><button style={{marginTop: '20px'}}>Resubmit</button></a></div></div>) 
            : (vehicleType=== 'car' && avilableCar == 0) ? <Vehicles Vehicle = {vehicleType} />
            : (vehicleType=== 'van' && avilableVan == 0) ? <Vehicles Vehicle = {vehicleType} /> 
            : (vehicleType=== 'bus' && avilableBus == 0) ? <Vehicles Vehicle = {vehicleType} /> 
            : <TripPlan Name = {name} VehicleType = {vehicleType} finalData = {form_data} /> }
        </div>
       
    </div>
  )
}
