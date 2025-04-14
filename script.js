// Initialize chart with sample data
function initChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 15', 'Feb 1', 'Feb 15', 'Mar 15'],
            datasets: [{
                label: 'Price History (₹)',
                data: [1299, 1199, 1099, 999, 899],
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

// Form submission handler
document.getElementById('track-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = this.querySelector('input');
    
    // In a real implementation, this would call your backend API
    console.log('Tracking URL:', urlInput.value);
    
    // For demo purposes, we'll show sample data
    document.querySelector('.product-name').textContent = 'Sample Product';
    document.querySelector('.product-price').textContent = '₹899';
    document.querySelector('.product-source').textContent = 'Source: Amazon';
    document.querySelector('.product-image').src = 'https://via.placeholder.com/150';
    
    // Show success message
    alert('Product tracking initiated! Showing sample data.');
});

// Initialize the chart when page loads
window.addEventListener('DOMContentLoaded', initChart);
