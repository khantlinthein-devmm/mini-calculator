import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {

  const [output,setOutput] = useState(0);
  const [input,setInput] = useState(0);

  const haldleCalculation = (value) => {
    switch(value){
      case 'C' : setOutput(0) 
                  setInput(0)
                  break;
      case 'AC' : input.length == 1 ? setInput(0) : setInput(input.slice(0,input.length-1))
                  break
      case '='  : try{
        setOutput(eval(input))
      }catch(e){
        setOutput(e.message)
      }
      default : input == 0 ? setInput(value) : setInput(input + value);
    }
  }
  return (
    <>
      <div className="w-full h-screen bg-gray-800 justify-center items-center flex flex-col ">
        <div className='md:w-1/3 mx-auto'>
          <h1 className='text-white font-mono font-bold p-4 justify-center items-center flex text-4xl'>Mini Calculator</h1>
          <Output output={output} />
          <Input input={input} />
          <Button handleCalculation={haldleCalculation} />
        </div>
      </div>
    </>
  );
}

export default App;
