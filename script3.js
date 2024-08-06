document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1izdThShf0zbq-NaQAwod4W2gjk3LVsZQ'; // Direct download link
    link.download = 'RESUME.pdf'; // Desired file name
    link.click();
});

document.addEventListener('DOMContentLoaded', () => {
    const ctxCSS = document.getElementById('cssChart').getContext('2d');
    const ctxHTML = document.getElementById('htmlChart').getContext('2d');
    const ctxJS = document.getElementById('jsChart').getContext('2d');

    const dataCSS = {
        datasets: [{
            data: [90, 10],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['HTML', '']
    };

    const dataHTML = {
        datasets: [{
            data: [80, 20],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['CSS', '']
    };

    const dataJS = {
        datasets: [{
            data: [50, 50],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['JavaScript', '']
    };

    new Chart(ctxCSS, {
        type: 'pie',
        data: dataCSS,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxHTML, {
        type: 'pie',
        data: dataHTML,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });


    new Chart(ctxJS, {
        type: 'pie',
        data: dataJS,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const ctxPython = document.getElementById('pythonChart').getContext('2d');
    const ctxJava = document.getElementById('javaChart').getContext('2d');
    const ctxDjango = document.getElementById('djangoChart').getContext('2d');
    const ctxWindows = document.getElementById('windowsChart').getContext('2d');
    const ctxLinux = document.getElementById('linuxChart').getContext('2d');
    const ctxSql = document.getElementById('sqlChart').getContext('2d');

    const dataPython = {
        datasets: [{
            data: [90, 10],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['Python', '']
    };

    const dataJava = {
        datasets: [{
            data: [80, 20],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['Java', '']
    };

    const dataSql = {
        datasets: [{
            data: [55, 35],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['SQL', '']
    };

    const dataDjango = {
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['Django', '']
    };

    const dataWindows = {
        datasets: [{
            data: [75, 25],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['Windows', '']
    };

    const dataLinux = {
        datasets: [{
            data: [40, 60],
            backgroundColor: ['#000080', '#FFDB58']
        }],
        labels: ['Linux', '']
    };


    new Chart(ctxPython, {
        type: 'pie',
        data: dataPython,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxJava, {
        type: 'pie',
        data: dataJava,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxSql, {
        type: 'pie',
        data: dataSql,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxDjango, {
        type: 'pie',
        data: dataDjango,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxWindows, {
        type: 'pie',
        data: dataWindows,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });

    new Chart(ctxLinux, {
        type: 'pie',
        data: dataLinux,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
});

document.querySelector('input[name="phone"]').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
