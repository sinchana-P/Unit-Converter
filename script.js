let number = document.getElementById("number")
let feet = document.getElementById("feet");
let meters = document.getElementById("meters");
let gallons = document.getElementById("gallons");
let liters = document.getElementById("liters");
let pounds = document.getElementById("pounds");
let kilos = document.getElementById("kilos");

function convert(value){
    let feetAns = value * 3.280 ;
    let feetFinalAns = feetAns.toFixed(3);
    feet.textContent = `${value} meters = ${feetFinalAns} feet` ;
    console.log(feetFinalAns) ;

    let metersAns = value * 0.305 ;
    let metersFinalAns = metersAns.toFixed(3);
    meters.textContent = `${value} feet = ${metersFinalAns} meters` ;
    console.log(metersFinalAns) ;

    let gallonsAns = value * 0.264 ;
    let gallonsFinalAns = gallonsAns.toFixed(3);
    gallons.textContent = `${value} liters = ${gallonsFinalAns} gallons` ;
    console.log(gallonsFinalAns) ;

    let litersAns = value * 4.546 ;
    let litersFinalAns = litersAns.toFixed(3);
    liters.textContent = `${value} gallons = ${litersFinalAns} liters` ;
    console.log(litersFinalAns) ;

    let poundsAns = value * 2.205 ;
    let poundsFinalAns = poundsAns.toFixed(3);
    pounds.textContent = `${value} kilos = ${poundsFinalAns} pounds` ;
    console.log(poundsFinalAns) ;

    let kilosAns = value * 0.454 ;
    let kilosFinalAns = kilosAns.toFixed(3);
    kilos.textContent = `${value} pounds = ${kilosFinalAns} kilos` ;
    console.log(kilosFinalAns) ;


}

