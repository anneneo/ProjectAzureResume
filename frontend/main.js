window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiURL = "https://getresumecount.azurewebsites.net/api/GetResumeCount?code=8V5KhZXcSOSVrdtTDh55C86JPRvH7aazsEaq6HSZlaKET9CHJwIr/w=="
const localfunctionApi = 'http://localhost:7071/api/GetResumeCount';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}