document.getElementById("login-submit").
    addEventListener('click', function () {

        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;
        //user password

        const passwrdField = document.getElementById('user-password')
        const userPassword = passwrdField.value

        if (userEmail == 'anzum@gmail.com' && userPassword == '1234') {
            window.location.href = 'second.html'
        }
    })