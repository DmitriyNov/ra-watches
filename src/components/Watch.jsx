import { useState } from 'react';
import { useEffect } from 'react';

export default function Watch( props ) {
    
    const {watch, onClickDelete} = props;
    const [time, setTime] = useState({hour: watch.hour, minutes: watch.minutes, second: watch.second});

    
    useEffect(() => {
        setTimeout(() => {
            if (time.second === 360 && time.minutes === 360 && time.hour === 360) {
                setTime({...time, second: 6, minutes: 6, hour: 30});
            } if (time.second === 360 && time.minutes === 360) {
                setTime({...time, second: 6, minutes: 6, hour: time.hour + 30});
            } else if (time.second === 360) {
                setTime({...time, second: 6, minutes: time.minutes + 6});
                console.log("minutes");
            } else {
                setTime({...time, second: time.second + 6});
                console.log("second");
            }
        }, 1000);
    }, [time]);
    
    return (
      <div className="watch-container">
        <p>{watch.city}</p>
        <div className="watch">
            <div className="clockFace">
                <div className="hour" style={{transform: `rotate(${time.hour}deg)`}}></div>
                <div className="minutes" style={{transform: `rotate(${time.minutes}deg)`}}></div>
                <div className="second" style={{transform: `rotate(${time.second}deg)`}}></div>
            </div>
            <button id={watch.time} className="close" onClick={onClickDelete}>x</button>
        </div>
      </div>
    )
  }