import React, {useState} from "react";

function Child({value}){
const [newValue, setNewValue] = useState(value)
    function handleChange(event){
        value = setNewValue(event.target.value);
    }
    
    return(<div>
        <input id ="input" value={newValue} onChange={handleChange} />
    </div>)
}

function Parent({initial}){
    const [value] = useState(initial);
    
    return(
    <div>
        <div id="value">{value}</div>
        <Child value={value} />
        </div >
        )
}

export default Parent;