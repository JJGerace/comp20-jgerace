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
    //elem.innerHTML += "<p>" arrData[1]["content"] + "</p>";
    //elem.innerhtml += "<p>train arriving at " +  parsedobjects[count]["platformkey"] + " in " + parsedobjects[count]["timeRemaining"] + "</p>";
    elem.innerHTML += "<p>train arriving at " +  arrData[1]["content"] + "</p>";

}
