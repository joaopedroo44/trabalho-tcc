<?php
session_start();

$conn = new mysqli("localhost", "root", "root", "sound_player_db");
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Método inválido.");
}

$email = trim($_POST['email']);
$senha = $_POST['senha'];

if (empty($email) || empty($senha)) {
    die("Preencha todos os campos.");
}

// Busca usuário pelo email
$sql = "SELECT id, nome_usuario, email, senha FROM usuarios WHERE email = ? LIMIT 1";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Erro na preparação da query: " . $conn->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("Email não cadastrado.");
}

$user = $result->fetch_assoc();

if (password_verify($senha, $user['senha'])) {
    // Login válido
    $_SESSION['usuario_id'] = $user['id'];
    $_SESSION['usuario_nome'] = $user['nome_usuario'];

    // Redireciona para página protegida
    header("Location: dashboard.php");
    exit;
} else {
    die("Senha incorreta.");
}

$stmt->close();
$conn->close();
?>
