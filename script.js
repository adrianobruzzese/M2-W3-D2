let input = document.querySelector(`#input`);
let saveButton = document.querySelector(`#save`);
let deleteButton = document.querySelector(`#delete`);
let inputName = document.querySelector(`#input-name`);

let i =
  localStorage.getItem(`index`) != null ? localStorage.getItem(`index`) - 1 : 1;

input.innerText = localStorage.getItem(`nome${i}`);

class Utente {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.saveThisName();
  }

  saveThisName() {
    localStorage.setItem(`nome${this.id}`, this.name);
  }
}

saveButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (inputName.value == ``) {
    alert(`Inserire un campo`);
    return;
  }

  new Utente(inputName.value, i);
  previousInput.innerText = localStorage.getItem(`nome${i}`);
  i++;
  inputName.value = ``;
  localStorage.setItem(`index`, i);
  console.log(`nome${i}`);
});

deleteButton.addEventListener(`click`, (e) => {
  e.preventDefault();
  i = i > 1 ? i - 1 : (i = 1);
  localStorage.removeItem(`nome${i}`);
  previousInput.innerText = localStorage.getItem(`nome${i - 1}`);
  localStorage.setItem(`index`, i);
});

// COUNTER

let counter = setInterval(() => {
  counter++;
  sessionStorage.setItem(`timer`, counter);
  document.querySelector(`#timer`).innerText = counter;
}, 1000);
