import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string
    onChange: (newValue:string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

    let [title, setTitle] = useState(props.value)
    let [editMode, setEditMode] = useState<boolean>(false)

    const onDoubleClickHandler = () => {
        setEditMode(true)
        setTitle(props.value)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const activateViewMode = (e: ChangeEvent<HTMLInputElement>) => {
        setEditMode(false)
        setTitle(props.value)
        props.onChange(title)
    }

    return editMode
        ? <input value={title} autoFocus onChange={changeTitle} onBlur={activateViewMode}/> :
        <span onDoubleClick={onDoubleClickHandler}>{props.value}</span>

}