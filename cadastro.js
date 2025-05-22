document.addEventListener('DOMContentLoaded', function () {
  const senha = document.getElementById('senha');
  const senha2 = document.getElementById('senha2');
  const toggleSenha = document.getElementById('toggleSenha');
  const toggleSenha2 = document.getElementById('toggleSenha2');
  const form = document.getElementById('formCadastro');

  toggleSenha.addEventListener('click', function () {
    senha.type = senha.type === 'password' ? 'text' : 'password';
    toggleSenha.textContent = senha.type === 'password' ? 'Mostrar' : 'Ocultar';
  });

  toggleSenha2.addEventListener('click', function () {
    senha2.type = senha2.type === 'password' ? 'text' : 'password';
    toggleSenha2.textContent = senha2.type === 'password' ? 'Mostrar' : 'Ocultar';
  });

  form.addEventListener('submit', function (e) {
    if (senha.value !== senha2.value) {
      e.preventDefault();
      alert('As senhas não coincidem!');
    }
  });
});
