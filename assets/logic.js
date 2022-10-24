function handleClick()
{
    var sfSessionId = document.querySelector("#sessionInput").value;

    console.log(sfSessionId);
    
    

    postData('https://api-mon.herokuapp.com/fetcher', { sessionId: sfSessionId })
    .then((data) => {
        console.log('This is response from axios - ');
        console.log(data); // JSON data parsed by `data.json()` call
    });

}

// Example POST method implementation:
async function postData(url = '', data = {}) {
// Default options are marked with *
const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return response; // parses JSON response into native JavaScript objects
}

