let chart;

function initChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 15', 'Feb 1', 'Feb 15', 'Mar 1', 'Mar 15', 'Apr 1', 'Apr 15', 'May 1', 'May 9'],
            datasets: [{
                label: 'Price History (₹)',
                data: [9999, 9999, 11111, 11990, 10399, 12900, 13900, 10900, 11890, 11990],
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

function animatePriceChange(element, newPrice) {
    element.classList.add('highlight');
    let currentPrice = parseInt(element.textContent.replace(/[^\d]/g, '')) || 0;
    let targetPrice = parseInt(newPrice.replace(/[^\d]/g, '')) || 0;
    let step = (targetPrice - currentPrice) / 20;
    let count = 0;

    function updatePrice() {
        if (count < 20) {
            currentPrice += step;
            element.textContent = '₹' + Math.round(currentPrice);
            count++;
            requestAnimationFrame(updatePrice);
        } else {
            element.textContent = newPrice;
            element.classList.remove('highlight');
        }
    }
    updatePrice();
}

function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

document.getElementById('hero-cta').addEventListener('click', function() {
    document.querySelector('.input-section').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('track-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = this.querySelector('input');

    alert('Showing sample product for demo purposes.');

    showLoadingSpinner();

    setTimeout(() => {
        hideLoadingSpinner();

        document.querySelector('.product-name').textContent = 'LG Ultragear IPS Gaming Monitor 60 cm (24 Inches), FHD 1920 x 1080, 1ms, 144Hz, AMD FreeSync Compatible, HDR 10, sRGB 99% (Typ.), DP, HDMI, Height, Tilt & Pivot Adjust Stand, 24GN65R (Black)';
        
        const priceElement = document.querySelector('.product-price');
        animatePriceChange(priceElement, '₹11990');
        
        document.querySelector('.product-source').textContent = 'Source: Amazon';
        const productImage = document.querySelector('.product-image');
        productImage.src = 'https://m.media-amazon.com/images/I/715tAlRV1oL._SL1500_.jpg';

        const productSection = document.querySelector('.product-section');
        const chartSection = document.querySelector('.chart-section');
        productSection.style.display = 'block';
        chartSection.style.display = 'block';

        setTimeout(() => {
            document.querySelector('.product-card').classList.add('visible');
            chartSection.classList.add('visible');
        }, 50);

        if (!chart) {
            initChart();
        } else {
            chart.update();
        }
    }, 1500);
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    alert(`Thank you for subscribing with ${emailInput.value}!`);
    emailInput.value = '';
});
