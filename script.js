// Initialize chart with sample data
let chart; // global chart variable

function initChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 15', 'Feb 1', 'Feb 15', 'Mar 15'],
            datasets: [{
                label: 'Price History (₹)',
                data: [15999, 12999, 10999, 11999, 10999],
                borderColor: '#FFA500',
                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Price History',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '₹' + context.raw;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value;
                        }
                    }
                }
            }
        }
    });
}

document.getElementById('track-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = this.querySelector('input');
    
    // In a real implementation, this would call your backend API
    console.log('Tracking URL:', urlInput.value);
    
    // For demo purposes, we'll show sample data
    document.querySelector('.product-name').textContent = 'Sample Product';
    document.querySelector('.product-price').textContent = '₹10999';
    document.querySelector('.product-source').textContent = 'Source: Amazon';
    document.querySelector('.product-image').src = 'https://m.media-amazon.com/images/I/71xc4OlTkaL._SY450_.jpg';

    // Show the product and chart sections
    document.querySelector('.product-section').style.display = 'block';
    document.querySelector('.chart-section').style.display = 'block';

    // Initialize or update the chart
    if (!chart) {
        initChart();
    } else {
        chart.update();
    }
    
    // Show success message
    alert('Product tracking initiated! Showing sample data.');
});

// Remove chart initialization on page load
// window.addEventListener('DOMContentLoaded', initChart);
