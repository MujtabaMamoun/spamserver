const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523211709914284035")
setInterval(function() {
channel.send(`**Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_** **Ez By SuliMAN009 / xRq_**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
