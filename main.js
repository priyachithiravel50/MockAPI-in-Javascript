// Array to store people data
let peopleList = [];

// Function to validate form fields
function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("Age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.querySelector(".emailError").innerText = "";
    document.querySelector(".passwordError").innerText = "";

    // Validation logic
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required!";
        isValid = false;
    }

    if (age === "") {
        document.getElementById("ageError").innerText = "Age is required!";
        isValid = false;
    } else if (age < 1) {
        document.getElementById("ageError").innerText = "Age must be greater than zero";
        isValid = false;
    }

    if (email === "") {
        document.querySelector(".emailError").innerText = "Email is required!";
        isValid = false;
    } else if (!email.includes("@")) {
        document.querySelector(".emailError").innerText = "Invalid email address";
        isValid = false;
    }

    if (password === "") {
        document.querySelector(".passwordError").innerText = "Password is required!";
        isValid = false;
    }

    return isValid;
}

// Function to display data in the table
function showData() {
    let html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.password + "</td>";
        html += `<td>
                    <button onclick="editData(${index})" class="btn btn-success m-2">Edit</button>
                    <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                 </td>`;
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Function to add or update data
function AddData() {
    if (validateForm()) {
        let name = document.getElementById("name").value.trim();
        let age = document.getElementById("Age").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // // Check if we are editing an existing record
        // if (document.getElementById("Submit").dataset.index === undefined) {
            // Add new record
            peopleList.push({
                name: name,
                age: age,
                email: email,
                password: password,
            });
        }
        // } else {
        //     // Update existing record
        //     let index = document.getElementById("Submit").dataset.index;
        //     peopleList[index] = { name, age, email, password };
        //     delete document.getElementById("Submit").dataset.index; // Clear editing state
        // }

        // Update table display
        showData();

        // Clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("Age").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
// }

// Function to edit data
function editData(index) {
    let person = peopleList[index];
    document.getElementById("name").value = person.name;
    document.getElementById("Age").value = person.age;
    document.getElementById("email").value = person.email;
    document.getElementById("password").value = person.password;
    document.getElementById("Submit").dataset.index = index; // Set index for editing
}

// Function to delete data
function deleteData(index) {
    peopleList.splice(index, 1); // Remove the item at the specified index
    showData(); // Refresh the table display
}

// Load data when the page loads
window.onload = showData;

// console.log(fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm'));