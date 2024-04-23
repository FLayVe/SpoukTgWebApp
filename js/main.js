let tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

document.getElementById("welcome__user-name").innerText = `Hi, ${window.Telegram.WebAppUser.first_name}`;