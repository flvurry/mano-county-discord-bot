const discord = require("discord.js");
const bot = new discord.Client();
const PREFIX = "!";
const token = 'NjQ1MTAwNTI3OTEwMTI1NTg4.XfLB0w.E7JKLt4SAhcDoIrt4Syhs2kMIM4';
const ms = require('ms');

var version = "1.0.1";

const ytdl = require("ytdl-core");

var server = {};

bot.on("ready", async () => {
    console.log("[SUCESS] | Mano County Bot online!")
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Mano County',
            type: "STREAMING",
            url: "https://www.twitch.tv/ROBLOX"
        }
    });
    
});
bot.on("message", message => {
    if (message.content === "o7") {
        message.channel.send("o7")
    }

bot.login(process.env.BOT_TOKEN);
