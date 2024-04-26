

const payBtn=document.querySelector(".btn-buy");


// alterei  "http://127.0.0.1:3000/strip-checkout"
payBtn.addEventListener("click", ()=>{
    fetch("http://127.0.0.1:3000/strip-checkout",{
     method: "post",
     headers: new Headers({"Content-Type": "application/json"}), // Corrigido aqui
     body: JSON.stringify({
     items: JSON.parse(localStorage.getItem("cartItems")),
     }),
    })
    .then((res)=>res.json())
    .then((url)=>{
     location.href=url;
     clearCart();
    })
    .catch((err)=> console.log(err));
 });

 