//  Constants
const form = document.getElementById('users-form');
const list = document.getElementById('users-list').getElementsByTagName('tbody')[0];
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');

//  Specifies working on a user or creating a new
let selectedRow = null;
form.onsubmit = (e) => {
    e.preventDefault();

    let formData = readFormData();
    if (selectedRow == null) {
        addNewUser(formData);
    } else {
        updateUser(formData);
    }
};

/*****************************************  CRUD Functions  */
//  Create
function addNewUser(data) {
    let newRow = list.insertRow(list.length);

    newRow.insertCell(0).innerHTML = data.name;
    newRow.insertCell(1).innerHTML = data.lastName;
    newRow.insertCell(2).innerHTML = data.mobile;
    newRow.insertCell(3).innerHTML = data.email;

    newRow.insertCell(4).innerHTML = '<a onclick="editUser(this)" class="editLink">Edit</a>';
    newRow.insertCell(5).innerHTML = '<a onclick="deleteUser(this)" class="deleteLink">Delete</a>';

    form.reset();
}

//  Edit
function editUser(editLink) {
    selectedRow = editLink.parentElement.parentElement;
    nameInput.value = selectedRow.cells[0].innerHTML;
    lastNameInput.value = selectedRow.cells[1].innerHTML;
    mobileInput.value = selectedRow.cells[2].innerHTML;
    emailInput.value = selectedRow.cells[3].innerHTML;
}

//  Update
function updateUser(data) {
    selectedRow.cells[0].innerHTML = data.name;
    selectedRow.cells[1].innerHTML = data.lastName;
    selectedRow.cells[2].innerHTML = data.mobile;
    selectedRow.cells[3].innerHTML = data.email;

    selectedRow = null;
    form.reset();
}

//  Destroy
function deleteUser(deleteLink) {
    selectedRow = deleteLink.parentElement.parentElement;
    if (confirm('are you sure to delete this user?'))
        selectedRow.remove();
    selectedRow = null;
}

/*****************************************  Other Functions  */
//  read inputs values and return them
function readFormData() {
    let formData = {};
    formData.name = nameInput.value;
    formData.lastName = lastNameInput.value;
    formData.mobile = mobileInput.value;
    formData.email = emailInput.value;
    return formData;
}
