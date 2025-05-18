// const sesion = localStorage.getItem("token")
// if(!sesion){
    

//   window.location ="index.html"  
// }

    document.addEventListener("DOMContentLoaded", async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch("http://localhost:3000/api/mascotaestadoJJM", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await response.json();
        const estados = data.map(item => item.estado);
        const cantidades = data.map(item => item.cantidad);

        new Chart(document.getElementById("graficoEstadoMascotas"), {
          type: 'bar',
          data: {
            labels: estados,
            datasets: [{
              label: "Cantidad de Mascotas",
              data: cantidades,
              backgroundColor: ['#4caf50', '#f44336'], 
              borderRadius: 5
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.label}: ${context.raw}`;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Cantidad'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Estado'
                }
              }
            }
          }
        });

      } catch (error) {
        console.error("Error al cargar gráfico:", error);
        alert("No se pudo cargar la gráfica.");
      }
    });
