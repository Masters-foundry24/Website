<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "site";

$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
   die("Faha na concao com o banco d dados ". $conn->connect_error);
}
$descricao=$_POST['descricao'];

$sql= "INSERT INTO todadescricao (descricao) VALUES ('$descricao')";

if ($conn->query($sql) === TRUE) {
   echo "Descricao Enviada com Sucesso!";
}else{
    echo "Erro ao Enviar a Descricao! " . $conn->error;
}
$conn->close();
?>