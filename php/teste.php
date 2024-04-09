<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Descrição</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        h2 {
            color: #333;
            text-align: center;
        }
        form {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
        }
        input[type="email"], textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>

</head>
<body>
    <h2>Envie uma descrição:</h2>
    
    <form action="conet.php" method="post" enctype="multipart/form-data">
        <label for="descricao">Descrição:</label><br>
        <input type="email" id="email" name="email" required>
        <textarea id="descricao" name="descricao" rows="4" cols="50"></textarea><br><br>
        <input type="file" name="imagem" id="imagem" accept="image/*"><br><br>
        <input type="submit" value="Enviar">

</body>
</html>