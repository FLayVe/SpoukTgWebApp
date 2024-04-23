const tg = window.Telegram.WebApp;

document.getElementById("welcome__user-name").innerText = 'Hello, ${tg.initDataUnsafe.firstname}'