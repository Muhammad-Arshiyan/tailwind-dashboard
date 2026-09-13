const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

function showSidebar() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
}

function hideSidebar() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
}

openSidebar.addEventListener("click", showSidebar);
closeSidebar.addEventListener("click", hideSidebar);
overlay.addEventListener("click", hideSidebar);

lucide.createIcons();
