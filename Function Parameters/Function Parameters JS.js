var a;
function ageVote(a){
    if(a >= 18 && a > 0){
        document.getElementById("resultA").innerHTML="Can Vote";
    }
    else if(a < 18 && a > 0){
        document.getElementById("resultA").innerHTML="Can't Vote";
    }
    else{
        document.getElementById("resultA").innerHTML="Please Enter Valid Text";
    }
}

var b;
var pi = 3.14;
function areaCircle(b){
    var c = b * b * pi;
    document.getElementById("resultB").innerHTML="The Radius of the Circle is: " + c;
}

var d;
var e;
function compareNumbers(d, e){
    if(d > e){
        document.getElementById("resultC").innerHTML=d + " is Greater Than " + e;
    }
    else if(d < e){
        document.getElementById("resultC").innerHTML=d + " is Less Than " + e;
    }
    else if(d === e){
        document.getElementById("resultC").innerHTML=d + " is equal to " + e;
    }
    else{
        document.getElementById("resultC").innerHTML="ERROR";
    }
}

var f;
function evenOdd(f){
    if(f < 0){
        document.getElementById("resultD").innerHTML="Enter a Positive Number";
    }
    else if(Number(f)%2 == 0){
        document.getElementById("resultD").innerHTML="Number is Positive";
    }
    else if(Number(f)%2 != 0){
        document.getElementById("resultD").innerHTML="Number is Negative";
    }
    else{
        document.getElementById("resultD").innerHTML="ERROR";
    }
}

var g;
function Palendrome(g){
    var h = g.split("").reverse().join("");

    if(h == g){
        document.getElementById("resultE").innerHTML=g + " is a Palendrome";
    }
    else{
        document.getElementById("resultE").innerHTML=g + " is not a Palendrome";
    }
    
}
