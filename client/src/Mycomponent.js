import { Mycontext } from "./Mycontext";
import { useContext } from "react";
//provider-> produces the data/properties
export default function Example(){
    //consumer
    const {text,setText}=useContext(Mycontext)
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("Hello World!")}>Click</button>
        </div>

    )
}

