const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Doedicurus`,
            thumbnail: {
                url: "https://www.dododex.com/media/creature/doedicurus.png"
            },
            fields: [
                {
                    name: 'Tameable ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Nourriture :',
                    value: "Baies"
                },
                {
                    name: 'Quantité :',
                    value: "104"
                },
                {
                    name: 'Narcoberries :',
                    value: "207"
                },
                {
                    name: 'Temps du Taming :',
                    value: "1 heure et 2 minutes"
                },
                {
                    name: 'Attrapable avec des bolas ?',
                    value: ":x: "
                },
                {
                    name: 'Transportable par un Ptéranodon ?',
                    value: ":x: "
                },
                {
                    name: 'Transportable par :',
                    value: "Argentavis, Quetzal, Tusoteuthis, Wivern, Karkinos."
                }
            ],
            footer: {
                text: `Informations d'un spécimen de niveau 1`
            }
        }
    });
};

module.exports.help = {
    name: 'doedicurus'
};