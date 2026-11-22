# Inubit Control Room

Konfigurierbares NodeJS/Express-Layout für das Monitoring einer Inubit Process Engine. Diese erste Ausbaustufe ist bewusst eine reine UI-Vorschau: Es gibt noch keine Live-Requests an Inubit. Die Karten zeigen exemplarische Daten und bilden die geplanten API-Zonen ab.

## Start

```powershell
npm install
npm start
```

Danach ist das Dashboard unter `http://localhost:3000` erreichbar.

## Konfiguration

Die Laufzeitkonfiguration erfolgt über Umgebungsvariablen. `.env.example` enthält die vorgesehenen Werte:

- `PORT`: lokaler Express-Port
- `INUBIT_INSTANCE_NAME`: Anzeigename der Instanz
- `INUBIT_BASE_URL`: Basis-URL, später z. B. `https://host:port/ibis/rest`
- `REFRESH_INTERVAL_SECONDS`: geplanter Aktualisierungsintervall

## Relevante API-Flächen für die nächste Phase

- `GET /ready`: Readiness-Status, ohne Authentifizierung
- `GET /metrics`: Maintenance, Memory, Blocking Queue und lizenzierte Threads
- `GET /log/{logName}`: Monitoring-Logs, z. B. `systemLog`, `queueLog`, `processLog`, `connectionLog`
- `GET /system`: technische Serverinformationen

Die aufgerufene Inubit-Dokumentation weist außerdem darauf hin, dass je nach Inubit-Version und Endpoint der `Accept`-Header bzw. die JSON-Unterstützung beachtet werden muss.
