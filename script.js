const studentNames = [
  "Lê Thị Ngọc Anh", "Phạm Thị Ngọc Anh", "Vũ Nguyễn Ngọc Anh", "Nguyễn Ngọc Gia Bảo", "Trần Hoài Bảo",
  "Nguyễn Thị Như Bình", "Hồ Thị Dung", "Trần Hạnh Dung", "Bùi Đoàn Mỹ Duyên", "Huỳnh Đắc Dương",
  "Vũ Minh Đức", "Trần Gia Huy", "Nguyễn Cảnh Hùng", "Trần Quang Khải", "Nguyễn Quốc Anh Khoa",
  "Nguyễn Trần Khôi", "Trương Đình Lợi", "Nguyễn Văn Minh", "Nguyễn Ngọc Hà My", "Cao Thành Nam",
  "Lư Hoàng Bảo Nam", "Nguyễn Hoàng Nam", "Nguyễn Võ Thu Ngân", "Trần Bảo Ngọc", "Phạm Huỳnh Hạnh Nguyên",
  "Võ Phan Trung Nguyên", "Vương Quốc Nguyên", "Võ Yến Nhi", "Vũ Quỳnh Như", "Nguyễn Bảo Ni",
  "Nguyễn Ngọc Kim Ny", "Đỗ Nhất Phong", "Nguyễn Duy Quang", "Nguyễn Phạm Mai Thanh", "Nguyễn Minh Thiện",
  "Nguyễn Hoàng Trang", "Trịnh Thị Ngọc Trâm", "Phạm Xuân Trường", "Nguyễn Thị Ánh Tuyết", "Đoàn Thị Thùy Vân",
  "Lê Thị Thùy Vân", "Lê Thị Thúy Vy", "Lê Thị Ngọc Dung"
];

const studentRoles = [
  "Học sinh", "Lớp trưởng", "Học sinh", "Học sinh", "Học sinh", "Ủy viên", "Học sinh", "Học sinh", "Học sinh", "Phó Bí thư",
  "Học sinh", "Học sinh", "Lớp phó", "Học sinh", "Học sinh", "Lớp phó học tập", "Học sinh", "Học sinh", "Học sinh", "Học sinh",
  "Học sinh", "Học sinh", "Bí thư", "Tổ trưởng", "Học sinh", "Học sinh", "Học sinh", "Tổ trưởng", "Học sinh", "Học sinh",
  "Học sinh", "Học sinh", "Tổ trưởng", "Học sinh", "Học sinh", "Tổ trưởng", "Học sinh", "Học sinh", "Học sinh", "Học sinh",
  "Lớp phó văn nghệ", "Học sinh", "Học sinh", "Hoa khôi lớp", "Cây hài lớp"
];

const studentGenders = studentNames.map((_, i) => (i % 2 === 0 ? "Nữ" : "Nam"));

const galleryImages = [
  "ảnh trang_hoang_web/anh muc tong quan.png",
  "ảnh trang_hoang_web/anh muc tong quan2.png",
  "ảnh trang_hoang_web/anh muc tong quan3.png",
  "ảnh trang_hoang_web/anh muc tong quan4.png",
  "ảnh trang_hoang_web/anh muc tong quan5.png",
  "ảnh trang_hoang_web/anh muc tong quan6.png",
  "ảnh trang_hoang_web/anh muc tong quan7.png",
  "ảnh trang_hoang_web/anh muc tong quan8.png",
  "ảnh trang_hoang_web/anh muc tong quan9.png",
  "ảnh trang_hoang_web/anh muc tong quan10.png",
  "ảnh trang_hoang_web/anh muc tong quan11.png",
  "ảnh trang_hoang_web/anh muc tong quan12.png",
  "ảnh trang_hoang_web/anh muc tong quan13.png"
];

function loadGallery() {
  const container = document.getElementById("schoolGalleryGrid");
  if (!container) return;

  container.innerHTML = galleryImages
    .map(
      (src, idx) =>
        `<div class="mini-card"><img class="zoom-image" src="${src}" alt="Hoạt động ${idx + 1}"></div>`
    )
    .join("");
}

function renderStudentList() {
  const tbody = document.getElementById("studentList");
  const searchEl = document.getElementById("searchStudent");
  if (!tbody || !searchEl) return;

  const keyword = searchEl.value.trim().toLowerCase();
  const filtered = studentNames.filter((name) => name.toLowerCase().includes(keyword));

  tbody.innerHTML = filtered
    .map((name, index) => {
      const originalIndex = studentNames.indexOf(name);
      const month = String((originalIndex % 12) + 1).padStart(2, "0");
      const day = String((originalIndex % 28) + 1).padStart(2, "0");
      return `
        <tr>
          <td>${index + 1}</td>
          <td><strong>${name}</strong></td>
          <td>${day}/${month}/2008</td>
          <td>${studentGenders[originalIndex]}</td>
          <td>${studentRoles[originalIndex] || "Học sinh"}</td>
          <td><span class="badge">Đang học</span></td>
        </tr>
      `;
    })
    .join("");
}

function loadAttendance() {
  const container = document.getElementById("attendanceListContainer");
  if (!container) return;

  container.innerHTML = studentNames
    .map(
      (name, i) => `
        <div class="attendance-student">
          <span>${name}</span>
          <select id="att_${i}">
            <option value="present">Có mặt</option>
            <option value="absent">Vắng</option>
          </select>
        </div>
      `
    )
    .join("");
}

function saveAttendance() {
  alert("Đã lưu điểm danh (demo)");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatMessages");
  if (!input || !box) return;
  const msg = input.value.trim();
  if (!msg) return;
  box.innerHTML += `<div><strong>Bạn:</strong> ${msg}</div>`;
  input.value = "";
  box.scrollTop = box.scrollHeight;
}

function askAI() {
  const input = document.getElementById("aiInput");
  const box = document.getElementById("aiChat");
  if (!input || !box) return;
  const msg = input.value.trim();
  if (!msg) return;
  box.innerHTML += `<div><strong>Bạn:</strong> ${msg}</div>`;
  box.innerHTML += "<div><strong>AI:</strong> Đây là câu trả lời mẫu. Tính năng đang phát triển!</div>";
  input.value = "";
  box.scrollTop = box.scrollHeight;
}

function initRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  if (!toggle || !navbar) return;
  toggle.addEventListener("click", () => navbar.classList.toggle("open"));
}

function initSmoothMenuClose() {
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      const navbar = document.getElementById("navbar");
      if (navbar) navbar.classList.remove("open");
    });
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️ Sáng" : "🌙 Tối";
  }
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem("themeMode") || "light";
  applyTheme(savedTheme);

  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("themeMode", nextTheme);
    applyTheme(nextTheme);
  });
}

function initTeacherProfileModal() {
  const openBtn = document.getElementById("teacherProfileBtn");
  const modal = document.getElementById("teacherProfileModal");
  const closeBtn = document.getElementById("closeTeacherProfile");
  if (!openBtn || !modal || !closeBtn) return;

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
  renderStudentList();
  loadAttendance();
  initRevealAnimation();
  initMobileMenu();
  initSmoothMenuClose();
  initThemeToggle();
  initTeacherProfileModal();

  const search = document.getElementById("searchStudent");
  const sendBtn = document.getElementById("sendChatBtn");
  const aiBtn = document.getElementById("askAiBtn");
  const saveBtn = document.getElementById("saveAttendanceBtn");

  if (search) search.addEventListener("input", renderStudentList);
  if (sendBtn) sendBtn.addEventListener("click", sendMessage);
  if (aiBtn) aiBtn.addEventListener("click", askAI);
  if (saveBtn) saveBtn.addEventListener("click", saveAttendance);
});
