let bearerToken;
const error = document.getElementById('error');

const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            error.innerText = '';
            let bearerToken = JSON.parse(xhr.response).token;
            window.location = './index.html';
            console.log(bearerToken);
            console.log(JSON.parse(xhr.response));
            localStorage.setItem('bearerToken', JSON.parse(xhr.response))
        } else {
            error.innerText = xhr.responseText;
        }
    }
    const data = JSON.stringify({ email, password });
    xhr.send(data);
}

form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
});