function calculateTip()
{
    const amount = parseInt(document.getElementById("amount").value);
    const numOfPeople = document.getElementById("people").value;
    const servicetip = document.getElementById("service").value;

    const tip = amount* (servicetip / 100) ;
    const perPerson = tip / numOfPeople  ;
    document.getElementById('totaltip').innerHTML = tip;
    document.getElementById('perperson').innerHTML = perPerson;


}  