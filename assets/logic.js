function handleSubmit(e) {

    var sfSessionId = document.getElementById("sessionInput").value;

        fetch('https://sfdxworks-dev-ed.my.salesforce.com/services/data/v52.0/search/?q=FIND%20%7Bandy%7D',
       {method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+sfSessionId
      }
        }
        )
        .then((response) => response.json())
        .then((data) => console.log(data));


    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    // console.log("=========== XMLHttpRequest readyState:", this.readyState, ", status:", this.status);
    // if (this.readyState == 4 && this.status == 200) {
    // //action to be performed when the document is ready:
    // alert("Apex REST call succeeded");
    // }
    // };
    // xhttp.onerror = function () {
    // console.log("=========== XMLHttpRequest readyState:", this.readyState, ", status:", this.status);
    // alert("Apex REST call failed");
    // };
    // xhttp.open("GET", "https://sfdxworks-dev-ed.my.salesforce.com/services/data/v52.0/search/?q=FIND%20%7Bandy%7D", true);
    // xhttp.setRequestHeader("Authorization", "Bearer "+sfSessionId);
    // xhttp.send();

    e.preventDefault();

}