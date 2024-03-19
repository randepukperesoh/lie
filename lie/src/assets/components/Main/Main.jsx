import { useEffect, useState } from "react"


export const Main = () => {

    const [tests, setTests] = useState(false);

    useEffect(() => {
    async function fetchTest() {
        let res = await fetch('http://localhost:3000/tests');
        let response = await res.json();
        
        setTests(response);
    }

    fetchTest();
    }, []);

    const testElement =  tests ? tests.map((test) => {
        return(
            <div key={test.id}>{test.title}</div>
        )
    }) : false

    return(
        <div>
            {testElement}
        </div>
    )
}