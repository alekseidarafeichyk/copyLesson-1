import React, {useState} from 'react';
import styles from './Time.module.css'

function Time() {

    const [timerId, setTimerId] = useState();
    const [now, setNow] = useState(new Date())


    const start = () => {
        let timerID = setInterval(() => {
            setNow(new Date())
        }, 1000)
        setTimerId(timerID)
    }

    const stop = () => {
        clearInterval(timerId)
    }

    return (
        <div>

            <div className={styles.time}>
                <div className={styles.modal}>
                    {now.toString()}
                </div>
                {now.toString()}
            </div>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}

export default Time