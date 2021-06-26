// @ts-nocheck
var rpc = require("discord-rpc");
const config = require('./config.json');
const client = new rpc.Client({ transport: 'ipc' });

rpc.register(config.AppID);

client.on('ready', () => {
    
    console.error(`• Bot start...`);
    console.info(`• Successfully connected to Discord!`);
    console.info(`• Profile successfully!`);
    
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.status,
            assets: {
                large_image: config.image,
                large_text: config.text
            },
            buttons: [
            {
              label: config.button1,
              url: config.url1
            },
            {
              label: config.button2,
              url: config.url2
            }]
        }
    })
})

client.login({clientId: config.AppID}).catch(console.error);
