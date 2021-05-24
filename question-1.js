
url_local = 'http://0.0.0.0:8000/datasets/json/indian-population.json'
url_heroku = 'https://jithendra-project-javascript.herokuapp.com/datasets/json/indian-population.json';

$(document).ready(function () {
    fetch(url_heroku).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((responseJson) => {
            // Do something with the response

            Highcharts.chart('highchart-graph-1', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Indian population over years'
                },
                subtitle: {
                    text: 'Source: <a href="https://datahub.io/core/population-growth-estimates-and-projections/r/population-estimates.csv">World Population</a>'
                },
                xAxis: {
                    title: {
                        text: 'Years'
                    },
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Population : <b>{point.y}</b>'
                },
                series: [{
                    name: 'Population',
                    data: responseJson,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
        })
        .catch((error) => {
            console.log(error)
        });
});