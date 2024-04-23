var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'biscoitotinhoss'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'biscoitotinhoss'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}