
function changeColor() {
    let colorList = ["red", "blue", "green", "purple"];
    let divs = document.getElementsByClassName('box');
    let colorVariable = "blue";  // The variable that controls the CSS change

   
    for (let i = 0; i < divs.length; i++) {
        // If the variable matches a color, change that specific div's background color
        if (colorList[i] === colorVariable) {
            divs[i].style.backgroundColor = colorList[i];
        }
    }

    let index = 0;
    while (index < divs.length) {
        if (colorList[index] !== colorVariable) {
            divs[index].style.backgroundColor = "lightgray";  // Reset others
        }
        index++;
    }
}
