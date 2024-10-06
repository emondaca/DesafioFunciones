function cambioColor(divId) {
    let element = document.querySelector('#' + divId);
    element.style.backgroundColor = "black"
}

var color1 = "white"
document.addEventListener('keydown', function(event) {
    if (event.key === "a") {
        color1 = "pink";
    } else { if (event.key === 's') {
                color1 = "orange";
            } else {if (event.key === "d"){
                        color1 = "skyblue";
                    }
            }
    }
})
function cambioColor1() {
    let element = document.querySelector("#key");
    element.style.backgroundColor = color1;
}

 var color2 = "white"
document.addEventListener('keydown', function(event) {
    if (event.key === "q") {
        color2 = "purple";
    } else { if (event.key === 'w') {
                color2 = "grey";
            } else {if (event.key === "e"){
                        color2 = "brown";
                    }
            }
    }
})
function cambioColor2() {
    let element = document.querySelector("#key2");
    element.style.backgroundColor = color2;
}