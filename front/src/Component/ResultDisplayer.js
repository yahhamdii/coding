import React, {useState} from "react";


function ResultDisplayer({getNewResult}){

    let [result, setResult] = useState(null); 

    function handleClick(){
        setResult(getNewResult())
    }

    return(<div>
        <button id="button" onClick={handleClick}>Click</button>
        {result !=null && <span id="result">{result}</span>}
    </div>)}

export default ResultDisplayer;
