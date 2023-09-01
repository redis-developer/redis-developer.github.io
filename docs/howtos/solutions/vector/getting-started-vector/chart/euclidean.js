/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const ctx = document.getElementById('productChartEuclidean').getContext('2d');

function euclideanDistance(point1, point2) {
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2),
  );
}

const distance = euclideanDistance(product1Point, product2Point);

const scatterChart = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'Products',
        data: dataWithAttributes,
        pointBackgroundColor: ['black', 'red', 'bisque'],
        pointRadius: 5,
      },
      {
        label: `Euclidean Distance: ${distance.toFixed(2)}`,
        data: [product1Point, product2Point],
        showLine: true,
        fill: false,
        borderColor: 'green',
        pointRadius: 0,
        lineTension: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Euclidean Distance between Product-1 and Product-2`,
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Price ($)',
        },
        ticks: {
          beginAtZero: true,
        },
        min: 0, // Ensure it starts from 0
      },
      y: {
        title: {
          display: true,
          text: 'Quality (1-10)',
        },
        ticks: {
          beginAtZero: true,
        },
        min: 0, // Ensure it starts from 0
      },
    },
    tooltips: {
      callbacks: {
        title: function (tooltipItem, data) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return data.datasets[0].data[tooltipItem[0].index].label;
        },
      },
    },
  },
});
