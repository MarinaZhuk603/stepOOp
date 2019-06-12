let formModal = document.getElementsByClassName("form-modal")[0];
let span = document.getElementsByClassName("close")[0];
let btnModal = document.getElementsByClassName("btn-modal")[0];
let myBtn = document.getElementById("myBtn");
let info = document.getElementsByTagName("h3")[0];

const desk = document.getElementById('desk');

span.addEventListener('click', function () {
    formModal.style.display = 'none';
    info.style.display = "none";
}, false);

myBtn.addEventListener('click', function () {
    formModal.style.display = "flex";
    info.style.display = "none";
}, false);

//document.addEventListener('click', (e) => {
//    if (e.target.id==="myBtn" && formModal.classList.contains('modal-hidden')) {
//        console.log('o');
//        formModal.classList.remove('modal-hidden');
//        return false;
//    }
//    if (!e.target.classList.contains('form-modal') && !formModal.classList.contains('modal-hidden')) {
//        console.log(e.target);
//        formModal.classList.add('modal-hidden');
//    }
//})

//почему не закрывается окно модал!!!
//window.onclick = function (event) {
//    if (event.target !== formModal && formModal.classList.contains('modal-hidden')) {
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
        this.pressure = bloodPressure;
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
    constructor(title,fullName,visitTarget){
        super(title,fullName);
        this.visitTarget = visitTarget;
    }
}

class Terapist extends Visit {
    constructor(title,fullName,visitTarget,age){
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
    elementOption = document.getElementById('mySelect');
    userOption = elementOption.options[elementOption.selectedIndex].value;
    if (userOption == 'cardiologist') {
        let userName = form.name.value;
        let userTarget = form.target.value;
        let userPressure = form.pressure.value; 
        let userMass = form.mass.value;
        let userDiseases = form.diseases.value;
        let userAge = form.age.value;
        let itemDoctor = new Cardiolodist(userOption, userName, userTarget, userPressure, userMass, userDiseases, userAge);
        //   создание кардиолога
        let Card = document.createElement("div");
        Card.className = "cardProperties";
        desk.appendChild(Card);
        formModal.style.display = "none";
        let paragraphOption = document.createElement("p");
        let paragraphName = document.createElement("p");
        let target = document.createElement("p");
        let pressure = document.createElement("p");
        let mass = document.createElement("p");
        let diseases = document.createElement("p");
        let age = document.createElement("p");
        let buttonDetails = document.createElement("span");
        let buttonDelete = document.createElement("span");
        paragraphName.innerText = itemDoctor.fullName;
        paragraphOption.innerText = itemDoctor.title;
        target.innerText = itemDoctor.visitTarget;
        pressure.innerText = itemDoctor.pressure;
        mass.innerText = itemDoctor.bmi;
        diseases.innerText = itemDoctor.diseases;
        age.innerText = itemDoctor.age;
        desk.appendChild(Card);
        Card.appendChild(paragraphOption);
        Card.appendChild(paragraphName);
        buttonDelete.innerText = "Delete";
        buttonDelete.className = "delete";
        buttonDetails.className = "details";
        buttonDetails.innerText = "See details";
        Card.appendChild(buttonDetails);
        Card.appendChild(buttonDelete);
        buttonDelete.onclick = function deleteCard() {
            Card.remove();
        }
        buttonDetails.onclick = function moreInfo() {
            Card.insertBefore(target, buttonDetails);
            Card.insertBefore(pressure, buttonDetails);
            Card.insertBefore(mass, buttonDetails);
            Card.insertBefore(diseases, buttonDetails);
            Card.insertBefore(age, buttonDetails);
        }
        form.reset();
        makeDragonDrop(Card);

    }
    if (userOption == 'dentist') {
        let userName = dentistForm.name.value;
        let userTarget = dentistForm.target.value;
        let userDate = dentistForm.lastVisit.value;
        let itemDoctor = new Dentist(userOption, userName, userDate, userTarget);
        itemDoctor.recepton();
        //    создание карточки стоматолог
        let Card = document.createElement("div");
        Card.className = "cardProperties";
        formModal.style.display = "none";
        let paragraphOption = document.createElement("p");
        let paragraphName = document.createElement("p");
        let target = document.createElement("p");
        let last = document.createElement("p");
        let buttonDetails = document.createElement("span");
        let buttonDelete = document.createElement("span");
        paragraphName.innerText = itemDoctor.fullName;
        paragraphOption.innerText = itemDoctor.title;
        target.innerText = userTarget;
        last.innerText = userDate;
        desk.appendChild(Card);
        Card.appendChild(paragraphOption);
        Card.appendChild(paragraphName);
        buttonDelete.innerText = "Delete";
        buttonDelete.className = "delete";
        buttonDetails.className = "details";
        buttonDetails.innerText = "See details";
        Card.appendChild(buttonDetails);
        Card.appendChild(buttonDelete);
        buttonDelete.onclick = function deleteCard() {
            Card.remove();
        }
        buttonDetails.onclick = function moreInfo() {
            Card.insertBefore(target, buttonDetails);
            Card.insertBefore(last, buttonDetails);
        }
        makeDragonDrop(Card);
        dentistForm.reset();
    }
    if (userOption == 'therapist') {
        let userName = therapistForm.name.value;
        let userTarget = therapistForm.target.value;
        let userAge = therapistForm.age.value;
        let itemDoctor = new Terapist(userOption, userName, userTarget, userAge);
        //    создание карточки терапевта
        let Card = document.createElement("div");
        Card.className = "cardProperties";
        desk.appendChild(Card);
        formModal.style.display = "none";
        let paragraphOption = document.createElement("p");
        let paragraphName = document.createElement("p");
        let target = document.createElement("p");
        let age = document.createElement("p");
        let buttonDetails = document.createElement("span");
        let buttonDelete = document.createElement("span");
        paragraphName.innerText = itemDoctor.fullName;
        paragraphOption.innerText = itemDoctor.title;
        target.innerText = itemDoctor.visitTarget;
        age.innerText = itemDoctor.age;
        desk.appendChild(Card);
        Card.appendChild(paragraphOption);
        Card.appendChild(paragraphName);
        buttonDelete.innerText = "Delete";
        buttonDelete.className = "delete";
        buttonDetails.className = "details";
        buttonDetails.innerText = "See details";
        Card.appendChild(buttonDetails);
        Card.appendChild(buttonDelete);
        itemDoctor.recepton();

        buttonDelete.onclick = function deleteCard() {
            Card.remove();
        }
        buttonDetails.onclick = function moreInfo() {
            Card.insertBefore(target, buttonDetails);
            Card.insertBefore(age, buttonDetails);
        }
        therapistForm.reset();
        makeDragonDrop(Card);
    }
    
}

//перемещение карточек

function makeDragonDrop(cardTarget) {
    let card = cardTarget;
    function move(e) {
        let cord = card.getBoundingClientRect();
        let dek = desk.getBoundingClientRect();
        if ((cord.x - 20 - dek.x) < 0) {
            card.mousePositionX = e.clientX + card.offsetLeft - 20;
        }
        if ((cord.y - 20 - dek.y) < 0) {
            card.mousePositionY = e.clientY + card.offsetTop - 20;
        }
        if (((dek.x + dek.width) - (cord.x + cord.width + 20)) < 0) {
            card.mousePositionX = (card.offsetLeft + cord.width - dek.width) + e.clientX + 30;
        }
        if (((dek.y + dek.height) - (cord.y + cord.height + 20)) < 0) {
            card.mousePositionY = (card.offsetTop + cord.height - dek.height) + e.clientY + 30;
        }
        card.style.transform = `translate(${e.clientX - card.mousePositionX}px,${e.clientY - card.mousePositionY}px)`;
    }

    card.addEventListener('mousedown',(e)=>{
        if (card.style.transform) {
            const transforms = card.style.transform;
            const transformX = parseFloat(transforms.split('(')[1].split(',')[0]);
            const transformY = parseFloat(transforms.split('(')[1].split(',')[1]);
            card.mousePositionX = e.clientX - transformX;
            card.mousePositionY = e.clientY - transformY;
        } else {
            card.mousePositionX = e.clientX;
            card.mousePositionY = e.clientY;
        }
        document.addEventListener('mousemove',move);
    });

    document.addEventListener('mouseup', e => {

        document.removeEventListener('mousemove',move);
    });
}




