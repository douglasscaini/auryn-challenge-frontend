<template>
  <div id="app">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />

    <title>Crie sua conta na Memorar</title>
  </div>

  <div class="container my-4 col-lg-6 col-xl-4">
    <div class="d-flex justify-content-center">
      <img
        src="https://memorar.fot.br/images/company/memorar.fot.br.png"
        alt="Logo Loja Memorar"
        width="200px"
      />
    </div>
    <h1 class="text-center h5 fw-bold mt-1 mb-3">Crie sua conta na Memorar</h1>

    <form action="" id="createAccount" class="row gx-3" v-on:submit.prevent="onSubmitFunction">
      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="name"
          type="text"
          placeholder="Nome completo"
          required
          v-model="userForm.name"
        />

        <label for="name">Nome completo</label>
      </div>

      <div class="col-sm-6 form-floating mb-3">
        <input
          class="form-control"
          id="phoneNumber"
          type="tel"
          pattern="^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$"
          placeholder="Telefone"
          required
          v-model="userForm.phoneNumber"
        />

        <label for="phoneNumber">Telefone</label>
      </div>

      <div class="col-sm-6 form-floating mb-3">
        <input
          class="form-control"
          id="birthday"
          type="date"
          placeholder="Data de nascimento"
          required
          v-model="userForm.birthday"
        />

        <label for="birthday">Data de nascimento</label>
      </div>

      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="email"
          type="email"
          pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"
          placeholder="E-mail"
          required
          v-model="userForm.email"
        />

        <label for="email">E-mail</label>
      </div>

      <div class="col-sm-6 form-floating">
        <input
          class="form-control"
          id="password"
          type="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          placeholder="Crie uma senha"
          required
          v-model="userForm.password"
        />

        <label for="password">Crie uma senha</label>
      </div>

      <small class="ps-4 mb-3 text-muted d-sm-none"
        >Sua senha deverá ter ao menos 8 caracteres, 1 número e 1 letra.</small
      >

      <div class="col-sm-6 form-floating">
        <input
          class="form-control"
          id="passwordRepeated"
          type="password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          placeholder="Repita sua senha"
          required
          v-model="userForm.passwordRepeated"
        />

        <label for="passwordRepeated">Repita sua senha</label>
      </div>

      <small class="ps-4 text-muted d-none d-sm-block"
        >Sua senha deverá ter ao menos 8 caracteres, 1 número e 1 letra.</small
      >

      <div class="alert alert-danger" v-if="showErrorMessage">{{ errorMessage }}</div>

      <div class="form-floating mb-3 mt-3">
        <input
          class="form-control"
          id="cpf"
          type="text"
          pattern="^([-\.\s]?(\d{3})){3}[-\.\s]?(\d{2})$"
          placeholder="CPF"
          required
          v-model="userForm.cpf"
        />

        <label for="cpf">CPF</label>
      </div>

      <button type="submit" class="p-3 px-5 w-auto btn btn-primary m-auto">Criar conta</button>
    </form>

    <table id="tableUsers" class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Nascimento</th>
          <th scope="col">Email</th>
          <th scope="col">CPF</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.phoneNumber }}</td>
          <td>{{ user.birthday }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.cpf }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      showErrorMessage: false,
      errorMessage: "Aconteceu algo de errado!",
      userForm: {},
      users: [],
    };
  },
  methods: {
    onSubmitFunction: function () {
      if (this.userForm.password != this.userForm.passwordRepeated) {
        this.showErrorMessage = true;
        this.errorMessage = "As senhas não são iguais, por favor verifique!";
      } else {
        this.showErrorMessage = false;
        this.users.push({
          id: this.users.length + 1,
          ...this.userForm,
        });
      }
    },
  },
};
</script>

<style>
body {
  font-family: "Work Sans", sans-serif;
}

#createAccount label {
  left: auto !important;
}
</style>
