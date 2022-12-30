import { useState } from "react";
import styles from './weatherForm.module.css'


export default function WeatherForm({onChangeCity}){
    const[city, setCity] = useState ('')
    // function onChange(e){
    //     const value = e.target.value

    //     if (value !== ""){
    //         setCity(value)
    //     }
    // }

    // function handleSubmit(e){
    //     e.preventDefault()

    //     onChangeCity(city)
    // }
    function handleChange(e) {
        setCity(e.target.value);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        if (!city || city !== "") {
          onChangeCity(city);
        }
      }

    return(
        <form onSubmit={handleSubmit} className={styles.container} >
            <input 
            placeholder="place your city"
            className={styles.input}
            type="text" 
            onChange={handleChange}             
            value={city}/>
        </form>
    )
}