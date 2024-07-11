import { useState } from "react"

export default function Home(){
    const [name,setname]=useState("");
    const [ShowName,SetShowName]=useState("");
    const handleChange=(e)=>{setname(e.target.value);}
    const handleButton=()=>{
        SetShowName(`Welcome,${name}`);
    }
    return(
        <div>
            <input type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
            />
            <button className="bg-color border border-2 w-20"
            onClick={handleButton} >Submit</button>
            {ShowName}
        </div>
    )
}