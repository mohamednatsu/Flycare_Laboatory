


let addpc = document.getElementById("add");

let infopc = document.getElementById("con-addlab");
let rep = document.getElementById("con-addlab2");

let list = document.getElementById("listLab");

function AddPc(){
    infopc.style.display = "grid";
};


function Report(){
    rep.style.display = "grid";
    infopc.style.display = "none" ;
    console.log(rep);
};

function none(){
    infopc.style.display = "none" ;
    rep.style.display = "none" ;
    list.style.display = "none";
};


function viewlist() {
    list.style.display = "flex";
}


//function of report message

let btnRepot = document.getElementById("add3");

let report = document.getElementById("RepoPc");

let idLabReport = document.getElementById("idlab");

let Reports = [];

btnRepot.onclick = function () {
    let Messege = report.value;
    alert(`Succseful add The Report !`);
    Reports.push(Messege)
}






