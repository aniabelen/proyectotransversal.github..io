// Datos para los gráficos
const tiposEnergia = ['Solar', 'Eólica', 'Hidroeléctrica', 'Biomasa', 'Geotérmica'];
const costos = [5, 6, 4, 3, 7]; // Costos en dólares por kWh
const disponibilidad = [8, 7, 9, 6, 5]; // Disponibilidad en escala de 1 a 10

// Crear el gráfico de barras
const ctx = document.getElementById('graficoEnergia').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: tiposEnergia,
        datasets: [{
            label: 'Costo por kWh (USD)',
            data: costos,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Disponibilidad',
            data: disponibilidad,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});