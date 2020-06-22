import React, {DetailedHTMLProps, ButtonHTMLAttributes} from "react";

type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {name: string, onClick: () => void, className?: string}


function ButtonNya(props: ButtonNyaPropsType) {

    return (
        <>
            <button
                className={props.className}
                onClick={props.onClick}>
                {props.name}</button>
        </>
    )
}

export default ButtonNya;