var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostraro')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostraro')
}else{
    msgCookies.classList.add('mostraro')
}