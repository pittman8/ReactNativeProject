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
};

//$(document).ready(function() { 'use strict';
//});
