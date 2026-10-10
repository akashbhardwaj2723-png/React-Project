import { useState } from "react";
import {useDispatch} from 'react-redux';
import {setQuery}  from "../redux/features/searchSlise"

function SearchBar () {
  const [text, setText] = useState("");
  
  const dispatch = useDispatch();

  const   submitHandler =(e)=>{
    e.preventDefault()
    
    dispatch(setQuery(text))

    setText("")

  } 

  return (
    <div >
      <form action=""onClick={(e)=>
        submitHandler(e)
        }  
         className="flex flex-col sm:flex-row gap-3 sm:gap-5 p-4 sm:p-7 bg-linear-to-r from-teal-800 to-cyan-800">
        <input
        required
          type="text"
          id=""
          name=""

         className="w-full sm:w-1/2 sm:ml-50 py-2 text-base sm:text-xl px-3 rounded-xl border-2 outline-none"
          placeholder="Search anything here"
          value={text}
          onChange={(e)=>{
           setText(e.target.value)
          }}
        />

        <button className="cursor-pointer border-2 px-4 py-2 rounded-xl active:scale-90 whitespace-nowrap">Search...</button>
      </form>
    </div>
  );
};

export default SearchBar;