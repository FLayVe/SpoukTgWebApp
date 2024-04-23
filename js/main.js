window.onload = function(){

    let tg = window.Telegram.WebApp;
    
    const userData = tg.initDataUnsafe.user;
    const userFirstName = userData.first_name;

    document.getElementById("user-name").innerText = userFirstName;

}