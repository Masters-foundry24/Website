<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="https://kit.fontawesome.com/c47b2c56e8.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="../Responsive Footer/assets/css/style.css">
    <link rel="stylesheet" href="../style.css">


    <style>

div p a{
    text-decoration: none;
    font-size: 18px;
    margin-bottom: 20px;
    color: green;
}
.principal{
    font-size: 25px;
}
.segundo{
    font-size: 20px;
}
div span{
   font-weight: bold;
   font-size: 20px;
}
div p {
    font-weight: 600;
}
div p a i{
    text-decoration: none;
    font-size: 40px;
    margin-right: 15px;
}

@media (max-width: 600px) {
            div p a{
                font-size: 16.5px;
            }
            .principal{
                font-size: 1.2em;
            }
            .segundo{
                font-size: 1em;
            }
            div span{
                font-size: 1em;
            }
            div p a i{
                font-size: 30px;
            }
            div img {
                height: 10%;
                width: 50%;
            }
        }
    </style>

</head>
<body> <br> 
<?php include '../Responsive Footer/header.php'; ?>   

<div style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    box-shadow: 0 0 10px #b7afaf1a;
    padding: 20px;
   
    max-width: 800px;
    margin: auto;">

    
<img src="../img/fundopreto.jpg" alt="Logo"
          style="margin-bottom:30px;  cursor: pointer; background-color:blue; height: 20%;
width: 18%;"> 
    <p class="principal">
        Have a question or concern? Please reach out to us!
    </p> <br>
    <p class="segundo">
       Hours: Mon - Fri, 8:30 - 16:30 (UTC)
    </p> <br>
    <p>
        <span>Email:</span> <a href="mailto:scott@mastersminis.com">scott@mastersminis.com </a>
        <br>    
       <span> Phone:</span> <a href="tel:+2399885140">+239 9885140</a>
          <br>
      <br>
        <p class="segundo">Alternative contact methods:</p>
    </p>
    <br>
      <br>
    <p>
        <a target="_blank" rel="external" href="tel:+2399885140"><i style="color: #25d366;" class="fa-brands fa-whatsapp"></i></a>
        <a href=""><i style="color: blue" class="fa-brands fa-signal-messenger"></i></a>
        <a target="_blank" rel="external" href="https://www.facebook.com/profile.php?id=61557132789271"><i class="fa-brands fa-facebook-messenger"></i></a>
    </p>
</div>
<?php include '../Responsive Footer/footer.php'; ?>
<script src="../app.js"></script>
</body>
</html>