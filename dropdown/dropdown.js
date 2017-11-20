/**
 * Created by simon on 13/11/2017.
 */
function showContent() {
    document.getElementById("container").style.height = "auto";
    document.getElementById("primary").style.display = "none";
    document.getElementById("hide").style.display = "block";
}
function hideContent() {
    document.getElementById("container").style.height = "150px";
    document.getElementById("hide").style.display = "none";
    document.getElementById("primary").style.display = "block";
}
