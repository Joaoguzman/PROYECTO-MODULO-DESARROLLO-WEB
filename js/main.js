//Hemograma
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [{
        label: "Hemograma",
        data: [0, 59, 75, 20, 20, 55, 40],
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'bar',
    data: speedData,
    options: chartOptions
});

//Perfil lipídico


var densityCanvas = document.getElementById("graph_lipidico");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
    label: 'Valores lipídicos1',
    data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
    yAxisID: "y-axis-density"
};

var gravityData = {
    label: 'Valores lipídicos2',
    data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderWidth: 0,
    yAxisID: "y-axis-gravity"
};

var planetData = {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    datasets: [densityData, gravityData]
};

var chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.6
        }],
        yAxes: [{
            id: "y-axis-density"
        }, {
            id: "y-axis-gravity"
        }]
    }
};

var barChart = new Chart(densityCanvas, {
    type: 'bar',
    data: planetData,
    options: chartOptions
});



//Perfil bioquimico
var ctx = document.getElementById("graph_bioquimico");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Group 1", "Group 2", "Group 3"],
        datasets: [{
            label: 'Groups',
            data: [12, 19, 3]
        }]
    }
});
//Presion arterial

var ctx = document.getElementById("graph_presion");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"],
        datasets: [{
            label: 'Presión arterial',
            data: [12, 19, 5, 14, 10]
        }]
    }
});