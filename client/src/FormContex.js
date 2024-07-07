import { createContext, useState } from "react";

export const FormContex = createContext();
//component to acces to consumer
export const FormProvider=({childComp})=>{
    const [localDB,setDB] = useState([])
    return(
        <FormContext.Provider
        value={{localDB,setDB}}>
            {childComp}
        </FormContext.Provider>
    )
}  

1