const studentNames = [
  "Lê Thị Ngọc Anh",
  "Phạm Thị Ngọc Anh",
  "Vũ Nguyễn Ngọc Anh",
  "Nguyễn Ngọc Gia Bảo",
  "Trần Hoài Bảo",
  "Nguyễn Thị Như Bình",
  "Hồ Thị Dung",
  "Trần Hạnh Dung",
  "Bùi Đoàn Mỹ Duyên",
  "Huỳnh Đắc Dương",
  "Vũ Minh Đức",
  "Trần Gia Huy",
  "Nguyễn Cảnh Hùng",
  "Trần Quang Khải",
  "Nguyễn Quốc Anh Khoa",
  "Nguyễn Trần Khôi",
  "Trương Đình Lợi",
  "Nguyễn Văn Minh",
  "Nguyễn Ngọc Hà My",
  "Cao Thành Nam",
  "Lư Hoàng Bảo Nam",
  "Nguyễn Hoàng Nam",
  "Nguyễn Võ Thu Ngân",
  "Trần Bảo Ngọc",
  "Phạm Huỳnh Hạnh Nguyên",
  "Võ Phan Trung Nguyên",
  "Vương Quốc Nguyên",
  "Võ Yến Nhi",
  "Vũ Quỳnh Như",
  "Nguyễn Bảo Ni",
  "Nguyễn Ngọc Kim Ny",
  "Đỗ Nhất Phong",
  "Nguyễn Duy Quang",
  "Nguyễn Phạm Mai Thanh",
  "Nguyễn Minh Thiện",
  "Nguyễn Hoàng Trang",
  "Trịnh Thị Ngọc Trâm",
  "Phạm Xuân Trường",
  "Nguyễn Thị Ánh Tuyết",
  "Đoàn Thị Thùy Vân",
  "Lê Thị Thùy Vân",
  "Lê Thị Thúy Vy",
  "Lê Thị Ngọc Dung",
];

const studentRoles = [
  "Học sinh",
  "Lớp trưởng",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Ủy viên",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Phó Bí thư",
  "Học sinh",
  "Học sinh",
  "Lớp phó",
  "Học sinh",
  "Học sinh",
  "Lớp phó học tập",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Bí thư",
  "Tổ trưởng",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Tổ trưởng",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Tổ trưởng",
  "Học sinh",
  "Học sinh",
  "Tổ trưởng",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Học sinh",
  "Lớp phó văn nghệ",
  "Học sinh",
  "Học sinh",
  "Hoa khôi lớp",
  "Cây hài lớp",
];

const studentGenders = studentNames.map((_, i) => (i % 2 === 0 ? "Nữ" : "Nam"));

const galleryImages = [
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan2.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan3.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan4.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan5.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan6.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan7.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan8.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan9.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan10.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan11.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan12.png",
  "%E1%BA%A3nh%20trang_hoang_web/anh%20muc%20tong%20quan13.png",
];

function loadGallery() {
  const container = document.getElementById("schoolGalleryGrid");
  if (!container) return;

  container.innerHTML = galleryImages
    .map(
      (src, idx) =>
        `<div class="mini-card"><img class="zoom-image" src="${src}" alt="Hoạt động ${idx + 1}"></div>`,
    )
    .join("");
}

function renderStudentList() {
  const tbody = document.getElementById("studentList");
  const searchEl = document.getElementById("searchStudent");
  if (!tbody || !searchEl) return;

  const keyword = searchEl.value.trim().toLowerCase();
  const filtered = studentNames.filter((name) =>
    name.toLowerCase().includes(keyword),
  );

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
      `,
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
  box.innerHTML +=
    "<div><strong>AI:</strong> Đây là câu trả lời mẫu. Tính năng đang phát triển!</div>";
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
    { threshold: 0.15 },
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
    const nextTheme = document.body.classList.contains("dark-mode")
      ? "light"
      : "dark";
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
    if (event.key === "Escape" && modal.classList.contains("open"))
      closeModal();
  });
}

function initSakuraEffect() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "sakura-layer";
  document.body.appendChild(layer);
  const toggleBtn = document.getElementById("sakuraToggle");

  let activePetals = 0;
  const maxPetals = 24;
  let sakuraEnabled = localStorage.getItem("sakuraEffect") !== "off";
  let spawnTimer = null;

  const updateToggleLabel = () => {
    if (!toggleBtn) return;
    toggleBtn.textContent = sakuraEnabled ? "🌸 Hoa: Bật" : "🌸 Hoa: Tắt";
  };

  const spawnPetal = () => {
    if (!sakuraEnabled || activePetals >= maxPetals) return;

    const petal = document.createElement("span");
    petal.className = "sakura-petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${8 + Math.random() * 7}s`;
    petal.style.animationDelay = `${Math.random() * 0.4}s`;
    petal.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
    petal.style.setProperty("--spin", `${120 + Math.random() * 260}deg`);
    petal.style.opacity = `${0.65 + Math.random() * 0.3}`;

    const size = 8 + Math.random() * 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;

    activePetals += 1;
    layer.appendChild(petal);

    petal.addEventListener("animationend", () => {
      petal.remove();
      activePetals = Math.max(0, activePetals - 1);
    });
  };

  const clearPetals = () => {
    layer.innerHTML = "";
    activePetals = 0;
  };

  const startEffect = () => {
    if (spawnTimer) return;
    spawnTimer = setInterval(spawnPetal, 520);
    for (let i = 0; i < 10; i += 1) spawnPetal();
  };

  const stopEffect = () => {
    if (spawnTimer) {
      clearInterval(spawnTimer);
      spawnTimer = null;
    }
    clearPetals();
  };

  if (sakuraEnabled) startEffect();
  updateToggleLabel();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sakuraEnabled = !sakuraEnabled;
      localStorage.setItem("sakuraEffect", sakuraEnabled ? "on" : "off");
      updateToggleLabel();
      if (sakuraEnabled) {
        startEffect();
      } else {
        stopEffect();
      }
    });
  }
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
  initSakuraEffect();

  const search = document.getElementById("searchStudent");
  const sendBtn = document.getElementById("sendChatBtn");
  const aiBtn = document.getElementById("askAiBtn");
  const saveBtn = document.getElementById("saveAttendanceBtn");

  if (search) search.addEventListener("input", renderStudentList);
  if (sendBtn) sendBtn.addEventListener("click", sendMessage);
  if (aiBtn) aiBtn.addEventListener("click", askAI);
  if (saveBtn) saveBtn.addEventListener("click", saveAttendance);
});
