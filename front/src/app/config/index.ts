declare var require: any;

export let CONFIG = require('./config.json');

if (CONFIG.useFake) {
    CONFIG.urls = CONFIG.fake.urls;
};

// export const CONFIG = config;
