<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: index.html"); // volta para login se não estiver logado
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Dashboard</title>
</head>
<body>
  <h1>Bem-vindo, <?php echo htmlspecialchars($_SESSION['usuario_nome']); ?>!</h1>
  <p>Você está logado no Sound Player.</p>
  <a href="logout.php">Sair</a>
</body>
</html>
