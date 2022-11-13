const error = document.getElementById('error');

const getContent = async () => {
    try {
        const resp = await fetch('http://localhost:3000/users');
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
    const url = 'http://localhost:3000/register';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            error.innerText = '';
            console.log('sucesso:', xhr.responseText);
        } else {
            error.innerText = xhr.responseText;
        }
    }
    const data = JSON.stringify({ username, email, password });
    xhr.send(data);
}

form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    register();
});