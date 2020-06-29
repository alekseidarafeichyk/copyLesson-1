import React from "react";
import NavBar from "../NavBar/NavBar";

type AccordionPropsType = {
    name: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    const onClickHandler=() => {
        props.onClick(!props.collapsed)
    }

    return(
        <div>
            <h3 onClick={onClickHandler}>{props.name}</h3>
            {props.collapsed &&   <NavBar/>}

        </div>
    )
}

export default Accordion;