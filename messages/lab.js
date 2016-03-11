function parse () {
    var req = new XMLHttpRequest();
    var loc = "data.json";

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var arrData = JSON.parse(req.responseText);
            printJSONdata(arrData);
        }
    };

    req.open("GET", loc, true);
    req.send();
}

function printJSONdata(arrData) {
    console.log("worked");
    elem = document.getElementById("messages");
    elem.innerHTML = "<p>Worked!</p>";
}
