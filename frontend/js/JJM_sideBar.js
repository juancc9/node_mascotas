fetch("../component/JJM_sideBar.html") // ajusta ruta según estructura
  .then(res => res.text())
  .then(data => {
    document.getElementById("sidebar-container").innerHTML = data;

    window.abrirSidebar = function () {
      document.getElementById("sidebar").classList.remove("collapsed");
    };

    window.cerrarSidebar = function () {
      document.getElementById("sidebar").classList.add("collapsed");
    };
  })
  .catch(err => console.error("Error cargando sidebar:", err));
