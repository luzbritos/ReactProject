import styles from './weatherMainInfo.module.css'

export default function WeatherMainInfo({ weather }) {
    return (
      <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location?.name}</div>
        <div className={styles.country}>{weather?.location?.country}</div>
        <div className={styles.row}>
          <div>
            <img src={`http:${weather?.current?.condition?.icon}`} width="128" alt="icon"/>
          </div>
          <div className={styles.weatherCondition}>
            <div className={styles.condition}>
              {weather?.current?.condition.text}
            </div>
            <div className={styles.current}>{weather?.current?.temp_c}º</div>
          </div>
        </div>
        <iframe
        title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

//   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1672385040379!5m2!1ses-419!2sar" 
// width="600" 
// height="450" 
// style="border:0;" 
// allowfullscreen="" 
// loading="lazy" 
// referrerpolicy="no-referrer-when-downgrade"></iframe>