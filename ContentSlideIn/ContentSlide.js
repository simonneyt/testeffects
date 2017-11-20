/*** Created by simon on 15/11/2017.*/

function GaRechts() {
    $( "#next" ).click(function() {
        $( "#tekst" ).animate({
            left: "-350"
        }, 1500 );
    });
    document.getElementById("next").style.display = "none";
    document.getElementById("prev").style.display = "block";
}
function GaLinks() {
    $( "#prev" ).click(function() {
        $( "#tekst" ).animate({
            left: "0"
        }, 1500 );
    });
    document.getElementById("next").style.display = "block";
    document.getElementById("prev").style.display = "none";
}
