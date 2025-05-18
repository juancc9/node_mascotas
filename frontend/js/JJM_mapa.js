    const map = L.map('map').setView([1.8529799712772645, -76.04470617326895], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([1.8529799712772645, -76.04470617326895]).addTo(map)
      .bindPopup('Un popup con <strong>información</strong>.')
      .openPopup();
