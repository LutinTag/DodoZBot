const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: 'ID :',
                    value: membre.id 
                },
                {
                    name: 'Compte Discord crée le :',
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: 'Joue actuellemnt à :',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu'
                },
                {
                    name: 'A rejoin le serveur discord **The DodoZ** le :',
                    value: moment.utc(membre.joinedAt).format('LL')
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: 'infos'
};