let selectedRow = null;

$("#users-form").submit(function (e) {
	e.preventDefault();
	let formData = readFormData();
	if (selectedRow == null) {
		addUser(formData);
	} else {
		updateUser(formData);
	}
});

function readFormData() {
	let formData = {};
	formData.fullName = $("#fullName").val();
	formData.email = $("#email").val();
	formData.password = $("#password").val();
	return formData;
}

function addUser(user) {
	let newRow = `
      <tr>
        <td>${user.fullName}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>
					<a class="editLink me-2" title="edit" onclick="editUser(this)"></a>
					<a class="deleteLink" title="delete" onclick="removeUser(this)"></a>
				</td>
      </tr>
      `;

	$("#users-list tbody").append(newRow);

	$("#users-form")[0].reset();
}

function editUser(editLink) {
	selectedRow = editLink.parentElement.parentElement;

	$("#users-form")[0].fullName.value = selectedRow.cells[0].innerHTML;
	$("#users-form")[0].email.value = selectedRow.cells[1].innerHTML;
	$("#users-form")[0].password.value = selectedRow.cells[2].innerHTML;
}

function updateUser(user) {
	selectedRow.cells[0].innerHTML = user.fullName;
	selectedRow.cells[1].innerHTML = user.email;
	selectedRow.cells[2].innerHTML = user.password;

	selectedRow = null;

	$("#users-form")[0].reset();
}

function removeUser(deleteLink) {
	selectedRow = deleteLink.parentElement.parentElement;
	selectedRow.remove();
	selectedRow = null;
}
