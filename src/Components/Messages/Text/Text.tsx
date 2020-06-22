import React from "react";
import t from './Text.module.css'

type TextPropsType = {
    text: string
}

function Text(props: TextPropsType) {
    return (
        <div className={t.text}>
            {props.text}
        </div>
    );
}

export default Text;