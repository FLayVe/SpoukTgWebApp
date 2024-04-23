const tg = window.Telegram.WebApp;

document.getElementById("welcome__user-name").innerText = ('Hello, %s', tg.initDataUnsafe.first_namme)