import React, {DetailedHTMLProps, ButtonHTMLAttributes} from "react";

type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {className?: string}


function ButtonNya(props: ButtonNyaPropsType) {

    return (
        <>
            <button
                className={props.className}
                {...props}/>
        </>
    )
}

export default ButtonNya;