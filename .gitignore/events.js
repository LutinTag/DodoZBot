const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Evenements`,
            thumbnail: {
                url: "https://i.ytimg.com/vi/JVdTTMCGQU0/maxresdefault.jpg"
            },
            fields: [
                {
                    name: 'Nom de l\'Evenement en cours :',
                    value: "**Love Evolved**"
                },
                {
                    name: 'Début de l\'evenement :',
                    value: "Mardi 11 Février 2020"
                },
                {
                    name: 'Fin de l\'evenement :',
                    value: "Mardi 18 Février 2020"
                },
            ],
            footer: {
                text: `Evenements ARK`
            }
        }
    });
};

module.exports.help = {
    name: 'events'
};