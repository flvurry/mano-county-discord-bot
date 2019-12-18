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
    if (message.content === "hi") {
        message.channel.send("Hello!")
    }
    if (message.content === "flvurry") {
        message.channel.send("flvurry is the coolest person ever!!! :me:");
    }
    if (message.content === "ping") {
        message.reply("Pong!");
    }

bot.login(process.env.BOT_TOKEN);
