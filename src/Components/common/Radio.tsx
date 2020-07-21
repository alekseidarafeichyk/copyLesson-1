import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type RadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    &
    {
        arr: Array<string>
        name: string
        value: string
        onChangeRadio: (e: ChangeEvent<HTMLInputElement>) => void
    }

function Radio(props: RadioPropsType) {
    let inputs = props.arr.map(el => {
        return (
            <div>
                <label>
                    <input
                        key={el}
                        type="radio"
                        name={props.name}
                        value={el}
                        onChange={props.onChangeRadio}
                        checked={el === props.value}
                    />
                    {el}
                </label>
            </div>
        )
    })

    return (
        <div>
            {inputs}
        </div>
    )
}

export default Radio;