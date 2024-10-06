prueba1 = function(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let total1 = trisuma(a, b, c)
    document.getElementById("total1").innerHTML = "El total es:" +total1;
    }
prueba2= function(){
    let a = Number(document.getElementById("a2").value);
    let b = Number(document.getElementById("b2").value);
    let total2 = suma(a, b)
    document.getElementById("total2").innerHTML = "El total es:" +total2;
}