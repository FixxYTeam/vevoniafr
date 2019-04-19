const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

"use strict";

var banni = [
   "connard",
   "pute",
   "putain",
   "tg",
   "nique",
   "con",
   "conne",
   "salope",
   "merde",
   //"ect.."
];

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login('NTUxMzY0OTg5MjEwODUzMzc2.XKzgfg.1YT3BiqyvCnp619GumuQBaIPDrc');

client.on("message", (msg) => {
    if (banni.some(x => msg.content.toLowerCase().split(/\s+/).includes(x))) {
      return msg.channel.send("Attention à ton langage !"); 
    }
}); 
