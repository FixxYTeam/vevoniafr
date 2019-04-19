const Discord = require("discord.js");

module.exports.run = (client, message, args) => {        
        
        var aide_embed = new Discord.RichEmbed()
   
            .setTitle("Liste des commandes !")
            .setThumbnail(message.author.avatarURL)
            .addField("v!modfr", "affiche les commandes de modération")
            .addField("v!funfr", "affiche les commandes fun")
            .setColor('0xFF8000')
            .setFooter("VeVonia / page aide FR")
            .setTimestamp()
            message.channel.send(aide_embed)
   
       
          
};

module.exports.help = {
    name: 'help'
};