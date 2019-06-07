let formModal = document.getElementsByClassName("form-modal")[0];
let span = document.getElementsByClassName("close")[0];
let btnModal = document.getElementsByClassName("btn-modal")[0];
let myBtn = document.getElementById("myBtn");


span.addEventListener('click', function(){
 formModal.style.display = 'none';
}, false);

myBtn.addEventListener('click', function(){
 formModal.style.display = 'flex';
}, false);

//почему не закрывается окно модал!!!
//window.onclick = function (event) {
//    if (event.target == formModal) {
//        formModal.style.display = 'none';
//    }
//}

class Visit {
    constructor(title,fullName,data){
        this._title = title;
        this._fullName = fullName;
        this._data = data;
        this.appointment = false;
    }
    recepton(){
        this.appointment = true;
        console.log('Appointment to '+ `${this._title}` + ' was successful');
    }
    get title() {
        return this._title;
    }
    get fullName() {
        return this._fullName;
    }
    get data() {
        return this._data;
    }
    set title(value) {
        this._title = value;
    }
}

class Cardiolodist extends Visit {
    constructor(title,fullName,visitTarget,bloodPressure,bmi,diseases,age){
        super(title,fullName);
        this.visitTarget = visitTarget;
        this.presure = bloodPressure;
        this.bmi = bmi;/* body mass index*/
        this.diseases = diseases;
        this.age = age;
    }
    recepton() {
        super.recepton();
        console.log('Appointment to '+ `${this.title}` +'from Cardiologist class');
    }
}

class Dentist extends Visit {
    constructor(title,visitTarget,fullName){
        super(title,fullName);
        this.visitTarget = visitTarget;
    }
}

class Terapist extends Visit {
    constructor(title,visitTarget,fullName,age){
        super(title,fullName);
        this.visitTarget = visitTarget;
        this.age = age;
    }
}

let cardiolodist = new Cardiolodist("Cardiologist");
let dentist = new Dentist("Dentist");
let terapist = new Terapist("Terapist");

let cardio = document.getElementsByClassName("cardio")[0];
let dent = document.getElementsByClassName("dent")[0];
let therap = document.getElementsByClassName("therap")[0];

function doctorFunction() {
    let elementOption = document.getElementById('mySelect');
    let userOption = elementOption.options[elementOption.selectedIndex].value;
        if (userOption == "dentist") {
            dent.style.display = "block";
            cardio.style.display = "none";
            therap.style.display = "none";
        }
        if (userOption == "cardiologist") { /*при первом выборе кардиолога ничего не отображает*/
            cardio.style.display = "block";
            dent.style.display = "none";
            therap.style.display = "none";
        }
        if (userOption == "therapist") {
            therap.style.display = "block";
            cardio.style.display = "none";
            dent.style.display = "none";
        }
}

let elementOption = document.getElementById('mySelect');
let userOption = elementOption.options[elementOption.selectedIndex].value;


function createCard(form) {
    let userOption = elementOption.options[elementOption.selectedIndex].value;
    let userName = form.name.value;
    let userTarget = form.target.value;
    let userPressure = form.pressure.value;
    let userMass = form.mass.value;
    let userDiseases = form.diseases.value;
    let userAge = form.age.value;
    let card = new Cardiolodist (userOption, userName, userTarget, userPressure, userMass, userDiseases, userAge);
    card.recepton();
    
}
//console.log(card);ничего в консоле не отображает

let placeCard = document.getElementsByClassName("form-modal")[0];
let modalBtn = document.getElementById("myCard");

modalBtn.onclick = function () { 
    let Card = document.createElement("div");
    let buttonDetails = document.createElement("span");
    let buttonDelete = document.createElement("span");
    let doctorOption = document.createElement("p");
    let nameOption = document.createElement("p");
    Card.className = "cardProperties";
    buttonDetails.className = "another-button";
    buttonDelete.className ="delete";
    document.body.appendChild(Card);
    Card.appendChild(doctorOption);
    Card.appendChild(buttonDetails);
    Card.appendChild(buttonDelete);
    Card.appendChild(nameOption);
    doctorOption.innerText = elementOption.options[elementOption.selectedIndex].value;
    formModal.style.display = "none";
    buttonDetails.innerText = "Подробнее";
    buttonDelete.innerText = "Удалить";
    
//    nameOption.innerText = userName; не находит то,что ввел в инпут  let userName = form.name.value;

}

//выдает ошибку функции,почему?
//let buttonDelete = document.getElementsByClassName("delete")[0];
//
//buttonDelete.addEventListener('click', function(){
// cardProperties.style.display = 'none';
//}, false);

