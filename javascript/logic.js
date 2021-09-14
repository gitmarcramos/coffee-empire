//company name
const companyName = document.querySelector("#company-name");
const editCompanyName = document.querySelector("#edit-company-name");
const companyForm = document.querySelector(".form");
const inputValue = document.querySelector("input");

const bonusModalBtn = document.querySelectorAll(".bonus-Btn");

// FUNCTION toggle edit name
function toggleEditName() {
  companyForm.classList.toggle("hidden");
}

editCompanyName.addEventListener("click", () => {
  toggleEditName();
});

//FUNCTION updaten name
function updateName(name) {
  companyName.innerText = inputValue.value;
}

//FUNCTION create bonus bonus
function createBonusModal() {
  let bonusModal = document.createElement("div");
  bonusModal.className = "bonus-modal";
  document.body.appendChild(bonusModal);
  bonusModal.style.position = "fixed";
  bonusModal.style.top = "50%";
  bonusModal.style.left = "50%";
  bonusModal.style.transform = "translate(-50%, -50%)";
  bonusModal.style.width = "90%";
  bonusModal.style.height = "80vh";
  bonusModal.style.backgroundColor = "#FAA14D";
  bonusModal.style.borderRadius = "1.6rem";
  bonusModal.style.padding = "2.4rem";
  bonusModal.style.display = "flex";
  bonusModal.style.flexDirection = "column";
  bonusModal.style.justifyContent = "center";
  bonusModal.style.alignItems = "center";

  let bonusP = document.createElement("p");
  bonusModal.appendChild(bonusP);
  bonusP.className = "sub";
  bonusP.innerText = "Congrats! This name give you a bonus of 💰 $1.000.000 💰";
  bonusP.style.color = "white";
  bonusP.style.textAlign = "center";

  let btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";
  bonusModal.appendChild(btnContainer);
  btnContainer.style.display = "flex";
  btnContainer.style.flexDirection = "column";
  btnContainer.style.marginTop = "2.4rem";

  let bonusWowBtn = document.createElement("div");
  bonusWowBtn.className = "btn bonus-btn";
  bonusWowBtn.setAttribute("id", "accept-bonus");
  btnContainer.appendChild(bonusWowBtn);
  bonusWowBtn.innerText = "Wow, thanks!";

  let bonusNoBtn = document.createElement("div");
  btnContainer.appendChild(bonusNoBtn);
  bonusNoBtn.innerText = "I prefer to pass...";
  bonusNoBtn.className = "btn btn__raise bonus-btn";

  //CLOSE BONUS MODAL
  let bonusBtns = document.querySelectorAll(".bonus-btn");

  bonusBtns.forEach((button) => {
    button.addEventListener("click", () => {
      let toRemove = document.querySelector(".bonus-modal");
      toRemove.remove();
    });
  });
}

//FUNCTION create error bonus

function errorBonus() {
  let errorModal = document.createElement("div");
  errorModal.className = "error-modal";

  let errorMessage = document.createElement("span");
  errorMessage.className = 'sub';
  errorModal.appendChild(errorMessage);
  errorMessage.innerHTML = ' 😏 <br> Well played! But the naming bonus is only available once!'

  document.body.appendChild(errorModal);
  errorModal.style.textAlign = "center";
  errorModal.style. padding = "2.4rem";
  errorModal.style.backgroundColor = "#D40000";
  errorModal.style.position = "fixed";
  errorModal.style.left= "50%";
  errorModal.style.top = "50%";
  errorModal.style.transform = "translate(-50%, -50%)";
  errorModal.style.borderRadius = "1.6rem";
  errorModal.style.width = "80%";
  errorModal.style.boxShadow = "10px 10px 25px rgba(0, 0, 0, 0.2)"
  errorMessage.style.color = "white"

  let errorBtn = document.createElement('div');
  errorBtn.className = "btn"
  errorModal.appendChild(errorBtn);
  errorBtn.innerText = "Alright..."
  errorBtn.style.marginTop = "2.4rem"

  //CLOSE error modal 
  errorBtn.addEventListener('click', () => {
    document.querySelector('.error-modal').remove()
  })
}

// Check if the bonus has already been applied
let noCheat = 0;

//eventlistener click on btn
document.querySelector("button").addEventListener("click", () => {
  if (inputValue.value === "") {
    companyName.innerText = "";
  } else if (inputValue.value === "Jeanne" && noCheat < 1) {
    updateName("Jeanne");
    noCheat++;
    console.log(noCheat);
    createBonusModal();
    companyForm.classList.add("hidden");
  } else if (inputValue.value === "Jeanne" && noCheat >= 1) {
    noCheat++;
    errorBonus();
  } else {
    updateName();
    noCheat++;
    companyForm.classList.add("hidden");
  }

  inputValue.value = "";
});

//eventlistener enter key btn
document.querySelector("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (inputValue.value === "") {
      companyName.innerText = "";
    } else if (inputValue.value === "Jeanne" && noCheat < 1) {
      updateName("Jeanne");
      noCheat++;
      console.log(noCheat);
      createBonusModal();
      companyForm.classList.add("hidden");
    } else if (inputValue.value === "Jeanne" && noCheat >= 1) {
      noCheat++;
      errorBonus()
    } else {
      updateName();
      noCheat++;
      companyForm.classList.add("hidden");
    }

    inputValue.value = "";
  }
});
