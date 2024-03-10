
let boxNumber = 100
let boxWrapper = document.createElement("div")
boxWrapper.className = "d-flex justify-content-center align-content-center align-items-center flex-wrap mx-auto my-5"
boxWrapper.setAttribute("id", "wrapper");

let tmpHTML = "";
let typeOfBox = "";

for (let i = 1; i < 101; i++) {
    i % 3 === 0 && i % 5 === 0 ? typeOfBox = "fizzbuzz" : i % 3 === 0 ? typeOfBox = "fizz" : i % 5 === 0 ? typeOfBox = "buzz" : typeOfBox = i;
    tmpHTML +=
        `<div class="box card is-flipped text-white">
        <div class="box back text-center rounded-1 d-flex align-items-center justify-content-center">Click on me</div>
        <div class="box front d-flex align-items-center justify-content-center rounded-1 ${isNaN(typeOfBox) ? typeOfBox : ""}">${typeOfBox}</div>
    </div >`
}

boxWrapper.innerHTML = tmpHTML
document.getElementById("app").append(boxWrapper)


/* MY BONUS */
//effetto titolo

let title = "FizzBuzzDOM"
tmpHTML = "" //azzero
let titlePosition = document.querySelector("h1")

for (let i = 0; i < title.length; i++) {
    let letter = title[i]; //ottenggo la lettera in poszione i
    let rndAnimation = getRndInteger(1, 6);
    tmpHTML += `<span class="text-center fw-bold my-5 display-4 text-flicker-in-glow" style="animation-duration: ${rndAnimation}s;">${letter}</span>`;;
}
titlePosition.innerHTML = tmpHTML



//cliccable square
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        this.classList.toggle("is-flipped");
    });
});
// sto prendendo tutti glie lementi card e per oognuna di esse mi metto in ascolto dei click., se vendolo clokkati richiamo una funzione che non fa altro che rimuover o aggiungere la classe isflipperd