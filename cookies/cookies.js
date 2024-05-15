var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'biscoitotinhosss'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'biscoitotinhosss'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}