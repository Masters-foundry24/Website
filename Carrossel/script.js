const box = document.querySelector(".containerr");
let imagens = Array.from(document.querySelectorAll(".containerr img"));

// Clona a primeira imagem e adiciona ao final
let firstImageClone = imagens[0].cloneNode();
box.appendChild(firstImageClone);
imagens = Array.from(document.querySelectorAll(".containerr img"));

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    // Se a última imagem (cópia da primeira) for atingida,
    // redefine para o início sem animação
    box.style.transition = 'none';
    box.style.transform = `translateX(0px)`;
   
   
    contador = 0;
    
  } else {
    // Caso contrário, move para a próxima imagem com animação
    box.style.transition = 'transform 1s ease-in-out';
    box.style.transform = `translateX(${-contador * 135}px)`;
  }
}

setInterval(slider, 1000);



































const boxs = document.querySelector(".container2");
let imagenss = Array.from(document.querySelectorAll(".container2 img"));

// Clona a primeira imagem e adiciona ao final
let firrstImageClone = imagenss[0].cloneNode();
boxs.appendChild(firrstImageClone);
imagenss = Array.from(document.querySelectorAll(".container2 img"));

let contadori = 0;

function slider2() {
  contadori++;

  if (contadori > imagenss.length - 1) {
    // Se a última imagem (cópia da primeira) for atingida,
    // redefine para o início sem animação
    boxs.style.transition = 'none';
    boxs.style.transform = `translateX(0px)`;
   
   
    contadori = 0;
    
  } else {
    // Caso contrário, move para a próxima imagem com animação
    boxs.style.transition = 'transform 1s ease-in-out';
    boxs.style.transform = `translateX(${-contadori * 135}px)`;
  }
}

setInterval(slider2, 1000);





















const boxss = document.querySelector(".container3");
let imagensss = Array.from(document.querySelectorAll(".container3 img"));

// Clona a primeira imagem e adiciona ao final
let firrsstImageClone = imagensss[0].cloneNode();
boxs.appendChild(firrsstImageClone);
imagensss = Array.from(document.querySelectorAll(".container3 img"));

let contadorii = 0;

function slider3() {
  contadorii++;

  if (contadorii > imagensss.length - 1) {
    // Se a última imagem (cópia da primeira) for atingida,
    // redefine para o início sem animação
    boxss.style.transition = 'none';
    boxss.style.transform = `translateX(0px)`;
   
   
    contadorii = 0;
    
  } else {
    // Caso contrário, move para a próxima imagem com animação
    boxss.style.transition = 'transform 1s ease-in-out';
    boxss.style.transform = `translateX(${-contadorii * 135}px)`;
  }
}

setInterval(slider3, 1000);