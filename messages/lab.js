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

function printJSONdata (arrData) {
    elem = document.getElementById("messages");
    for (var i = 0; i < arrData.length; i++) {
        elem.innerHTML += "<p>" + arrData[i]["content"] + " - " + arrData[i]["username"] + "</p>";
    }
}
