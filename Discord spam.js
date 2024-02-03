const delay = ms => new Promise(res => setTimeout(res, ms));


document.querySelector('.toolbar-3_r2xA > div:nth-child(1)').click();
await delay(1000);
document.querySelector('.connection-3k9QeF > div:nth-child(2) > button:nth-child(1)').click();