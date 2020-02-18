const Discord = require('Discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner l'utilisateur voulu !");
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("Désolé, je n'ai pas trouvé l'utilisateur demandé.");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Désolé ${message.author.username}, je n'ai pas la permissions de faire cela.`);

    kick.kick().then(member => {

        message.channel.send(`${member.user.username} a été kick par ${message.author.username}`);
        message.mention.users.first().send(`Vous avez été kick du serveur **${message.guild.name}** par *${message.author.username}*`).catch(console.error);
    });
};

module.exports.help = {
    name: "kick"
};