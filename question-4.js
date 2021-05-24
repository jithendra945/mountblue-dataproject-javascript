
function to_countries(country_population) {
    var data = JSON.parse(JSON.stringify(country_population));
    keys = Object.keys(data);
    for (i = 0; i < keys.length; i++) {
        if (keys[i] == "Brunei Darussalam") {
            keys[i] = "Brunei"
        }
        if (keys[i] == "Lao People's Democratic Republic") {
            keys[i] = "Laos"
        }
    }
    return keys;
}

function to_population(country_population) {
    var data = JSON.parse(JSON.stringify(country_population));
    keys = Object.keys(data);
    values = Object.values(data);
    var converted_data = [];
    for (i = 0; i < keys.length; i++) {
        converted_data.push({ name: keys[i], data: values[i] });
    }
    return converted_data;
}


total_asean_url_local = 'http://0.0.0.0:8000/datasets/json/total-asean-population.json'
total_asean_url_heroku = 'https://jithendra-project-javascript.herokuapp.com/datasets/json/total-asean-population.json';


$(document).ready(function () {
    fetch(total_asean_url_heroku).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
        .then((total_asean_responseJson) => {
            countries = to_countries(total_asean_responseJson);
            population = to_population(total_asean_responseJson);
            Highcharts.chart('highchart-graph-4', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: countries,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: population
            });
        })
        .catch((error) => {
            console.log(error)
        });
});
