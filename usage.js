$(document).ready(function() {
    const ctx = document.getElementById('usageChart').getContext('2d');
    let usageChart;

    function fetchData(period) {
        // Dummy data, replace with actual data fetching logic
        const data = {
            daily: [10, 20, 30, 40, 50, 60, 70],
            weekly: [70, 80, 90, 100, 110, 120, 130],
            monthly: [130, 140, 150, 160, 170, 180, 190]
        };
        return data[period];
    }

    function updateChart(period) {
        const data = fetchData(period);
        const labels = data.map((_, index) => `${period.charAt(0).toUpperCase() + period.slice(1)} ${index + 1}`);
        
        if (usageChart) {
            usageChart.destroy();
        }

        usageChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Data Usage (${period})`,
                    data: data,
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        checkAlerts(data);
    }

    function checkAlerts(data) {
        const totalUsage = data.reduce((acc, curr) => acc + curr, 0);
        const limit = 500; // Dummy limit, replace with actual limit
        if (totalUsage > limit) {
            $('#alert').text('Warning: You are nearing your data limit!').show();
        } else {
            $('#alert').hide();
        }
    }

    $('.usage-btn').on('click', function() {
        const period = $(this).data('period');
        updateChart(period);
    });

    // Initialize with daily data
    updateChart('daily');
});
