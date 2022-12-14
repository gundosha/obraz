const menu = document.querySelector('.header__menu_burger');
const open_menu = document.querySelector('.header__menu_burgers')
const open_btn = document.querySelector('.header__image_burger')
const pricebtnslider = document.querySelectorAll('.slider_next_prices')
const priceblock = document.querySelector('.prices__container')
let offset = 0;
let offsetTwo = 0
const btnslider = document.querySelectorAll('.slider_next')
const sliderblock = document.querySelector('.clients__container_com')


btnslider.forEach(function(item, i, btnslider){
    item.addEventListener('click', function(){
        offset -=357
        if (offset < -714){
            offset = 0
        }
        sliderblock.style.left = offset + 'px'
        console.log(offset)
    })
})

pricebtnslider.forEach(function(item, i, btnslider){
    item.addEventListener('click', function(){
        offsetTwo -= 368
    if (offsetTwo < -368){
        offsetTwo = 0
    }
    priceblock.style.left = offsetTwo + 'px'
    console.log(offsetTwo)
    })
})





document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form)
        let formData = new FormData(form); 

        if (error === 0){
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
            }else{

            }
        }else{
            alert('заполните обязательные поля')
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if (input.value === ''){
                formAddError(input);
                error++
            }
        }
        return error;
    }

function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error')
}

function formRemoveError(input){
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
}
})



function open_sublist(){
    open_menu.classList.toggle('header__menu_burger_block')
}

open_btn.addEventListener('click', open_sublist);



