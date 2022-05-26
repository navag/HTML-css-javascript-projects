const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const showToastNotificitation = () => {
    const toastDiv = document.createElement('div');
    toastDiv.classList.add('toast');
    const rnadomeNum = Math.floor((Math.random() * 10) + 1);
    toastDiv.innerHTML = `Hello I am toast notification<span class="close" id="close${rnadomeNum}"><i class="fa-solid fa-xmark"></i></span>`
    toasts.appendChild(toastDiv);
    setTimeout(() => toastDiv.remove(), 5000);
    const close = document.getElementById(`close${rnadomeNum}`);
    close.addEventListener('click', () => toastDiv.remove());
};

button.addEventListener('click', showToastNotificitation)