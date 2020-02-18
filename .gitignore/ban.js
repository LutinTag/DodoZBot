const Discord = require('Discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner l'utilisateur voulu !");
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send("Désolé, je n'ai pas trouvé l'utilisateur demandé.");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Désolé ${message.author.username}, je n'ai pas la permissions de faire cela.`);

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} a été banni par ${message.author.username}`);
        message.mention.users.first().send(`Vous avez été banni du serveur **${message.guild.name}** par *${message.author.username}*`).catch(console.error);
    });
};

module.exports.help = {
    name: "ban"
};