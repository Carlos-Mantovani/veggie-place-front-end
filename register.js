const error = document.getElementById('error');

const getContent = async () => {
    try {
        const resp = await fetch('https://veggie-place-production.up.railway.app/users');
        const data = await resp.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getContent();

const register = async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    const url = 'https://veggie-place-production.up.railway.app/register';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 201) {
            error.innerText = '';
            console.log('sucesso:', xhr.responseText);
            window.location = './login.html';
        } else {
            error.innerText = xhr.responseText;
        }
    }
    const data = JSON.stringify({ username, email, password });
    xhr.send(data);
    username.innerText = '';
    email.innerText = '';
    password.innerText = '';
}

form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    register();
});
