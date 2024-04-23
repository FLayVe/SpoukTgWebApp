let tg = window.Telegram.WebApp;
const userData = tg.initDataUnsafe.user;

const token = '6419070785:AAHaIp5r0-T5xsjdghyuq-6i2WB0J6Q3bOY'
const groupChatID  = '-1002123032129'
const botApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

window.onload = function(){

    document.getElementById("user-name").innerText = userData.first_name;

}

function sendOrder() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var comment = document.getElementById('comment').value;

    var message = `
        ${userData.username}
        Name: ${name}
        Phone: ${phone}
        Comment: ${comment} 
    `;

    var params = {
        chat_id: groupChatID,
        text: message,
    };

    aaxios.post(botApiUrl, params)
        .then(function (response) {
            console.log(response);
            alert('Повідомлення відправлено успішно!');
        })
        .catch(function (error) {
            console.error(error);
            alert('Помилка відправлення повідомлення.');
        });

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('comment').value = '';

    return false;  
}