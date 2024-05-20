var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

if (!firstName.match(/^[a-zA-Z]+$/) || !lastName.match(/^[a-zA-Z]+$/))  {
    console.log("Wrong input!");
    alert("Wrong input!");
} else {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "!");
    alert("Hello, " + fullName + "!");
}

