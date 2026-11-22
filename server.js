const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/config.js', (_req, res) => {
  const config = {
    instanceName: process.env.INUBIT_INSTANCE_NAME || 'Produktion · Berlin',
    baseUrl: process.env.INUBIT_BASE_URL || 'https://inubit.example.local:8080/ibis/rest',
    refreshIntervalSeconds: Number(process.env.REFRESH_INTERVAL_SECONDS || 60),
    demoMode: true
  };

  res.type('application/javascript').send(`window.INUBIT_CONFIG = ${JSON.stringify(config)};`);
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Inubit dashboard layout läuft auf http://localhost:${port}`);
});
