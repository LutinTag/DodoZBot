const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Ptéranodon`,
            thumbnail: {
                url: "https://www.dododex.com/media/creature/pteranodon.png"
            },
            fields: [
                {
                    name: 'Tameable ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Nourriture :',
                    value: "Viande *(Raw Meat)*"
                },
                {
                    name: 'Quantité :',
                    value: "13"
                },
                {
                    name: 'Narcoberries :',
                    value: "56"
                },
                {
                    name: 'Temps du Taming :',
                    value: "32 Minutes"
                },
                {
                    name: 'Attrapable avec des bolas ?',
                    value: ":white_check_mark: "
                },
                {
                    name: 'Transportable par un Ptéranodon ?',
                    value: ":x: "
                },
                {
                    name: 'Transportable par :',
                    value: "Megalosaurus, Karkinos, Procoptodon."
                }
            ],
            footer: {
                text: `Informations d'un spécimen de niveau 1`
            }
        }
    });
};

module.exports.help = {
    name: 'pteranodon'
};