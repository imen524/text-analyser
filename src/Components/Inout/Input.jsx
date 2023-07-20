import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

 function Input () {
    const [isClicked , setIsClicked] = useState(false);
    const [value, setValue] = useState('');
    console.log('value',value);
    return (
        <div>
            <Header value= {value} />
            <textarea type="text"  placeholder="saisir un text" 
            onChange={(event) => {
                setValue(event.currentTarget.value);
                setIsClicked(true);
               }}
                
               value = {value}  />
               <Footer  value= {value} isClicked={isClicked} />
        </div>
    )
}

export default Input;

