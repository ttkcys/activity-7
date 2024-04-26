var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function displayResults() {
    var average = 0;
    var highestScore = scores[0];
    var highestIndex = 0; 

    for (var i = 0; i < scores.length; i++) {
        average += scores[i]; 
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            highestIndex = i; 
        }
    }

    average /= scores.length; 

    var resultHTML = `<h2>Results</h2>
                      <p>Average score is ${average.toFixed(2)}</p>
                      <p>Highest score = ${names[highestIndex]} with a score of ${highestScore}</p>`; 

    $("results").innerHTML = resultHTML;
}


function displayScores() {
    var tableContent = "<table><tr><th>Name</th><th>Score</th></tr>";
    for (var i = 0; i < names.length; i++) {
        tableContent += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
    }
    tableContent += "</table>";
    $("scores_table").innerHTML = tableContent;
}

function addScore() {
    var name = $("name").value;
    var score = parseInt($("score").value);
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score from 0 to 100.");
    } else {
        names.push(name);
        scores.push(score);
        $("name").focus(); 
    }
}

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus(); 
};
