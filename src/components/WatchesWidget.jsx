import { useState } from 'react';
import Watch from './Watch';

export default function WatchesWidget () {


    const [watches, setWatches] = useState([]);

    function addWatch(event) {
        event.preventDefault();
        const {target} = event;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        const date = new Date;
        const currentGreenwichHour = date.getHours() + date.getTimezoneOffset()/60;
        let splitHour = 0;
        if (data.timeZone.slice(0, 1) === "-") {
            splitHour = currentGreenwichHour + parseInt(data.timeZone) + 1;
        } else {
            splitHour = currentGreenwichHour + parseInt(data.timeZone);
        }
        
        date.setHours(splitHour);

        const watch = {
            city: data.city,
            time: date.getTime(),
            hour: date.getHours() * 30,
            minutes: date.getMinutes() * 6,
            second: date.getSeconds() * 6,
        }

        watches.push(watch);
        setWatches([...watches]);
        event.target[0].value = "";
        event.target[1].value = "";
    }

    function onClickDelete(event) {
        const time = event.target.id;
        const filteredWatches = watches.filter((item) => {
            return (item.time.toString() !== time)
        })
        setWatches(filteredWatches);
    }

    return (
        <div className='watch-widget'>
            <form className="form-container" onSubmit={addWatch}>
                <div className='input-container'>
                    <label>Название</label>
                    <input type="text" name="city" placeholder='Москва' required></input>
                </div>
                <div className='input-container'>
                    <label>Временная зона</label>
                    <input type="text" name="timeZone" placeholder='+3' required></input>
                </div>
                <button>Добавить</button>
            </form>
            <div className='watches-container'>
                {watches.map((item, i) => (
                    <Watch key={i} watch={item} onClickDelete={onClickDelete}/>
                ))}
            </div>
        </div>
    )
}