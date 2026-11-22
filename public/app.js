const config = window.INUBIT_CONFIG || {};
document.getElementById('instance-name').textContent = config.instanceName || 'Inubit Instanz';

// Layout-only phase: no calls are made to the configured Inubit endpoint yet.
// The next phase can use config.baseUrl and config.refreshIntervalSeconds here.
