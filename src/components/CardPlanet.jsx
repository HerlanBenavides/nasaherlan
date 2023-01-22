import React, { useState } from 'react'

const CardPlanet = ({ user }) => {

    const [counter, setCounter] = useState(0)

    /* const reset = () => {
    setTime(0);
  }; */



    const suma = () => {
        if (counter < user?.data.length - 1) {
            setCounter(counter + 1)
        } else {
            setCounter(0)
        }

    }

    const menos = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            setCounter(user?.data.length - 1)
        }

    }

    const URL = user?.data[counter]
    const dateEarth = new Date(URL?.date)
    const yearEarth = dateEarth.getFullYear()
    const monthEarth = dateEarth.getMonth() + 1
    const datEarth = dateEarth.getDate()



    console.log(counter)

    return (
        <div className='web'>
            <h1>The Planet</h1>
            <div className="all">
                <div className="box">
                    <span className='titulo'>Picture Name: {URL?.image}</span>
                    <br /><br />

                    <span className='titulo'>Centroid Coordinates</span>
                    <ul>
                        <li>lat: {URL?.centroid_coordinates.lat}</li>
                        <li>lon: {URL?.centroid_coordinates.lon}</li>
                    </ul>

                    <span className='titulo'>DSCOVR J2000 Position</span>
                    <ul>
                        <li>x: {URL?.dscovr_j2000_position.x}</li>
                        <li>y: {URL?.dscovr_j2000_position.y}</li>
                        <li>z: {URL?.dscovr_j2000_position.z}</li>
                    </ul>

                    <span className='titulo'>Lunar J2000 Position</span>
                    <ul>
                        <li>x: {URL?.lunar_j2000_position.x}</li>
                        <li>y: {URL?.lunar_j2000_position.y}</li>
                        <li>z: {URL?.lunar_j2000_position.z}</li>
                    </ul>

                    <span className='titulo'>Sun J2000 Position</span>
                    <ul>
                        <li>x: {URL?.sun_j2000_position.x}</li>
                        <li>y: {URL?.sun_j2000_position.x}</li>
                        <li>z: {URL?.sun_j2000_position.x}</li>
                    </ul>

                    <span className='titulo'> Attitude Quaternions</span>
                    <ul>
                        <li>q0: {URL?.attitude_quaternions.q0}</li>
                        <li>q1: {URL?.attitude_quaternions.q1}</li>
                        <li>q2: {URL?.attitude_quaternions.q2}</li>
                        <li>q3: {URL?.attitude_quaternions.q3}</li>
                    </ul>

                </div>

                <div className="foto">
                    <img className='planet' src={`https://epic.gsfc.nasa.gov/archive/natural/${yearEarth}/0${monthEarth}/${datEarth}/png/${URL?.image}.png`} alt="" />
                    <button className='slider_next' onClick={() => menos()}><i class="fa-solid fa-circle-arrow-right"></i></button>
                    <button className='slider_prev' onClick={() => suma()}><i class="fa-solid fa-circle-arrow-left"></i></button>
                </div>

                <div className="discover">
                    <div className="text">
                        <p>The Deep Space Climate Observatory, or DSCOVR, was launched in February of 2015, 
                            and maintains the nation's real-time solar wind monitoring capabilities, which 
                            are critical to the accuracy and lead time of NOAA's space weather alerts and 
                            forecasts. Without timely and accurate warnings, space weather events—like 
                            geomagnetic storms—have the potential to disrupt nearly every major public 
                            infrastructure system on Earth, including power grids, telecommunications, 
                            aviation and GPS.</p>
                            <p>Information extracted from the official NASA API</p>
                    </div>
                    <div className="text">
                        <p>Page elaborated by Herlan Benavides</p>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default CardPlanet