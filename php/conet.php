<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "site";

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}


// Recebendo a descrição do formulário
$descricao = $_POST['descricao'];
$email = $_POST['email'];

// Preparando a declaração SQL
$sql = "INSERT INTO descricao_mini (descricao, email) VALUES ('$descricao', '$email')";

// Executando a declaração SQL
if ($conn->query($sql) === TRUE) {
    
} else {
    echo "Erro ao enviar a descrição: " . $conn->error;
}

// Fechando a conexão com o banco de dados
$conn->close();
?>