import React from "react";
import t from "./Time.module.css"

type TimePropsType = {
    time: string
}

function Time(props: TimePropsType) {
    return (
        <div className={t.time}>
            <span>{props.time}</span>
            <img src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711433.jpg" alt="check"/>
        </div>

    );
}

export default Time;