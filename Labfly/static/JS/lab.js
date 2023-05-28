
//decleration of Variables
let mood = 'create';
let indexUpdate;
let add = document.querySelector(".update");
const addLabButton = document.querySelector('#Add');
let IDInput = document.querySelector('#idd');
const titleInput = document.querySelector('#title');
const buildInput = document.querySelector('#buildNum');
const floorInput = document.querySelector('#floorNum');
const capacityInput = document.querySelector('#capacity');
const chairInput = document.querySelector('#chairNum');
const pcInput = document.querySelector('#pcNum');
const statusInput = document.querySelector('#status');

//array of objects labs
let labs;
if (localStorage.Lab != null) {
    labs = JSON.parse(localStorage.Lab);
}
else {
    labs = [];
}

//to check  validation of input

function validateInput() {
    // checks if any of the input fields was empty
    if (
        titleInput.value.trim() === '' ||
        IDInput.value.trim() === '' ||
        buildInput.value.trim() === '' ||
        floorInput.value.trim() === '' ||
        capacityInput.value.trim() === '' ||
        chairInput.value.trim() === '' ||
        pcInput.value.trim() === '' ||
        statusInput.value.trim() === ''
    ) {
        alert('Please fill in all the fields');
        return false;
    }

    // checks if capacity, chair and pc numbers are positive integers
    if (
        parseInt(capacityInput.value) < 0 ||
        parseInt(chairInput.value) < 0 ||
        parseInt(pcInput.value) < 0) {
        alert('Please enter valid positive numbers for number of capacity, chairs and PCs');
        return false;
    }

    return true;
}

//to add lab information in Local Storage

function addLabToLocalStorage() {
    let lab = {
        title: titleInput.value,
        ID: IDInput.value,
        buildNumber: buildInput.value,
        floorNumber: floorInput.value,
        capacityAmount: capacityInput.value,
        chairNumber: chairInput.value,
        pcNumber: pcInput.value,
        status: statusInput.value,
    };
    if (mood === 'create') {
        if(lab.count > 1) {
            for (let i = 0; i < lab.count; i++) {
                labs.push(lab);
        }
        }
        else {
            labs.push(lab);
        }
    }
    else {
        labs[ indexUpdate ] = lab;
        mood = 'create';
        add.innerHTML = "Add Laboratory";

    }
    localStorage.setItem("Lab", JSON.stringify(labs));
    titleInput.value = '';
    IDInput.value = '';
    buildInput.value = '';
    floorInput.value = '';
    capacityInput.value = '';
    chairInput.value = '';
    pcInput.value = '';
    statusInput.value = '';

}


addLabButton.addEventListener('click', function () {
    if (validateInput()) {
        addLabToLocalStorage();
        showTable();
    }
});

//To view data from Local Storage

function showTable() {

    let table = '';

    for (let i = 0; i < labs.length; i++) {
        if (labs[i].status === "inactive" || labs[i].status === "Inactive") {
            table += `<tr>
                <td>${labs[i].ID}</td>
                <td>${labs[i].title}</td>
                <td>${labs[i].buildNumber}</td>
                <td>${labs[i].floorNumber}</td>
                <td>${labs[i].capacityAmount}</td>
                <td>${labs[i].pcNumber}</td>
                <td>${labs[i].chairNumber}</td>
                <td><b class = "inact" >.</b>${labs[i].status}</td>
                <td><button onclick="UpdateLab(${i})" id="btnEdit">Edit</button></td>
                <td><button onclick="deleteLab(${i})" id="btnDelete">Delete</button></td>
        </tr>`
        }
        else if(labs[i].status === "active" || labs[i].status === "Active") {
            table += `<tr>
            <td>${labs[i].ID}</td>
            <td>${labs[i].title}</td>
            <td>${labs[i].buildNumber}</td>
            <td>${labs[i].floorNumber}</td>
            <td>${labs[i].capacityAmount}</td>
            <td>${labs[i].pcNumber}</td>
            <td>${labs[i].chairNumber}</td>
            <td><b id= "light" >.</b>${labs[i].status}</td>
            <td><button onclick="UpdateLab(${i})" id="btnEdit">Edit</button></td>
            <td><button onclick="deleteLab(${i})" id="btnDelete">Delete</button></td>
            </tr>`
        }
        else {
            alert("PLease Enter Valid Status");
        }
        document.getElementById("table").innerHTML = table;
    }
}


//to delete All data from Local Storage

let del = document.getElementById("delete");

del.addEventListener("click", function () {
    let ans = confirm("Are You sure?");
    if (ans === true) {
        location.reload();
        showTable();
        localStorage.clear();
    }
});

showTable();


//To check if Labs are Repair and view the List of Pc


function listLabs() {

    let listTable = document.getElementById("listTable");

    let list = '';

    for (let i = 0; i < labs.length; i++) {

        list += `<tr>
                <td>${labs[i].ID}</td>
                <td>Repair
                <div class="checkbox-wrapper-3">
                <input type="checkbox" id="cbx-${labs[i].ID}" />
                <label for="cbx-${labs[i].ID}" class="toggle"><span></span></label>
                    </div>
                    </td>
                </tr>`
        document.getElementById("listTable").innerHTML = list;
    }
}

let butList = document.getElementById("listB").addEventListener("click",
    function () {
        listLabs();
    })


//this function add new Pc in specific id

let LabID = document.querySelector("#idlab");


var butAddPc = document.querySelector("#add2");

butAddPc.onclick = function () {
    for (let i = 0; i < labs.length; i++) {
        if (labs[i].ID == LabID.value) {
            let newNum = ++labs[i].pcNumber;
            labs[i].pcNumber = newNum;
            localStorage.setItem("pcNumber", JSON.stringify(labs[i].pcNumber));
            alert("Add Succseful !");
            showTable();
        }
    }
};


//to edit Lab and Updating

function UpdateLab(i) {
    titleInput.value = labs[i].title;
    IDInput.value = labs[i].ID;
    buildInput.value = labs[i].buildNumber;
    floorInput.value = labs[i].floorNumber;
    capacityInput.value = labs[i].capacityAmount;
    chairInput.value = labs[i].chairNumber;
    pcInput.value = labs[i].pcNumber;
    statusInput.value = labs[i].status;
    add.innerHTML = "Update";
    mood = 'update';
    indexUpdate = i;
}


//delete specific lab

let btnDel = document.getElementById("btnDelete");
function deleteLab(i) {
    let answer  = confirm("Are Yo Sure?");
    if (answer === true) {
        labs.splice(i, 1);
        localStorage.Lab = JSON.stringify(labs);
        location.reload();
    }
}



//search the lab By Name

let btnserch = document.getElementById("srch");

let searchInput = document.getElementById("search");



btnserch.onclick =  function search() {
    console.log(searchInput.value);
    let result = '';
    for (let j = 0; j < labs.length; j++) {
        if(labs[j].title.includes(searchInput.value)) {
            if (labs[j].status === "inactive" || labs[j].status === "Inactive") {
                result += `<tr>
                    <td>${labs[j].ID}</td>
                    <td>${labs[j].title}</td>
                    <td>${labs[j].buildNumber}</td>
                    <td>${labs[j].floorNumber}</td>
                    <td>${labs[j].capacityAmount}</td>
                    <td>${labs[j].pcNumber}</td>
                    <td>${labs[j].chairNumber}</td>
                    <td><b class = "inact" >.</b>${labs[j].status}</td>
                    <td><button onclick="UpdateLab(${j})" id="btnEdit">Edit</button></td>
                    <td><button onclick="deleteLab(${j})" id="btnDelete">Delete</button></td>
            </tr>`
            }
            else if(labs[j].status === "active" || labs[j].status === "Active") {
                result += `<tr>
                <td>${labs[j].ID}</td>
                <td>${labs[j].title}</td>
                <td>${labs[j].buildNumber}</td>
                <td>${labs[j].floorNumber}</td>
                <td>${labs[j].capacityAmount}</td>
                <td>${labs[j].pcNumber}</td>
                <td>${labs[j].chairNumber}</td>
                <td><b id= "light" >.</b>${labs[j].status}</td>
                <td><button onclick="UpdateLab(${j})" id="btnEdit">Edit</button></td>
                <td><button onclick="deleteLab(${j})" id="btnDelete">Delete</button></td>
                </tr>`
            }
            else {
                alert("PLease Enter Valid Status");
            }
    }
        
    }

    document.getElementById("table").innerHTML = result;
}