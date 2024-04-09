<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/c47b2c56e8.js" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="Responsive Footer/assets/css/style.css">
    <title>Criação de Miniaturas</title>
    <style>
      
      *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif; background-color: #0cdbee12;
 
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}



a {
  text-decoration: none;
}

.big-wrapper {
  position: relative;
  padding: 1.7rem 0 2rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  position: relative;
  max-width: 81rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 10;

  
}

header {
  position: fixed;
  z-index: 70;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
  margin-top: -27px;
  box-shadow:  1px 5px 10px rgba(0, 0, 0, 0.051);
  width: 100%;

  margin-top: -235px;
 
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overlay {
  display: none;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo img {
  width: 40px;
  margin-right: 0.6rem;
  margin-top: -0.6rem;
}

.logo h3 {
  color: var(--darkTwo);
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 700;
}

.links ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.links a {
  color: var(--lightTwo);
  margin-left: 1.5rem;
  display: inline-block;
  transition: 0.3s;
  color: whitesmoke;
  font-weight: 500;
  text-transform: uppercase;
}







.links a:hover {
  color: rgba(0, 170, 255, 0.853);
  transform: scale(1.05);
  
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.9rem;
  color: #fff !important;
  background-color: var(--mainColor);
  border-radius: 16px;
  text-transform: capitalize;
  transition: 0.3s;
}

.btn:hover {
  background-color: var(--hoverColor);
  transform: scale(1) !important;
}

.hamburger-menu {
  position: relative;
  z-index: 99;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
  
}

.hamburger-menu .bar {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: rgb(8, 33, 251);
  border-radius: 3px;
  transition: 0.5s;
}

.bar::before,
.bar::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 3px;
  transition: 0.3s;
}

.bar::before {
  transform: translateY(-8px);
}

.bar::after {
  transform: translateY(8px);
}

.big-wrapper.active .hamburger-menu .bar {
  background-color: transparent;
}

.big-wrapper.active .bar::before {
  transform: translateY(0) rotate(-45deg);
}

.big-wrapper.active .bar::after {
  transform: translateY(0) rotate(45deg);
}

.showcase-area .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
}


.big-title {
  font-size: 1.4rem;
  color: var(--darkOne);
  text-transform: capitalize;
  line-height: 1.4;
}

.text {
  color: var(--lightOne);
  font-size: 1.1rem;
  margin: 1.9rem 0 2.5rem;
  max-width: 600px;
  line-height: 2.3;
}

.showcase-area .btn {
  box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
}

.person {
  width: 100%;
  transform: translate(20%, 5px);
}

.toggle-btn {
  display: inline-block;
  border: none;
  background: var(--darkTwo);
  color: var(--backgroundColor);
  outline: none;
  cursor: pointer;
  height: 39px;
  width: 39px;
  border-radius: 50%;
  font-size: 1.1rem;
  transition: 0.3s;
}

.toggle-btn i {
  line-height: 39px;
}

.toggle-btn:hover {
  background: var(--mainColor);
}

.big-wrapper.light .toggle-btn i:last-child {
  display: none;
}

.big-wrapper.light .toggle-btn i:first-child {
  display: block;
}

.big-wrapper.dark .toggle-btn i:last-child {
  display: block;
}

.big-wrapper.dark .toggle-btn i:first-child {
  display: none;
}



.copy {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  animation: appear 1s 1 both;
}

@keyframes appear {
  0% {
    clip-path: circle(30% at -25% -25%);
  }
  100% {
    clip-path: circle(150% at 0 0);
  }
}

@media screen and (max-width: 975px) {
  .hamburger-menu {
    display: flex;
  }

  .links {
    position: fixed;
    top: 0;
    right: 0;
    max-width: 450px;
    width: 65%;
    height: 100%;
    background-color:rgb(255, 255, 255);
    z-index: 95;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: 0.5s;
  }

  .links ul {
    flex-direction: column-reverse;
  }

  .links a {
    color: #000000;
    margin-left: 0;
    padding: 2rem 0;
    font-weight: bold;
  }

  .links .btn {
    background: none;
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(8, 17, 1, 0.545);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
  }

  .big-wrapper.active .links {
    transform: translateX(0);
    box-shadow: 0 0 50px 2px rgba(0, 0, 0, 0.4);
  }

  .big-wrapper.active .overlay {
    pointer-events: all;
    opacity: 1;
  }

  .showcase-area {
    padding: 2.5rem 0;
    max-width: 700px;
    margin: 0 auto;
  }

  .showcase-area .container {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;
  }

  .big-title {
    font-size: 1.1rem;
  }

  .text {
    font-size: 0.95rem;
    margin: 1.4rem 0 1.5rem;
  }
}





@media screen and (max-width: 470px) {
  .container {
    padding: 0 1.5rem;
  }

  .big-title {
    font-size: 0.9rem;
  }

  .text {
    margin: 1.1rem 0 1.5rem;
  }

  .showcase-area .btn {
    font-size: 0.8rem;
  }
}

















        
      
        div.tres-caixas {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 20px;
            margin-bottom: 150px;
            margin-top: 200px;
        }
        .option {
            background-color: #ffffff5f;
            border: 1px solid #ddd;
            padding: 20px;
            width: 30%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.033);
            margin-bottom: 20px; /* Espaço abaixo da caixa para a imagem */
            text-align: center; /* Centraliza o conteúdo da caixa */
            border-radius:30px;
        
        }
        .option:hover{
            background-color: #fff;
          
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.271);
            border: 2px solid rgba(172, 255, 47, 0.455);
           
        }
        .option img {
            max-width: 300px; /* Largura máxima da imagem */
            height: 200px; /* Altura fixa para todas as imagens */
            display: block; /* Remove espaços extras abaixo da imagem */
            margin: 0 auto; /* Centraliza a imagem horizontalmente */
            border-radius: 10px;
            border: 1px solid greenyellow;
        }
        h1 {
            color: #ba1c1c;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
        }
        h2 {
            background-color: #070707;
            color: white;
            padding: 10px;
            border-radius: 20px;

            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
        }
        h2:hover {
            background-color: #00000093;
            color: white;
           

        }
        p {
            color: #666;
            
            justify-content: center;
           
        }
        @media (max-width: 768px) {
            main {
                flex-direction: column;
                align-items: center;
            }
            .option {
                width: 70%;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="container">
          <div class="logo">
            <img src="./img/Logo1.png" alt="Logo" />
            <h3>Fundição Masters</h3>
          </div>

          <div class="links">
            <ul>
              <a href="index.html" class="active">Home</a>
              <a href="compra/index.html">Gallery</a>
              <a href="../SMALLmedio/contacto1/contato.php">Contact</a>
              <a href="#">Our Process</a>
              <a href="#">Create Minis</a>
              <a href="../SMALLmedio/faq/faq.php">FAQ</a>
              <a href="login/index.html"><i id="contaa" class="fa-solid fa-user" style="font-size: 25px;"></i></a>
              <a href="compra/index.html"><i class="fa-solid fa-cart-shopping" style="font-size: 25px;"></i></a>
            </ul>
          </div>

          <div class="overlay"></div>

          <div class="hamburger-menu">
            <div class="bar"></div>
          </div>
        </div>
      </header>



    <div class="tres-caixas">
        <div class="option">
            <h2>Opção 1: <a href="https://www.heroforge.com/" style="text-decoration: none; color: rgb(51, 255, 0);">Hero Forge</a></h2>
            <p>Aplicação online de design de personagens que permite criar e comprar miniaturas personalizadas.</p>
            <a href="https://www.heroforge.com/" rel="external" target="_blank"><img src="img/hero1s.png" alt="Hero Forge"></a>
        </div>

        <div class="option">
            <h2>Opção 2: Eldritch Foundry</h2>
            <p>Aplicação online gratuita de criação de personagens que permite projetar e encomendar miniaturas e estatuetas personalizadas e realistas.</p>
            <img src="img/8.png" alt="Eldritch Foundry">
        </div>

        <div class="option">
            <h2>Opção 3: Anulco</h2>
            <p>Aplicação online gratuita de criação de personagens que permite projetar e encomendar miniaturas e estatuetas personalizadas e realistas.</p>
            <img src="img/7.png" alt="Anulco">
        </div>
    </div>

















    
    <?php include './Responsive Footer/footer.php'; ?>
    
    
    
    
    
    
    
    
    
    
    
    
    
    <script src="app.js"></script>
</body>
</html>
