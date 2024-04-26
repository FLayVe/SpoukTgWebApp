let WebApp = window.Telegram.WebApp;
const userData = WebApp.initDataUnsafe.user;

const token = '6419070785:AAHaIp5r0-T5xsjdghyuq-6i2WB0J6Q3bOY';
const groupChatId  = '-1002123032129';
const botApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;


window.addEventListener(
	'mousewheel',
	function (e) {
		if (e.ctrlKey) {
			e.preventDefault()
			return false
		}
	},
	{ passive: false }
)

function setUserFirstName() {

    document.getElementById("user-name").innerText = userData ? userData.first_name : '{User}';

}

function sendOrder() {

    var isReady = true;

    var inputName = document.getElementById('name');
    var inputPhone = document.getElementById('phone');
    var inputComment = document.getElementById('comment');

    var tag = userData ? userData.username : '{User}'
    var name = inputName.value;
    var phone = inputPhone.value;
    var comment = inputComment.value;
    
    if (name.trim() === "") {

        inputName.placeholder = "Your name (required)";
        isReady = false
    }

    if (phone.trim() === "") {

        inputPhone.placeholder = "Phone number (required)";
        isReady = false
    }

    if (isReady) {

        var message = `
        @${tag}
        Name: ${name}
        Phone: ${phone}
        Comment: ${comment}
        `;

    
        var params = {
            chat_id: groupChatId,
            text: message,
        };

        axios.post(botApiUrl, params)
            .then(function (response) {
                console.log(response);
                alert('Повідомлення відправлено успішно!');
                window.location.href = './main.html';
            })
            .catch(function (error) {
                console.error(error);
                alert('Помилка відправлення повідомлення.');
            });


        inputName.placeholder = "Your name";
        inputPhone.placeholder = "Phone number";

        inputName.value = "";
        inputPhone.value = "";
        inputComment.value = "";
    }

    return false;
}

function showBackButton() {

    var BackButton = WebApp.BackButton;

    BackButton.show();
    BackButton.onClick(function() {
        BackButton.hide();
        window.location.href = './main.html';
    });
}


