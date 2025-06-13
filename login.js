// login.js

// ตัวอย่างชื่อผู้ใช้และรหัสผ่านที่ใช้ล็อกอินได้ (คุณสามารถดึงจาก localStorage หรือฐานข้อมูลก็ได้)
const correctUsername = "admin";
const correctPassword = "1234";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'home.html';
    } else {
        document.getElementById('statusMessage').innerText = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
    }
});
