new WOW({
    animateClass: 'animate__animated',
}).init();


$('.product-image').magnificPopup({
    type: 'image'
});

$('.single-item').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
});

// только цифры
$('#inp').on('keypress', e => {
    if (/\d/.test(e.key)) {
        return true;
    } else {
        e.preventDefault();
    }
    alert('Нельзя вводить буквы')
})

//до 6 символов
$("#inp").keyup(function (e) {
        if (this.value.length > 6)
            this.value = this.value.substr(0, 6);
    }
);
let answer = $('#answer').hide();

$('#btn').on('click', function (e) {
    let fullName = $('#full-name').val();
    let surName = $('#surname').val();
    let tel = $('#phone').val();
    let country = $('#country').val();
    let ind = $('#inp').val();
    let address = $('#address').val();



    if (fullName.length < 1) {
        alert('заполните поле Имя');
        e.preventDefault()
    } else if (surName.length < 1) {
        alert('заполните поле Фамилия');
        e.preventDefault()
    } else if (tel.length < 1) {
        alert('заполните поле Телефон');
        e.preventDefault()
    } else if (country.length < 1) {
        alert('заполните поле Страна');
        e.preventDefault()
    } else if (ind.length < 6) {
        alert('заполните поле Индекс');
        e.preventDefault()
    } else if (address.length < 1) {
        alert('заполните поле Адрес');
        e.preventDefault()
    } else {
        //alert('Спасибо за заказ!')
        answer.show();
        e.stopPropagation();
        e.preventDefault();
        $('#form').hide();
        $('#heading').hide();
    }
})

