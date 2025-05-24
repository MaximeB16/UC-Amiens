const Q1 = document.getElementById('q1');
const Q2 = document.getElementById('q2');
const Q3 = document.getElementById('q3');
const Q4 = document.getElementById('q4');
const BT = document.getElementById('next');

Q2.style.display = "none";
Q3.style.display = "none";
Q4.style.display = "none";

let Q = 1;
let V = 0;

function NxtQ(){
    if (Q==1){
        if (Q1.value()=="A"){
            V += 1;
        }else if(Q1.value()=="B"){
            V += 2;
        }else if(Q1.value()=="C"){
            V += 3;
        }
        Q2.style.display = "block";
        Q1.style.display = "none";
        Q = 2;
    }
}

BT.addEventListener('click', NxtQ());