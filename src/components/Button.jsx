import React from "react";

const Button = ({handleCalculation}) => {
  return (
    <div className="bg-gray-900 w-full grid grid-cols-4">
      
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>C</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>(</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>)</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>AC</button>

        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>1</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>2</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>3</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>+</button>

        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>4</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>5</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>6</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>.</button>

        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>7</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>8</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>9</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>*</button>

        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>.</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>0</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>00</button>
        

        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>&divide;</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500'>%</button>
        <button onClick={(e) => handleCalculation(e.target.innerText)} className='p-4 text-white transition duration-100 hover:bg-gray-500 border border-gray-500 bg-amber-500 col-span-3'>=</button>
        
      
    </div>
  );
};

export default Button;
