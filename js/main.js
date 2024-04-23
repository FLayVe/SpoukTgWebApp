let tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const userData = tg.initDataUnsafe.user;
const username = userData.username ? `@${userData.username}` : userData.first_name;

document.getElementById("welcome__user-name").innerText = `Привіт, ${username}!`;
