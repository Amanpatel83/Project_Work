// Setup the data for the chart
const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
        label: 'Blood Pressure (Systolic)',
        data: [140, 145, 150, 160, 155], // Example data for systolic pressure
        borderColor: '#ff6f61',
        backgroundColor: 'rgba(255, 111, 97, 0.2)',
        fill: true,
        tension: 0.4
    }, {
        label: 'Blood Pressure (Diastolic)',
        data: [80, 82, 85, 78, 76], // Example data for diastolic pressure
        borderColor: '#4e73df',
        backgroundColor: 'rgba(78, 115, 223, 0.2)',
        fill: true,
        tension: 0.4
    }]
};

// Get the context of the canvas element to create the chart
const ctx = document.getElementById('bloodPressureChart').getContext('2d');

// Create the chart using Chart.js
const bloodPressureChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    fontSize: 14,
                }
            }
        }
    }
});
