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

    fetch('/calculateCircumference', getPostOptions(query))
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

    $("#getFeetInMile").click(function() {
        fetch('/getFeetInMile')
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = "Feet In One Mile: <br />";
                displayArea.innerHTML += JSON.stringify(response, null, 4);
            })
            .catch(ex => {
                console.log(ex);
            });
        }
    )
    $("#calculateCircumference").click(function() {

        const userRadius = document.getElementById('userInput').value;
        fetch('/calculateCircumference' + '?radius=' + userRadius)
            .then((response) => response.json())
            .then((response) => {
                const displayArea = document.getElementById('displayArea');
                displayArea.innerHTML = "Circumference from Radius: <br />";
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