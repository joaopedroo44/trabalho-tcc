document.addEventListener('DOMContentLoaded', function () {
    const senhaInput = document.getElementById('senha' 'Senha');
    const toggleBtn = document.getElementById('toggleSenha');
  
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
  
      if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleBtn.textContent = 'Ocultar';
      } else {
        senhaInput.type = 'password';
        toggleBtn.textContent = 'Mostrar';
      }
    });
  });
  
  
  // Substitua pelos seus dados
  const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
  const SUPABASE_ANON_KEY = 'SUA-CHAVE-ANON';
  
  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
  
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: { telefone }
      }
    });
  
    if (error) {
      alert('Erro: ' + error.message);
    } else {
      alert('Cadastro realizado com sucesso! Verifique seu e-mail.');
    }
  });
  