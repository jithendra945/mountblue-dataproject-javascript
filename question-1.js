/*
fetch('http://0.0.0.0:8000/indian-population.json', { mode: 'cors',  credentials: 'same-origin', })
.then(response => {
   return response;
})
.then(data => console.log(data));
*/
var india_data = [["2005", 1144118], ["2006", 1161977], ["2007", 1179681], ["2008", 1197146], ["2009", 1214270], ["2010", 1230980], ["2011", 1247236], ["2012", 1263065], ["2013", 1278562], ["2014", 1293859], ["2015", 1309053]];


$(document).ready( function() {
    Highcharts.chart('highchart-graph', {
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
            pointFormat: 'Population in 2017: <b>{point.y}</b>'
        },
        series: [{
            name: 'Population',
            data: india_data,
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
});