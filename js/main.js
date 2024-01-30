function showDiv(header, text) {
    var ctrl = document.getElementById(header);
    var element = document.getElementById(text);

    if (ctrl.ariaExpanded == "false" ) {
        element.style.display = "block";
        ctrl.ariaExpanded = "true";
        }
    else {
        element.style.display = "none";
        ctrl.ariaExpanded = "false";
    } 
}