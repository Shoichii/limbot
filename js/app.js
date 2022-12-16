// JustValidate

const validate = new window.JustValidate('#form');

const fieldHide = document.querySelectorAll('.field-hide')
const fields = document.querySelectorAll('.answers_second_field')

const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');

const errorDiv = document.createElement('div');
errorDiv.style.color = 'rgb(184, 17, 17)';
errorDiv.classList.add('just-validate-error-label');
errorDiv.textContent = 'Поле не заполнено!';

validate
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено!',
        },
        {
            rule: 'email',
            errorMessage: 'Email is invalid!',
        },
    ]);

userName.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        userName.classList.add('just-validate-error-field')
        fieldHide[0].style.display = "block";
        const children = fields[0].children
        if (children.length >= 4) {
            fieldHide[0].style.display = "none";
        }
    }
})

email.addEventListener('mouseover', e => {
    if (e.target.value == '') {
        email.classList.add('just-validate-error-field')
        fieldHide[1].style.display = "block";
        const children = fields[1].children
        if (children.length >= 4) {
            fieldHide[1].style.display = "none";
        }
    }

})

tel.addEventListener('mouseover', e => {
    if (e.target.value == '+7(___)___-__-__') {
        tel.classList.add('just-validate-error-field')
        fieldHide[2].style.display = "block";
    }
})

userName.addEventListener('input', e => {
    if (e.target.value != '') {
        userName.classList.remove('just-validate-error-field')
        fieldHide[0].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[0].children
        if (children.length <= 3) {
            userName.classList.add('just-validate-error-field')
            fieldHide[0].style.display = "block";
        }

    }
})

email.addEventListener('input', e => {
    if (e.target.value != '') {
        email.classList.remove('just-validate-error-field')
        fieldHide[1].style.display = "none";
    } else if (e.target.value == '') {
        const children = fields[1].children
        if (children.length <= 3) {
            email.classList.add('just-validate-error-field')
            fieldHide[1].style.display = "block";
        }
    }
})

let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
}
let mask = new IMask(tel, maskOptions);

tel.addEventListener('input', e => {
    if (e.target.value != '+7(___)___-__-__') {
        tel.classList.remove('just-validate-error-field')
        fieldHide[2].style.display = "none";
    } else if (e.target.value == '+7(___)___-__-__') {
        tel.classList.add('just-validate-error-field')
        fieldHide[2].style.display = "block";
    }
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

let particles = document.getElementById('particles-js')
let wrapper = document.querySelector('.wrapper')
particles.style.height = `${wrapper.offsetHeight}px`


window.addEventListener('resize', () => {
    particles.style.height = `${wrapper.offsetHeight}px`
})

window.addEventListener('submit', () => {
    particles.style.height = `${wrapper.offsetHeight}px`
    fieldHide[0].style.display = "none";
    fieldHide[1].style.display = "none";

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


