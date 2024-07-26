import {useState} from 'react';

const Counter = ({step})=>{
 const [count, setCount] = useState(0)
   const  handleClick = ()=>{
        setCount(count+step)
    }
  
        return(
            <div>
                {count}
                <button onClick={()=>handleClick()}>Update</button>
            </div>
        )
}
export default Counter