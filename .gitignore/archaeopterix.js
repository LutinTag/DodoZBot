const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Archaeoptéryx`,
            thumbnail: {
                url: "https://www.dododex.com/media/creature/archaeopteryx.png"
            },
            fields: [
                {
                    name: 'Tameable ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Nourriture :',
                    value: "Chitine"
                },
                {
                    name: 'Quantité:',
                    value: "6"
                },
                {
                    name: 'Narcoberries :',
                    value: "7"
                },
                {
                    name: 'Temps du Taming :',
                    value: "3 Minutes"
                },
                {
                    name: 'Attrapable avec des bolas ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Transportable par un Ptéranodon ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Transportable par :',
                    value: "Tapejara, Ptéranodon, Griffon, Argentavis, Quetzal, Tusoteuthis, Wivern, Mégalosaurus, Karkinos, Tusoteuthis, Kaprosuchus, Procoptodon, Gigantopithecus"
                }
            ],
            footer: {
                text: `Informations d'un spécimen de niveau 1`
            }
        }
    });
};

module.exports.help = {
    name: 'archaeopteryx'
};