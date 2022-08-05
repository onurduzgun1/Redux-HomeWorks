import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from 'react-redux';

function Chart() {
  const covidData = useSelector((state) => state.covid.covidData);
  const covidDaily = useSelector((state) => state.covid.covidDaily);
  const country = useSelector((state) => state.covid.country);

  return (
    <>
      {covidData && country.length > 0 && (
        <Bar
          data={{
            labels: ['Infected', 'Deaths', 'Active'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['#3a86ff', '#d90429', '#ffbe0b'],
                data: [covidData.confirmed.value, covidData.deaths.value, covidData.confirmed.value - covidData.deaths.value],
              },
            ],
          }}
        />
      )}
      {covidDaily && country.length === 0 && (
        <Line
          data={{
            labels: covidDaily.map((item) => item.reportDate),
            datasets: [
              {
                label: 'Infected',
                data: covidDaily.map((item) => item.totalConfirmed),
                backgroundColor: '#3a86ff',
              },
              {
                label: 'Deaths',
                data: covidDaily.map((item) => item.deaths.total),
                backgroundColor: '#d90429',
              },
            ],
          }}
        />
      )}
    </>
  );
}

export default Chart;