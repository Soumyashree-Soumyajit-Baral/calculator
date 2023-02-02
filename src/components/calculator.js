import React, { useState } from "react"
import "./calculator.css"

// function Calculator() {
//     const [result, setResult] = useState("");
//     const handleClick = (e) => {
//         setResult(result+e.target.name)
//     }
//     const clear = () => {
//         setResult("")
//     }
//     const backspace = () => {
//         setResult(result.slice(0, -1))
//     }
//     const claculate = () => {
//         setResult(eval(result).toString())
//     }



//     return (
//         <>
//             <div className="container">
//                 <form>
//                     <input type="text" value={result}></input>
//                 </form>

//                 <div class="keypad">
//                     <button className="highlight" id="clear" onClick={clear}>Clear</button>
//                     <button className="highlight" id="backspace" onClick={backspace}>BS</button>
//                     <button className="highlight" name="/" onClick={handleClick}>/</button>
//                     <button name="7" onClick={handleClick}>7</button>
//                     <button name="8" onClick={handleClick}>8</button>
//                     <button name="9" onClick={handleClick}>9</button>
//                     <button className="highlight" name='*' onClick={handleClick}>*</button>
//                     <button name="4" onClick={handleClick}>4</button>
//                     <button name="5" onClick={handleClick}>5</button>
//                     <button name="6" onClick={handleClick}>6</button>
//                     <button className="highlight" name='-' onClick={handleClick}>-</button>
//                     <button name="1" onClick={handleClick}>1</button>
//                     <button name="2" onClick={handleClick}>2</button>
//                     <button name="3" onClick={handleClick}>3</button>
//                     <button className="highlight" name='+' onClick={handleClick}>+</button>
//                     <button name="0" onClick={handleClick}>0</button>
//                     <button name="." onClick={handleClick}>.</button>
//                     <button className="highlight" name='=' id="res" onClick={claculate}>=</button>

//                 </div>
//             </div>


//         </>
//     )
// }
// export default Calculator;

function Calculator(){
    const [result,setResult]=useState("");
    const handleClick=(e)=>{
        setResult(result+e.target.name)
    }
    const clear=()=>{
        setResult("")
    }
    const backspace=()=>{
        setResult(result.slice(0,result.length-1))
    }
    const claculate=()=>{
        setResult(eval(result).toString())//"1+2+3+4"
    }


    return(
        <>
            <div className="container">
                <form>
                    <input value={result} type="text"></input>
                </form>

                <div className="keypad">
                    <button className="highlight" onClick={clear} id="clear">Clear</button>
                    <button className="highlight" onClick={backspace} id="backspace">C</button>
                    <button className="highlight" onClick={handleClick} name='/'>/</button>
                    <button  onClick={handleClick} name='7'>7</button>
                    <button  onClick={handleClick} name='8'>8</button>
                    <button  onClick={handleClick} name='9'>9</button>
                    <button className="highlight" onClick={handleClick} name='*'>*</button>
                    <button  onClick={handleClick} name='4'>4</button>
                    <button  onClick={handleClick} name='5'>5</button>
                    <button  onClick={handleClick} name='6'>6</button>
                    <button className="highlight" onClick={handleClick} name='-'>-</button>
                    <button  onClick={handleClick} name='1'>1</button>
                    <button  onClick={handleClick} name='2'>2</button>
                    <button  onClick={handleClick} name='3'>3</button>
                    <button className="highlight" onClick={handleClick} name='+'>+</button>
                    <button  onClick={handleClick} name='0'>0</button>
                    <button  onClick={handleClick} name='.'>.</button>
                    <button className="highlight" onClick={claculate} id="res">=</button>

                </div>
            </div>
        
        </>
    )
}
export default Calculator;