<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// Conexão com o banco de dados (ajuste usuário/senha conforme seu MAMP)
$conn = new mysqli("localhost", "root", "root", "sound_player_db");

// Verifica conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Pega dados do formulário
$user = $_POST['usuario'];  // seu campo se chama "usuario"
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // hash da senha

// Prepara o SQL usando os nomes corretos das colunas da tabela
$sql = "INSERT INTO usuarios (user, email, senha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Erro na preparação da query: " . $conn->error);
}

$stmt->bind_param("sss", $user, $email, $senha);

// Executa e trata resposta
if ($stmt->execute()) {
    echo "<script>alert('Cadastro realizado com sucesso!'); window.location.href = 'index.html';</script>";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

// Fecha a conexão
$stmt->close();
$conn->close();
?>
