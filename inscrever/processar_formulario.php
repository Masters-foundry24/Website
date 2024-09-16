<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $barrio = htmlspecialchars($_POST['bairro']);
    $agencia = htmlspecialchars($_POST['agencia']);
    $dia_viagem = htmlspecialchars($_POST['dia_viagem']);
    $mala = htmlspecialchars($_POST['mala']);

    // Definir o destinatário
    $destinatario = "ceitajosenasio19@gmail.com";
    $assunto = "Formulário de Inscrição - Miniaturas";
    
    // Mensagem do email
    $mensagem = "
    <html>
    <head>
        <title>Formulário de Inscrição - Miniaturas</title>
    </head>
    <body>
        <h2>Informações do formulário</h2>
        <p><strong>Nome:</strong> $nome</p>
        <p><strong>Telefone:</strong> $telefone</p>
        <p><strong>Bairro:</strong> $barrio</p>
        <p><strong>Agência de aviões:</strong> $agencia</p>
        <p><strong>Dia de viagem:</strong> $dia_viagem</p>
        <p><strong>Espaço na mala:</strong> $mala</p>
    </body>
    </html>";

    // Cabeçalhos para enviar o email no formato HTML
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Cabeçalhos adicionais
    $headers .= 'From: <noreply@seusite.com>' . "\r\n";
    
    // Enviar o email
    if (mail($destinatario, $assunto, $mensagem, $headers)) {
        echo "O formulário foi enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o formulário. Tente novamente.";
    }
}
?>
