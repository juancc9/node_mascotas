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
              backgroundColor: [
            '#42a5f5', '#f44336', '#66bb6a', '#ffa726',
            '#ab47bc', '#26c6da', '#d4e157', '#ff7043',
            '#8d6e63', '#ec407a', '#7e57c2', '#26a69a',
            '#5c6bc0', '#c0ca33', '#ffca28', '#bdbdbd',
            '#9ccc65', '#78909c', '#e57373', '#ba68c8'
          ]
          , 
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


    
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("http://localhost:3000/api/MascotasRazaJJM");
      const data = await response.json();

      const nombresRaza = data.map(item => item.nombre);
      const cantidades = data.map(item => item.cantidad); 

      const ctx = document.getElementById("graficoMascotasPorRaza").getContext("2d");

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nombresRaza,
          datasets: [{
            label: "Cantidad por Raza",
            data: cantidades,
          backgroundColor: [
            '#42a5f5', '#f44336', '#66bb6a', '#ffa726',
            '#ab47bc', '#26c6da', '#d4e157', '#ff7043',
            '#8d6e63', '#ec407a', '#7e57c2', '#26a69a',
            '#5c6bc0', '#c0ca33', '#ffca28', '#bdbdbd',
            '#9ccc65', '#78909c', '#e57373', '#ba68c8'
          ],
            borderRadius: 5
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: context => `${context.label}: ${context.raw}`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Cantidad' }
            },
            x: {
              title: { display: true, text: 'Raza' }
            }
          }
        }
      });

    } catch (error) {
      console.error("Error al cargar gráfico de razas:", error);
      alert("No se pudo cargar la gráfica.");
    }
  });
