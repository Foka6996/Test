$(document).ready(() => {
    'use strict'
    //Валидация форм
    let error = false;
    $('.open').click(() => {
        let email = $('#email');
        let password = $('#password');
        if (!email.val()) {
            email.siblings('.input-error').show();
            email.css('background', '#fdcbd0');
            error = true;
        } else {
            email.css('background', '#F3F3FA')
            email.siblings('.input-error').hide();
        }
        if (!password.val()) {
            password.siblings('.input-error').show();
            password.css('background', '#fdcbd0');
            error = true;
        } else {
            password.css('background', '#F3F3FA')
            password.siblings('.input-error').hide();
        }

        if (email.val() != '' && password.val() != '') {
            location.href = 'index4.html';
            return;
        } else {
            return;
        }
    });
//показать.скрыть пароль
    $('.account').on('click', '.password-control', function () {
        if ($('#password').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password').attr('type', 'password');
        }
        return false;
    });
});