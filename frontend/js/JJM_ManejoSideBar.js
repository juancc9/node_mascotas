  function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('toggleBtn');

  sidebar.classList.toggle('collapsed');

  if (sidebar.classList.contains('collapsed')) {
    btn.textContent = 'Abrir Sidebar';
  } else {
    btn.textContent = 'Cerrar Sidebar';
  }
}
