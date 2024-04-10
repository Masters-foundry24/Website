<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "site";

$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
   die("Falha na conexão com o banco de dados ". $conn->connect_error);
}

$descricao = $_POST['descricao'];
$email = $_POST['email'];

// Lidando com o upload da imagem
if(isset($_FILES['imagem'])){
    $imagem = $_FILES['imagem']['name'];
    $target_dir = "upload/arquivos"; // Especifique o diretório onde você deseja salvar a imagem
    $target_file = $target_dir . basename($imagem);

    // Tente mover o arquivo enviado para o diretório de destino
    if (move_uploaded_file($_FILES['imagem']['tmp_name'], $target_file)) {
        echo "A imagem ". basename($imagem). " foi enviada.";
    } else {
        echo "Desculpe, houve um erro ao enviar sua imagem.". basename($imagem);
    }
} else {
    echo "Nenhum arquivo foi enviado.";
    $target_file = null;
}

$sql = "INSERT INTO descricao_mini (descricao, email, imagem) VALUES ('".$descricao."', '".$email."', '".$target_file."')";

if ($conn->query($sql) === TRUE) {
   echo "Descrição Enviada com Sucesso!";
} else {
    echo "Erro ao Enviar a Descrição! " . $conn->error;
}

$conn->close();
?>
