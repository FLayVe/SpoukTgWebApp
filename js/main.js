let tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let wellcome_message =  document.getElementById("welcome__user-name");

wellcome_messagem.innerText  = `Hi, ${tg.initDataUnsafe.first_name}`;
