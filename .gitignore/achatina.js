const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Achatina`,
            thumbnail: {
                url: "https://www.dododex.com/media/creature/achatina.png"
            },
            fields: [
                {
                    name: 'Tameable ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Nourriture :',
                    value: "Gâteau aux légumes sucrés"
                },
                {
                    name: 'Quantité :',
                    value: "6"
                },
                {
                    name: 'Narcoberries :',
                    value: "22"
                },
                {
                    name: 'Temps du Taming :',
                    value: "13 Minutes"
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
                    value: "Ptéranodon, Griffon, Argentavis, Quetzal, Wivern, Mégalosaurus, Karkinos, Tusoteuthis, Kaprosuchus, Gigantopithecus."
                }
            ],
            footer: {
                text: `Informations d'un spécimen de niveau 1`
            }
        }
    });
};

module.exports.help = {
    name: 'achatina'
};