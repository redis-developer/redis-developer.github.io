/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

const ctxCosine = document
  .getElementById('productChartCosine')
  .getContext('2d');

function cosineSimilarity(point1, point2) {
  let dotProduct = point1.x * point2.x + point1.y * point2.y;
  let magnitudePoint1 = Math.sqrt(
    Math.pow(point1.x, 2) + Math.pow(point1.y, 2),
  );
  let magnitudePoint2 = Math.sqrt(
    Math.pow(point2.x, 2) + Math.pow(point2.y, 2),
  );
  return dotProduct / (magnitudePoint1 * magnitudePoint2);
}

const cosineSim = cosineSimilarity(product1Point, product2Point);

const scatterChartCosine = new Chart(ctxCosine, {
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
        label: 'Vector for Product-1',
        data: [{ x: 0, y: 0 }, product1Point],
        showLine: true,
        fill: false,
        borderColor: 'black',
        pointRadius: [0, 5],
        lineTension: 0,
      },
      {
        label: 'Vector for Product-2',
        data: [{ x: 0, y: 0 }, product2Point],
        showLine: true,
        fill: false,
        borderColor: 'red',
        pointRadius: [0, 5],
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
        text: `Cosine Similarity between Product-1 and Product-2 is ${cosineSim}`,
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
          return data.datasets[0].data[tooltipItem[0].index].label;
        },
      },
    },
  },
});
