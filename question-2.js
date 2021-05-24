

var asean_data_2014 = [["Brunei", 411], ["Cambodia", 15270], ["Indonesia", 255131], ["Laos", 6576], ["Malaysia", 30228], ["Myanmar", 51924], ["Philippines", 100102], ["Singapore", 5448], ["Thailand", 68416], ["Viet Nam", 92544]];

$(document).ready( function() {
    Highcharts.chart('highchart-graph-2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Population of ASEAN countries for the year 2014'
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
            pointFormat: 'Population in 2014: <b>{point.y}</b>'
        },
        series: [{
            name: 'Population',
            data: asean_data_2014,
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'center',
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