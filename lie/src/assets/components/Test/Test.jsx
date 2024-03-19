import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Test = () => {
    const [test, setTest] = useState();
    const {param} = useParams()
    useEffect(()=>{
        async function fetchTest() {
            let res = await fetch('http://localhost:3000/tests/' + param);
            let response = await res.json();
            
            setTest(response);
        }
    
        fetchTest();
    },[])

    console.log(test)
    return(
        <div>

        </div>
    )
}