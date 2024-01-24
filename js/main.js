function showDiv(Div) {
    var element = document.getElementById(Div);

    if (element.ariaExpanded == "false" ) {
        element.style.display = "block";
        element.ariaExpanded = "true";
        }
    else {
        element.style.display = "none";
        element.ariaExpanded = "false";
    } 
}