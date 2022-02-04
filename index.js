const users = [
  {
    id: 1,
    name: "Douglas Scaini",
    phoneNumber: "(49) 99114-7537",
    birthday: "20/03/1997",
    email: "douglasscaini.dev@gmail.com",
    cpf: "222.222.222-22",
  },
  {
    id: 2,
    name: "Beltrano Silva",
    phoneNumber: "(49) 99425-2565",
    birthday: "15/08/1999",
    email: "beltranosilva@gmail.com",
    cpf: "333.333.333-33",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  renderUsers(users);

  document.getElementById("createAccount").addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors();

    registerUser();
  });
});

function clearFormErrors() {
  const error = document.getElementById("errorMessage");
  error.setAttribute("hidden", true);
}

function registerUser() {
  const name = document.getElementById("name");
  const phoneNumber = document.getElementById("phoneNumber");
  const birthday = document.getElementById("birthday");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordRepeated = document.getElementById("passwordRepeated");
  const cpf = document.getElementById("cpf");

  if (password.value != passwordRepeated.value) {
    const error = document.getElementById("errorMessage");

    error.removeAttribute("hidden");

    error.innerHTML = "As senhas não coincidem, por favor verifique!";
  }

  const params = {
    id: users.length + 1,
    name: name.value,
    phoneNumber: phoneNumber.value,
    birthday: birthday.value,
    email: email.value,
    cpf: cpf.value,
  };

  users.push(params);

  renderUsers(users);
}

function clearTableRows() {
  const myTable = document.getElementById("tableUsers");
  const rowCount = myTable.rows.length;

  for (var x = rowCount - 1; x > 0; x--) {
    myTable.deleteRow(x);
  }
}

function renderUsers(users) {
  clearTableRows();

  users.map((user) => {
    renderNewRow(user);
  });
}

function renderNewRow(params) {
  const formRow = `
                    <tr>
                      <th scope="row">${params.id}</th>
                      <td>${params.name}</td>
                      <td>${params.phoneNumber}</td>
                      <td>${params.birthday}</td>
                      <td>${params.email}</td>
                      <td>${params.cpf}</td>
                    </tr>
                  `;

  const table = document.getElementById("tableUsers");
  const newRow = table.insertRow(table.rows.length);
  newRow.innerHTML = formRow;
}
