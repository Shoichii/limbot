// open popup

const orderBot = document.querySelectorAll('.order_bot')
const popupWrapper = document.querySelector('.popup-wrapper')
const popup = document.querySelector('.popup')
const closeWindow = document.querySelector('.popup_close_img')

orderBot.forEach(item => {
    item.addEventListener('click', () => {
        popupWrapper.classList.add('popup-close')
    })
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.classList.remove('popup-close')
})

popup.addEventListener('click', e => {
    e.stopPropagation();
})

closeWindow.addEventListener('click', () => {
    popupWrapper.classList.remove('popup-close')
})

// JustValidate

const validate = new window.JustValidate('#form_1');
const validate2 = new window.JustValidate('#form_2');

const fieldHide = document.querySelectorAll('.field-hide')
const fields = document.querySelectorAll('.answers_second_field')

const userName1 = document.querySelector('#name_1');
const email1 = document.querySelector('#email_1');
const tel1 = document.querySelector('#tel_1');

const errorDiv = document.createElement('div');
errorDiv.style.color = 'rgb(184, 17, 17)';
errorDiv.classList.add('just-validate-error-label');
errorDiv.textContent = 'Поле не заполнено!';
const phoneRegex = /\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/

validate
    .addField('#name_1', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
    ])
    .addField('#email_1', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
        {
            rule: 'email',
            errorMessage: 'Email введён неверно!',
        },
    ])
    .addField('#tel_1', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
        {
            rule: 'customRegexp',
            value: phoneRegex,
            errorMessage: 'Поле не заполнено!'
        }
    ]);

userName1.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        userName1.classList.add('just-validate-error-field')
        fieldHide[0].style.display = "block";
        const children = fields[0].children
        if (children.length >= 4) {
            fieldHide[0].style.display = "none";
        }
    }
})

email1.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        email1.classList.add('just-validate-error-field')
        fieldHide[1].style.display = "block";
        const children = fields[1].children
        if (children.length >= 4) {
            fieldHide[1].style.display = "none";
        }
    }

})

tel1.addEventListener('mouseover', e => {
    if (e.target.value == '+7(___)___-__-__') {
        tel1.classList.add('just-validate-error-field')
        fieldHide[2].style.display = "block";
        const children = fields[2].children
        if (children.length >= 4) {
            fieldHide[2].style.display = "none";
        }
    }
})

userName1.addEventListener('input', e => {
    if (e.target.value != '') {
        userName1.classList.remove('just-validate-error-field')
        fieldHide[0].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[0].children
        if (children.length <= 3) {
            userName1.classList.add('just-validate-error-field')
            fieldHide[0].style.display = "block";
        }

    }
})

email1.addEventListener('input', e => {
    if (e.target.value != '') {
        email1.classList.remove('just-validate-error-field')
        fieldHide[1].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[1].children
        if (children.length <= 3) {
            email1.classList.add('just-validate-error-field')
            fieldHide[1].style.display = "block";
        }
    }
})

let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
let mask = new IMask(tel1, maskOptions);
let wasSubmit1 = false
tel1.addEventListener('input', e => {
    if (e.target.value.match(phoneRegex)) {
        tel1.classList.remove('just-validate-error-field')
        fieldHide[2].style.display = "none";
    } else if (!e.target.value.match(phoneRegex) && !wasSubmit1) {
        tel1.classList.add('just-validate-error-field')
        fieldHide[2].style.display = "block";
    }
})


const userName2 = document.querySelector('#name_2');
const email2 = document.querySelector('#email_2');
const tel2 = document.querySelector('#tel_2');

validate2
    .addField('#name_2', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
    ])
    .addField('#email_2', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
        {
            rule: 'email',
            errorMessage: 'Email введён неверно!',
        },
    ])
    .addField('#tel_2', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
        {
            rule: 'customRegexp',
            value: phoneRegex,
            errorMessage: 'Поле не заполнено!'
        }
    ]);

userName2.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        userName2.classList.add('just-validate-error-field')
        fieldHide[3].style.display = "block";
        const children = fields[4].children
        if (children.length >= 4) {
            fieldHide[3].style.display = "none";
        }
    }
})

email2.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        email2.classList.add('just-validate-error-field')
        fieldHide[4].style.display = "block";
        const children = fields[5].children
        if (children.length >= 4) {
            fieldHide[4].style.display = "none";
        }
    }

})

tel2.addEventListener('mouseover', e => {
    if (e.target.value == '+7(___)___-__-__') {
        tel2.classList.add('just-validate-error-field')
        fieldHide[5].style.display = "block";
        const children = fields[6].children
        if (children.length >= 4) {
            fieldHide[5].style.display = "none";
        }
    }
})

userName2.addEventListener('input', e => {
    if (e.target.value != '') {
        userName2.classList.remove('just-validate-error-field')
        fieldHide[3].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[4].children
        if (children.length <= 3) {
            userName2.classList.add('just-validate-error-field')
            fieldHide[3].style.display = "block";
        }

    }
})

email2.addEventListener('input', e => {
    if (e.target.value != '') {
        email2.classList.remove('just-validate-error-field')
        fieldHide[4].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[5].children
        if (children.length <= 3) {
            email2.classList.add('just-validate-error-field')
            fieldHide[4].style.display = "block";
        }
    }
})

let maskOptions2 = {
    mask: '+7(000)000-00-00',
    lazy: false
}
let mask2 = new IMask(tel2, maskOptions);
let wasSubmit2 = false
tel2.addEventListener('input', e => {
    if (e.target.value.match(phoneRegex)) {
        tel2.classList.remove('just-validate-error-field')
        fieldHide[5].style.display = "none";
    } else if (!e.target.value.match(phoneRegex) && !wasSubmit2) {
        tel2.classList.add('just-validate-error-field')
        fieldHide[5].style.display = "block";
    }
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

let particles = document.getElementById('particles-js')
let wrapper = document.querySelector('.wrapper')
particles.style.height = `${wrapper.offsetHeight + 300}px`


window.addEventListener('resize', () => {
    particles.style.height = `${wrapper.offsetHeight + 300}px`
})

// Отправка формы

const form1 = document.getElementById('form_1');
const form2 = document.getElementById('form_2');

form1.addEventListener('submit', function (e) {
    e.preventDefault()
    particles.style.height = `${wrapper.offsetHeight}px`
    fieldHide[0].style.display = "none";
    fieldHide[1].style.display = "none";
    fieldHide[2].style.display = "none";
    wasSubmit1 = true
    let closePopup = fields[0].children.length != 4 &&
        fields[1].children.length != 4 &&
        fields[2].children.length != 4

    if (closePopup) {
        fetch('../php/telegram.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: this.name_1.value,
                email: this.email_1.value,
                tel: this.tel_1.value,
                comment: this.comment_1.value
            })
        }).then(() => {
            this.name_1.value = ''
            this.email_1.value = ''
            this.tel_1.value = ''
            this.comment_1.value = ''
        })
        popupWrapper.classList.remove('popup-close')
    }


})

form2.addEventListener('submit', function (e) {
    e.preventDefault()
    particles.style.height = `${wrapper.offsetHeight}px`
    fieldHide[3].style.display = "none";
    fieldHide[4].style.display = "none";
    fieldHide[5].style.display = "none";
    wasSubmit2 = true
    let closePopup = fields[4].children.length != 4 &&
        fields[5].children.length != 4 &&
        fields[6].children.length != 4

    if (closePopup) {
        fetch('../php/telegram.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: this.name_2.value,
                email: this.email_2.value,
                tel: this.tel_2.value,
                promo: this.promo.value,
                comment: this.comment_2.value

            })
        }).then(() => {
            this.name_2.value = ''
            this.email_2.value = ''
            this.tel_2.value = ''
            this.promo.value = ''
            this.comment_2.value = ''
        })
    }
})

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#002cfc"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#002cfc",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


