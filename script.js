var options = {
    series: [{
            name: "NO. of volunteer added",
            data: [18, 20, 30, 44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: " Funds",
            data: [85, 79, 85, 76, 85, 92, 98, 87, 87, 91, 99, 94],
        },

    ],
    chart: {
        type: "bar",
        height: 250, // make this 250
        sparkline: {
            enabled: true, // make this true
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
        title: {
            text: "",
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val + "%";
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();