let bearerToken;
const error = document.getElementById('error');

const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const xhr = new XMLHttpRequest();
    const url = 'https://veggie-place-production.up.railway.app/login';

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = async () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            error.innerText = '';
            window.location = './index.html';
            const response = JSON.parse(xhr.response);
            const userInformation = {
                token: response.token,
                id: response.id
            }
            console.log(userInformation);
            localStorage.setItem('authentication', JSON.stringify(userInformation));
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
