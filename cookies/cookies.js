var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'biscoitos'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'biscoitos'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}