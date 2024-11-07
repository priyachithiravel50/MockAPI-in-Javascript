// let entries = [];

function Click(event) {
    event.preventDefault();

    let userName = document.getElementById('Username').value;
    let password = document.getElementById('Password').value;

    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');

   
    let valid = true;

    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } else {
        passwordError.textContent = '';
    }


//     if (valid) {
//         entries.push({ userName, password });
//         renderTable();
//         document.getElementById('form').reset();
//     }
// }

// function renderTable() {
//     const tableBody = document.getElementById("table-body");

//     let rowsHTML = '';
//     for (let i = 0; i < entries.length; i++) {
//         rowsHTML += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${entries[i].userName}</td>
//                 <td>${entries[i].password}</td>
//                 <td>
//                     <button style="background-color: Green;font-size:18px; padding:5px 5px; border-radius:5px;"  onclick="editRow(${i}) ">Edit</button>
//                     <button style="background-color:red;font-size:18px; padding:5px 5px; border-radius:8px;"   onclick="deleteRow(${i})">Delete</button>
//                 </td>
//             </tr>
//         `;
//     }

//     tableBody.innerHTML = rowsHTML;
// }

// function editRow(index) {
//     document.getElementById("Username").value = entries[index].userName;
//     document.getElementById("Password").value = entries[index].password;

//     deleteRow(index); 
// }

// function deleteRow(index) {
//     entries.splice(index, 1); 
//     renderTable(); 
// }
}
