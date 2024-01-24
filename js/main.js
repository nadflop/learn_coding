function showDiv(Div) {
    var elements = document.getElementsByClassName(Div);

    elements.array.forEach(element => {
        if (element.style.display == "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }); 
}