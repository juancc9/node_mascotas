const map = L.map('map').setView([1.8529799712772645, -76.04470617326895], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const token = localStorage.getItem("token");

fetch("http://localhost:3000/api/mascotasJJM", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => res.json())
  .then(mascotas => {
    mascotas.forEach(m => {
      if (m.latitud && m.longitud) {
        L.marker([parseFloat(m.latitud), parseFloat(m.longitud)]).addTo(map)
          .bindPopup(`<strong>${m.nombre}</strong><br>${m.estado}</br>Raza:${m.raza_id}</br>`);
      }
    });
  })
  .catch(err => {
    console.error("Error al cargar mascotas:", err);
  });
