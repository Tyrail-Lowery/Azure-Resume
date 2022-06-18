window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called funtion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);

    })
return count;
}