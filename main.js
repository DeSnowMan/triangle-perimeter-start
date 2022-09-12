// Triangle Perimeter Assignment Start Code

document.getElementById("calc").addEventListener("click", Calc)
// Global vars


var Sides = {}


function Calc() {
    // get variables
    var XA = +document.getElementById("xA").value;

    var YA = +document.getElementById("yA").value;

    var XB = +document.getElementById("xB").value;

    var YB = +document.getElementById("yB").value;

    var XC = +document.getElementById("xC").value;

    var YC = +document.getElementById("yC").value;

    let ABa = Dist(XA, YA, XB, YB);

    let ACa = Dist(XA, YA, XC, YC);

    let BCa = Dist(XB, YB, XC, YC);

    let Perimeter = ABa + ACa + BCa;

    document.getElementById("ABa").innerHTML = ABa 
    document.getElementById("ACa").innerHTML = ACa
    document.getElementById("BCa").innerHTML = BCa

    document.getElementById("Perimeter").innerHTML = Perimeter
}



function Dist(X, Y, X1, Y1) {
    let A2 =  (X - X1) * (X - X1);
    let B2 = (Y - Y1) * (Y - Y1);
    
    let C = Math.sqrt(A2 + B2)

    return C;
}

