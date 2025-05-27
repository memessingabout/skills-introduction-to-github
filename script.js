document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar ul');
    
    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Initialize Chart.js
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    const weeklyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Income',
                    data: [1200, 900, 750, 1100, 950, 600, 400],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Expenses',
                    data: [450, 300, 400, 350, 500, 250, 200],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Savings',
                    data: [750, 600, 350, 750, 450, 350, 200],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            }
        }
    });

    // Button click handlers
    document.getElementById('addTrip').addEventListener('click', function() {
        alert('Add Trip functionality would go here');
    });

    document.getElementById('addExpense').addEventListener('click', function() {
        alert('Add Expense functionality would go here');
    });

    document.getElementById('settings').addEventListener('click', function() {
        alert('Settings functionality would go here');
    });

    document.getElementById('reports').addEventListener('click', function() {
        alert('Reports functionality would go here');
    });

    // Close navbar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            if (!navbar.contains(e.target) && e.target !== navToggle) {
                navbar.classList.remove('show');
            }
        }
    });
});