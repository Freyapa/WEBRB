// เล่นเสียงคลิก
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) clickSound.play();
}

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    playClickSound(); // เล่นเสียงเมื่อกดปุ่ม

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const statusMessage = document.getElementById('statusMessage');

    if (!username || !email || !password) {
        statusMessage.innerText = '❌ กรุณากรอกข้อมูลให้ครบถ้วน';
        return;
    }

    // ตรวจสอบว่าชื่อนี้ถูกใช้ไปแล้วหรือไม่
    if (localStorage.getItem(username)) {
        statusMessage.innerText = '⚠️ ชื่อผู้ใช้นี้ถูกใช้ไปแล้ว กรุณาใช้ชื่ออื่น';
        return;
    }

    // สร้างข้อมูลผู้ใช้ใหม่
    const user = {
        username,
        email,
        password,
        registeredAt: new Date().toISOString()
    };

    // บันทึกข้อมูลผู้ใช้
    localStorage.setItem(username, JSON.stringify(user));

    // บันทึกรายชื่อผู้ใช้ทั้งหมดใน userList
    let userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push(username);
    localStorage.setItem("userList", JSON.stringify(userList));

    statusMessage.innerText = '✅ ลงทะเบียนสำเร็จ! กำลังนำไปยังหน้าเข้าสู่ระบบ...';

    // รอ 1.5 วินาทีก่อนเปลี่ยนหน้า
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
});
