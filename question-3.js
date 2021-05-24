
var saarc_data =[["2005", 1512666], ["2006", 1536940], ["2007", 1560814], ["2008", 1584354], ["2009", 1607661], ["2010", 1630804], ["2011", 1653796], ["2012", 1676610], ["2013", 1699249], ["2014", 1721698], ["2015", 1743944]];

$(document).ready( function() {
    Highcharts.chart('highchart-graph-3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'TOTAL population of SAARC countries'
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
            data: saarc_data,
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