import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Wizard } from 'react-use-wizard' 
import { Step } from "./Step"

export const Test = () => {
    const [ test, setTest ] = useState();
    const [ result, setResult ] = useState({});
    const {param} = useParams()
    useEffect(()=>{
        async function fetchTest() {
            let res = await fetch('http://localhost:3000/tests/' + param);
            let response = await res.json();
            setTest(response);
        }
    
        fetchTest();
    },[])

    const steps = test ? test.questions.map((question, id) => {
        
        return <Step result={result} setResult={setResult} key={id} question={question}/>
    }) : null

    return(
        <Wizard>
            {steps}
        </Wizard>
    )
}