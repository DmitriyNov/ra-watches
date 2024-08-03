import { useState } from 'react';
import { useEffect } from 'react';

export default function Watch( props ) {
    
    const {watch} = props;
    const [hour, setHour] = useState(watch.hour);
    const [minutes, setMinutes] = useState(watch.minutes);
    const [second, setSecond] = useState(watch.second);

    
    useEffect(() => {
        setTimeout(() => {
            if (hour == 360) {
                setHour(30);
            } else {
                setHour(hour + 30);
            }
        }, 3600000);
    }, [hour]);

    useEffect(() => {
        setTimeout(() => {
            if (minutes == 360) {
                setMinutes(6);
            } else {
                setMinutes(minutes + 6);
            }
        }, 60000);
    }, [minutes]);
    
    useEffect(() => {
        setTimeout(() => {
            if (second == 360) {
                setSecond(6);
            } else {
                setSecond(second + 6);
            }
        }, 1000);
    }, [second]);
    
    return (
      <div className="watch-container">
        <p>{watch.city}</p>
        <div className="watch">
            <div className="clockFace">
                <div className="hour" style={{transform: `rotate(${hour}deg)`}}></div>
                <div className="minutes" style={{transform: `rotate(${minutes}deg)`}}></div>
                <div className="second" style={{transform: `rotate(${second}deg)`}}></div>
            </div>
            <button id={watch.city} className="close" onClick={watch.close}>x</button>
        </div>
      </div>
    )
  }