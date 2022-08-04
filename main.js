document.getElementById("register").addEventListener("click", registruj);

function registruj() {
    let nizPodaci = [];

    let checkEmpty = new RegExp(/^$/);

    let firstName = document.getElementById("first-name").value;
    let checkFirstName = new RegExp(/^[A-ZŽČĆŠĐ][a-zžčćšđ]{1,20}$/);

    if (checkEmpty.test(firstName)) {
        let text = "Polje ime je prazno.";
        document.getElementById("first-name-error").innerHTML = text;
    }
    else if (!checkFirstName.test(firstName)) {
        let text = "Polje ime nije pravilno popunjeno.";
        document.getElementById("first-name-error").innerHTML = text;
    }
    else {
        document.getElementById("first-name-error").innerHTML = "";
        nizPodaci.push(firstName);
    }

    let lastName = document.getElementById("last-name").value;
    let checkLastName = new RegExp(/([A-ZŽČĆŠĐ][a-zžčćšđ]{1,20}\s{0,1}$)+/);

    if (checkEmpty.test(lastName)) {
        let text = "Polje prezime je prazno.";
        document.getElementById("last-name-error").innerHTML = text;
    }
    else if (!checkLastName.test(lastName)) {
        let text = "Polje prezime nije pravilno popunjeno.";
        document.getElementById("last-name-error").innerHTML = text;
    }
    else {
        document.getElementById("last-name-error").innerHTML = "";
        nizPodaci.push(lastName);
    }

    let birthDate = document.getElementById("birth-date").value;
    let checkBirthDate = new RegExp(/^[12][9012][\d]{2}\-[01][\d]{1}\-[0123][\d]{1}$/);

    if (checkEmpty.test(birthDate)) {
        let text = "Polje datum rođenja je prazno.";
        document.getElementById("birth-date-error").innerHTML = text;
    }
    else if (!checkBirthDate.test(birthDate)) {
        let text = "Polje datum rođenja nije pravilno popunjeno.";
        document.getElementById("birth-date-error").innerHTML = text;
    }
    else {
        document.getElementById("birth-date-error").innerHTML = "";
        nizPodaci.push(birthDate);
    }

    let jmbg = document.getElementById("jmbg").value;
    let checkJmbg = new RegExp(/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[012])\d{9}$/);

    if (checkEmpty.test(jmbg)) {
        let text = "Polje JMBG je prazno.";
        document.getElementById("jmbg-error").innerHTML = text;
    }
    else if (!checkJmbg.test(jmbg)) {
        let text = "Polje JMBG nije pravilno popunjeno.";
        document.getElementById("jmbg-error").innerHTML = text;
    }
    else {
        document.getElementById("jmbg-error").innerHTML = "";
        nizPodaci.push(jmbg);
    }

    let gender = document.querySelector("input[name='gender']:checked");

    console.log(gender);

    if (gender == null) {
        let text = "Niste izabrali pol.";
        document.getElementById("gender-error").innerHTML = text;
    }
    else {
        document.getElementById("gender-error").innerHTML = "";
        nizPodaci.push(gender.value);
    }

    let creditCard = document.getElementById("credit-card").value;
    let checkCreditCard = new RegExp(/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/);

    if (checkEmpty.test(creditCard)) {
        let text = "Polje broj kreditne kartice je prazno.";
        document.getElementById("credit-card-error").innerHTML = text;
    }
    else if (!checkCreditCard.test(creditCard)) {
        let text = "Polje kreditna kartica nije pravilno popunjeno.";
        document.getElementById("credit-card-error").innerHTML = text;
    }
    else {
        document.getElementById("credit-card-error").innerHTML = "";
        nizPodaci.push(creditCard);
    }

    let phoneNumber = document.getElementById("phone-number").value;
    let checkPhoneNumber = new RegExp(/^06\d\/\d{3}\-\d{3,4}$/);

    if (checkEmpty.test(phoneNumber)) {
        let text = "Polje broj telefona je prazno.";
        document.getElementById("phone-number-error").innerHTML = text;
    }
    else if (!checkPhoneNumber.test(phoneNumber)) {
        let text = "Polje broj telefona nije pravilno popunjeno.";
        document.getElementById("phone-number-error").innerHTML = text;
    }
    else {
        document.getElementById("phone-number-error").innerHTML = "";
        nizPodaci.push(phoneNumber);
    }

    let accountType = document.getElementById("account-type").querySelector("option:checked").value;

    if (accountType == 0) {
        let text = "Niste izabrali tip naloga.";
        document.getElementById("account-type-error").innerHTML = text;
    }
    else {
        document.getElementById("account-type-error").innerHTML = "";
        nizPodaci.push(accountType);
    }

    let agreement = document.querySelector("input[name='agreement']:checked");

    if (agreement == null) {
        let text = "Morate čekirati uslove korišćenja.....";
        document.getElementById("agreement-error").innerHTML = text;
    }
    else {
        document.getElementById("agreement-error").innerHTML = "";
    }

    let ispis = "<ul>"
    for (let i = 0; i < nizPodaci.length; i++) {
        ispis += `<li>${nizPodaci[i]}</li>`
    }
    ispis += "</ul>"
    document.getElementById("feedback").innerHTML = ispis;
}

document.getElementById("birth-date").addEventListener("blur", popuniJMBG);

function popuniJMBG() {
    let birthDate = document.getElementById("birth-date").value;
    let checkBirthDate = new RegExp(/^[12][9012][\d]{2}\-[01][\d]{1}\-[0123][\d]{1}$/);

    if (checkBirthDate.test(birthDate)) {
        let jmbgNiz = birthDate.split('-');
        jmbgNiz[0] = jmbgNiz[0].substring(1,);
        let jmbg = jmbgNiz.reverse().toString().replaceAll(',', '');
        document.getElementById("jmbg").value = jmbg;
    }
}