import './App.css';
import React, { useState } from 'react';
function App() {

  const [result, setResult] = useState("")

  const clickHandler = (event) => {
    console.log('clicked')
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = () => {
    setResult("")
  }


  const calculate =()=> {

    setResult(eval(result).toString());

  }



  return (
    <div className="App">


      <div className='calc'>

        <input type="text" placeholder='0' id='answer' value={result} />
        <input type="button" value="9" className='buttons' onClick={clickHandler} />
        <input type="button" value="8" className='buttons' onClick={clickHandler} />
        <input type="button" value="7" className='buttons' onClick={clickHandler} />
        <input type="button" value="6" className='buttons' onClick={clickHandler} />
        <input type="button" value="5" className='buttons' onClick={clickHandler} />
        <input type="button" value="4" className='buttons' onClick={clickHandler} />
        <input type="button" value="3" className='buttons' onClick={clickHandler} />
        <input type="button" value="2" className='buttons' onClick={clickHandler} />
        <input type="button" value="1" className='buttons' onClick={clickHandler} />
        <input type="button" value="0" className='buttons' onClick={clickHandler} />
        <input type="button" value="." className='buttons' onClick={clickHandler} />
        <input type="button" value="+" className='buttons' onClick={clickHandler} />
        <input type="button" value="-" className='buttons' onClick={clickHandler} />
        <input type="button" value="*" className='buttons' onClick={clickHandler} />
        <input type="button" value="/" className='buttons' onClick={clickHandler} />
        <input type="button" value="%" className='buttons' onClick={clickHandler} />
        <input type="button" value="clear" className='buttons button1' onClick={clearDisplay} />
        <input type="button" value="=" className='buttons button1' onClick={calculate} />


      </div>




    </div>
  );
}

export default App;
