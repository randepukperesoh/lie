import { useState } from "react";
import { useWizard } from "react-use-wizard";
import './Step.css'
export const Step = ({ result, setResult, question}) => {
    const [ focus, setFocus] = useState(result[question.id]);

    const { handleStep, previousStep, nextStep } = useWizard();

    const keys = Object.keys(question.options);

    function setAnswer(id) {
        setFocus(id)
        let obj = result;
        obj[question.id] = id;
        setResult(obj)
    }

    return(
        <>
        <h2>{question.question} {question.id}</h2>
            {keys.map((k, id) => <div onClick={() => setAnswer(id)} className={focus == id ? 'focus' : null} key={k}>{k}</div>
            )}

            <button onClick={previousStep}> prev </button>
            <button onClick={nextStep}> next </button>
        </>
    )
}