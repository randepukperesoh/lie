export async function fetchTest() {
    let res = await fetch('http://localhost:3000/tests');
    let response = await res.json();
}