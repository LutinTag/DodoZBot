const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Dodo`,
            thumbnail: {
                url: "https://www.dododex.com/media/creature/dodo.png"
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
                    value: "12"
                },
                {
                    name: 'Narcoberries :',
                    value: "0"
                },
                {
                    name: 'Temps du Taming :',
                    value: "2 Minutes"
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
                    value: "Tapejara, Ptéranodon, Griffon, Argentavis, Quetzal, Tusoteuthis, Wivern, Megalosaurus, Karkinos, Procoptodon, Kaprosuchus."
                }
            ],
            footer: {
                text: `Informations d'un spécimen de niveau 1`
            }
        }
    });
};

module.exports.help = {
    name: 'dodo'
};