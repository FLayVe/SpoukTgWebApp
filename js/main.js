let tg = window.Telegram.WebApp;

tg.expand();

let wellcome_message_card =  document.getElementById("welcome__user-name");
let wellcome_text = document.createElement("p");

wellcome_text.innerText  = `Hello, ${tg.initDataUnsafe.first_name}`;

wellcome_message_card.appendChild(wellcome_text);