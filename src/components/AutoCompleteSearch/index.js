import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const AutoCompleteSearch = (props) => {

    const [options, setOptions] = useState([])
    const [text, setText] = useState("")
    const [touched, setTouched] = useState(false)

    const onChange = (e) => {
        let text = e.currentTarget.value
        if (!touched) setTouched(true)
        setText(text)
        setOptions(
            text ? props.options.filter(v => v.toLowerCase().includes(text.toLowerCase())) : []
        )
    }

    return (
        <div className="AutoCompleteSearch">
            <input className="AutoCompleteSearch_input" type="text" placeholder="location" onChange={onChange} />
            {options.length !== 0 ?
                <ul className="AutoCompleteSearch_options">{
                    options.map((option, i) => {
                        return (
                            <li className="AutoCompleteSearch_options_option" key={i}>
                                <NavLink to={`/battles/${option}`}>{option}</NavLink>
                            </li>)
                    })
                }
                </ul>
                : touched && text && <p>Not Found</p>}
        </div>
    )
}

export default AutoCompleteSearch;

