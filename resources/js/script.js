
let boxNumber = 100
let boxWrapper = document.createElement("div")
boxWrapper.className = "d-flex justify-content-center align-content-center align-items-center flex-wrap mx-auto my-5"
boxWrapper.setAttribute("id", "wrapper");
let tmpHTML = "";
let typeOfBox = "";

for (let i = 1; i < 101; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) { //caso più stringente
        typeOfBox = "fizzbuzz";
    } else if (i % 3 === 0) {
        typeOfBox = "fizz";
    } else if (i % 5 === 0) {
        typeOfBox = "buzz";
    } else {
        typeOfBox = i;
    };
    tmpHTML += `<div class="box d-flex align-items-center justify-content-center rounded-1 ${isNaN(typeOfBox) ? typeOfBox : ""}">${typeOfBox}</div>`;
    // i % 3 === 0 && i % 5 === 0 ? console.log("fizzbuzz") : i % 3 === 0 ? console.log("fizz") : i % 5 === 0 ? console.log("buzz") : console.log(i);
}

boxWrapper.innerHTML = tmpHTML
document.getElementById("app").append(boxWrapper)


