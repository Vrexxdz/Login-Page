document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('myDiv');
    myDiv.classList.remove('hidden');
    myDiv.classList.add('visible');
});

const rememberMeLabel = document.getElementById('remember-me-label');
const rememberMeCheckbox = document.getElementById('remember-me');

rememberMeLabel.addEventListener('click', function() {
    rememberMeCheckbox.checked = !rememberMeCheckbox.checked;
});
