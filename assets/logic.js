function handleClick()
    {
        var sfSessionId = document.querySelector("#sessionInput").value;

        console.log(sfSessionId);
        fetch('https://sfdxworks-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Account/0015h00000fADJk',
       {
        method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+sfSessionId
            }
        }
        )
        .then((response) => 
        {
            console.log(response)
            return response.json()
        })
        .then((data)=> 
        {
            console.log(data)
        });
    }