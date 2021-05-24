
var india_data = [["Brunei Darussalam", "Cambodia", "Indonesia", "Lao People's Democratic Republic", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Viet Nam"], [[365, 370, 374, 379, 383, 388, 394, 399, 405, 411], [13270, 13474, 13676, 13880, 14090, 14308, 14537, 14776, 15022, 15270], [226712, 229838, 232989, 236159, 239340, 242524, 245707, 248883, 252032, 255131], [5754, 5849, 5949, 6052, 6152, 6246, 6333, 6415, 6494, 6576], [25659, 26143, 26625, 27111, 27605, 28112, 28635, 29170, 29706, 30228], [48482, 48846, 49171, 49479, 49800, 50155, 50553, 50986, 51448, 51924], [86274, 87809, 89293, 90751, 92220, 93726, 95277, 96866, 98481, 100102], [4491, 4611, 4732, 4851, 4965, 5074, 5176, 5270, 5360, 5448], [65425, 65824, 66195, 66545, 66881, 67208, 67530, 67843, 68143, 68416], [84308, 85094, 85889, 86707, 87565, 88472, 89436, 90451, 91497, 92544]]]


var countries = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

var data = [{
    name: 'Tokyo',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

}, {
    name: 'New York',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

}, {
    name: 'London',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

}, {
    name: 'Berlin',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

}]



$(document).ready( function() {
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
        series: data
    });
});