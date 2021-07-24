$(document).ready(() => {
    'use strict'

    //Валидация форм
let error = false;
$('.open').click(() => {
    let name = $('#name');
    let email = $('#email');
    let password = $('#password');
    let repeat = $('#repeat');

    if (!name.val()) {
        name.siblings('.input-error').show();
        name.css('background', '#ff859a');
        error = true;
    } else {
        name.css('background', '#F3F3FA')
        name.siblings('.input-error').hide();
    }
    
    if (!email.val()) {
        email.siblings('.input-error').show();
        email.css('background', '#ff859a');
        error = true;
    } else {
        email.css('background', '#F3F3FA')
        email.siblings('.input-error').hide();
    }
    
    if (!password.val()) {
        password.siblings('.input-error').show();
        password.css('background', '#ff859a');
        error = true;
    } else {
        password.css('background', '#F3F3FA')
        password.siblings('.input-error').hide();
    }
    
    if (!repeat.val()) {
        repeat.siblings('.input-error').show();
        repeat.css('background', '#ff859a');
        error = true;
    } else {
        repeat.css('background', '#F3F3FA')
        repeat.siblings('.input-error').hide();
    }
    
    if (password.val() !== repeat.val()) {
        repeat.siblings('.input-error').hide();
        password.siblings('.input-error-repeat').show();
        password.css('background', '#ff859a');
        repeat.siblings('.input-error-repeat').show();
        repeat.css('background', '#FF6683');
        error = true;
    } else {
        repeat.siblings('.input-error-repeat').hide();
        password.siblings('.input-error-repeat').hide();
    }
    if (name.val() != ''  && email.val() != '' && password.val() != ''  && repeat.val() != '' ) {
        location.href = 'index4.html';
        return;
    }
    else {
        return;
    }
  

});
    

//показать.скрыть пароль
$('.account').on('click', '.password-cntrl', function(){
	if ($('#password').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password').attr('type', 'password');
	}
	return false;
});

$('.account').on('click', '.password-control', function(){
	if ($('#repeat').attr('type') == 'password'){
		$(this).addClass('view');
		$('#repeat').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#repeat').attr('type', 'password');
	}
	return false;
});

});