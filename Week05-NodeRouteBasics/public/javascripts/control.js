function search() {
    console.log('search');
}

function callServerWithoutParms() {
    //search();

    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((ex) => {
            console.log(ex);
        })

}

function callServer() {
    const userInput = document.getElementById('userInput').value;
    const query = {propForServer: userInput};

    fetch('/calculateFeetFromMiles', getPostOptions(query))
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch((ex) => {
            console.log(ex);
        });
}

window.onload = function() {
    $("#search").click(function() {

        fetch('/search')
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                $("#displaySearch").html(JSON.stringify(response, null,4));
            })
            .catch((ex) => {
                console.log(ex);
            })
        }
    )
    $("#calculateFeetFromMiles").click(function() {

        const userMiles = document.getElementById('userInput').value;
        fetch('/calculateFeetFromMiles' + '?miles=' + userMiles)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = "Feet from Mile: <br />";
                displayArea.innerHTML += JSON.stringify(response, null, 4);
            })
            .catch(ex => {
                console.log(ex);
            });
        }
    )
};



function getPostOptions(body) {
    return {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(body)
    };
}