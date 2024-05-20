class Human {
  constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.hungry = true;
    this.calorieInterval = setInterval(() => {
      this.calories -= 200;
      if (this.calories < 500) {
        this.hungry = true;
      }
    }, 60000);
  }

  sleepFor(seconds) {
    console.log(`I'm sleeping for ${seconds} seconds...`);
    setTimeout(() => {
      console.log("I'm awake now!");
    }, seconds * 1000);
  }

  feed() {
    console.log("Nom nom nom...");
    setTimeout(() => {
      this.calories += 200;
      if (this.calories > 500) {
        console.log("I'm not hungry.");
      } else {
        console.log("I'm still hungry.");
      }
    }, 10000);
  }
}

class Superhero extends Human {
  constructor(firstName, lastName, gender, age, calories, superheroName) {
    super(firstName, lastName, gender, age, calories);
    this.superheroName = superheroName;
  }

  fly() {
    console.log("I'm flying!");
    setTimeout(() => {
      console.log("I'm done flying.");
    }, 10000);
  }

  fightWithEvil() {
    console.log("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
    setTimeout(() => {
      console.log("I've saved the day!");
    }, 10000);
  }
}

function createHuman() {
  const firstName = prompt("Enter first name:");
  const lastName = prompt("Enter last name:");
  const gender = prompt("Enter gender:");
  const age = parseInt(prompt("Enter age:"));
  const calories = 500;
  return new Human(firstName, lastName, gender, age, calories);
}

function visualizeHuman(human) {
  const humanPropertiesList = document.getElementById("humanProperties");
  humanPropertiesList.innerHTML = `
      <li>First Name: ${human.firstName}</li>
      <li>Last Name: ${human.lastName}</li>
      <li>Gender: ${human.gender}</li>
      <li>Age: ${human.age}</li>
      <li>Calories: ${human.calories}</li>
      <li>Hungry: ${human.hungry ? "Yes" : "No"}</li>
    `;
}

function visualizeSuperhero(superhero) {
  const superheroPropertiesList = document.getElementById(
    "superheroProperties"
  );
  superheroPropertiesList.innerHTML = `
      <li>First Name: ${superhero.firstName}</li>
      <li>Last Name: ${superhero.lastName}</li>
      <li>Gender: ${superhero.gender}</li>
      <li>Age: ${superhero.age}</li>
      <li>Calories: ${superhero.calories}</li>
      <li>Hungry: ${superhero.hungry ? "Yes" : "No"}</li>
      <li>Superhero Name: ${superhero.superheroName}</li>
    `;
}

let human = createHuman();
visualizeHuman(human);
let superhero;

document
  .getElementById("turnIntoSuperheroBtn")
  .addEventListener("click", () => {
    if (human.calories > 500) {
      const superheroName = prompt("Enter superhero name:");
      superhero = new Superhero(
        human.firstName,
        human.lastName,
        human.gender,
        human.age,
        human.calories,
        superheroName
      );
      visualizeSuperhero(superhero);
      document.getElementById("humanContainer").style.display = "none";
      document.getElementById("superheroContainer").style.display = "block";
    } else {
      alert("You need at least 500 calories to become a superhero!");
    }
  });

document.getElementById("sleepForBtn").addEventListener("click", () => {
  const seconds = parseInt(prompt("Enter number of seconds to sleep:"));
  human.sleepFor(seconds);
});

document.getElementById("feedBtn").addEventListener("click", () => {
  human.feed();
});

document.getElementById("flyBtn").addEventListener("click", () => {
  if (superhero) {
    superhero.fly();
  }
});

document.getElementById("fightWithEvilBtn").addEventListener("click", () => {
  if (superhero) {
    superhero.fightWithEvil();
  }
});


