import React, {ChangeEvent, KeyboardEvent} from "react";
import EditableSpan from "../../common/EditableSpan";

type JuniorPropsType = {
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
    error: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    setValue: (value: string) => void
}

function Junior(props: JuniorPropsType) {
    return(
        <EditableSpan
            onEnter={props.onEnter}
            error={props.error}
            value={props.value}
            setValue={props.setValue}
            onChange={props.onChange}
        />
    )
}

export default Junior;