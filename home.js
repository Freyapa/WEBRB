// home.js

window.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    if (loggedIn !== 'true') {
        window.location.href = 'login.html'; // ถ้าไม่ล็อกอินให้กลับไป login
    } else {
        document.getElementById('userName').innerText = `ยินดีต้อนรับ, ${username}`;
    }
});

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}
