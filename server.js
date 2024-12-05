const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Demo data, replace with data from your backend
const chartData = [
  { label: '08/10', value: 1, name: 'Governance' },
  { label: '05/10', value: 2, name: 'Communication' },
  { label: '03/10', value: 3, name: 'Education' },
  { label: '01/10', value: 4, name: 'Assets' },
  { label: '01/10', value: 5, name: 'Structures' },
  { label: '05/10', value: 6, name: 'Advisors' },
  { label: '06/10', value: 7, name: 'Vision' },
  { label: '03/10', value: 8, name: 'Health' },
  { label: '04/10', value: 9, name: 'Sustainable Philanthropy' },
  { label: '07/10', value: 10, name: 'Documentation' },
];

app.use(express.json());
app.use(cors());

app.get('/api/chart-data', (req, res) => {
  res.json(chartData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});