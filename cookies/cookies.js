var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'biscoitotinhos'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'biscoitotinhos'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}