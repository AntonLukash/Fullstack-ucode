var animal = prompt("What animal is the superhero most similar to?");
var gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
var age = prompt("How old is the superhero?");

var animalRegex = /^[a-zA-Z]{1,20}$/;
var genderRegex = /^(male|female|)$/i;
var ageRegex = /^[1-9]\d{0,4}$/;

if (!animalRegex.test(animal) || !genderRegex.test(gender) || !ageRegex.test(age)) {
    alert("Invalid input");
} else {
    var description;
    if (gender.toLowerCase() === "male" && parseInt(age) < 18) {
        description = "boy";
    } else if (gender.toLowerCase() === "male" && parseInt(age) >= 18) {
        description = "man";
    } else if (gender.toLowerCase() === "female" && parseInt(age) < 18) {
        description = "girl";
    } else if (gender.toLowerCase() === "female" && parseInt(age) >= 18) {
        description = "woman";
    } else if (parseInt(age) >= 18) {
        description = "hero";
    } else {
        description = "kid";
    }

    alert("The superhero name is: " + animal + "-" + description + "!");
}

