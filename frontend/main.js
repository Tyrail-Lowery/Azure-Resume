window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter-new.azurewebsites.net/api/GetResumeCounter?code=Rx3RHamfsdCaQF9aopvbn-KR1D8Vmg-_XC22snLRRcLbAzFuSapM9Q==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called funtion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);

    });
return count;
}