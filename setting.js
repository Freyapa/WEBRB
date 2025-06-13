document.addEventListener("DOMContentLoaded", function() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    window.location.href = "login.html";
  }

  document.getElementById("changePasswordForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;

    if (currentPassword === "12345" && newPassword) {
      alert("เปลี่ยนรหัสผ่านสำเร็จ");
    } else {
      alert("กรุณาตรวจสอบรหัสผ่านอีกครั้ง");
    }
  });
});
  