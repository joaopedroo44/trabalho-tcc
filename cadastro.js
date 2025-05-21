document.addEventListener('DOMContentLoaded', function () {
  const senhaInput = document.getElementById('senha');
  const toggleBtn = document.getElementById('toggleSenha' );

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      toggleBtn.textContent = 'Ocultar Senha';
    } else {
      senhaInput.type = 'password';
      toggleBtn.textContent = 'Mostrar Senha';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const senhaInput = document.getElementById('senha2');
  const toggleBtn = document.getElementById('toggleSenha2' );

  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      toggleBtn.textContent = 'Ocultar Senha';
    } else {
      senhaInput.type = 'password';
      toggleBtn.textContent = 'Mostrar Senha';
    }
  });
});

document.getElementById('registrarBtn').addEventListener('click', function () {
  // Aqui você pode validar o formulário primeiro, se quiser

  // Redireciona para a página de login
  window.location.href = 'index.html';
});

document.getElementById('registrarBtn').addEventListener('click', function () {
  const senha1 = document.getElementById('senha1').value;
  const senha2 = document.getElementById('senha2').value;

  if (senha1 !== senha2) {
    alert('As senhas não coincidem!');
    return;
  }

  // Redireciona se estiver tudo certo
  window.location.href = 'index.html';
});
