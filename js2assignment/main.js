var teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
var wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
var losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var table = '<table><tr><th> Teams</th><th>Wins</th><th>Losses</th></tr>'; 



    var teamHighWins = 0;
    var teamLeader = 0;
    
    for (let j=0; j<teams.length; j++) {
        if (wins[j] >= teamHighWins) {
            teamHighWins = wins[j];
            teamLeader = j;
        }     
        
       
    } 
    for (let i=0; i<teams.length; i++) { 
        if (teams[i] == teams[teamLeader]) {
            table += `<tr> <td> <strong> ${teams[i]} </strong> </td> <td> <strong> ${wins[i]} </strong> </td> <td> <strong> ${losses[i]}</strong></td></tr>`;
        } else table += `<tr> <td> ${teams[i]} </td> <td> ${wins[i]} </td> <td> ${losses[i]}</td> </tr>`;
    
}
table += '</table>';


document.getElementById('tableBaseball').innerHTML = table;




