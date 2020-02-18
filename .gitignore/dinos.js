const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send({
        embed: {
            color: 0x00b9a2,
            title: `Liste des dinosaures actuellement disponibles avec le bot.`,
            thumbnail: {
                url: "https://images-ext-1.discordapp.net/external/mUx_gVLvzfeLUK9JhhNf4M2onFvW5udggYqOAFQWSlc/https/cdn.probot.io/2cLZVK2ozk.jpg"
            },
            fields: [
                {
                    name: '- Achatina',
                    value: "*/achatina*"
                },
                {
                    name: '- Allosaure',
                    value: "*/allosaure*"
                },
                {
                    name: '- Ammonite',
                    value: "*/ammonite*"
                },
                {
                    name: '- Angler',
                    value: "*/angler*"
                },
                {
                    name: '- Ankylosaure',
                    value: "*/ankylosaure*"
                },
                {
                    name: '- Araneo',
                    value: "*/araneao*"
                },
                {
                    name: '- Archaeopterix',
                    value: "*/archaeopterix*"
                },
                {
                    name: '- Argentavis',
                    value: "*/argentavis*"
                },
                {
                    name: '- Arthropluera',
                    value: "*/arthropluera*"
                },
                {
                    name: '- Brontosaure',
                    value: "*/brontosaure*"
                },
                {
                    name: '- Diplodocus',
                    value: "*/diplodocus*"
                },
                {
                    name: '- Dodo',
                    value: "*/dodo*"
                },
                {
                    name: '- Doedicurus',
                    value: "*/doedicurus*"
                },
                {
                    name: '- Giganotosaure',
                    value: "*/giganotosaure*"
                },
                {
                    name: '- Mégalodon',
                    value: "*/megalodon*"
                },
                {
                    name: '- Mosasaure',
                    value: "*/mosasaure*"
                },
                {
                    name: '- Ptéranodon',
                    value: "*/pteranodon*"
                },
                {
                    name: '- Quetzal',
                    value: "*/quetzal*"
                },
                {
                    name: '- Raptor',
                    value: "*/raptor*"
                },
                {
                    name: '- T-Rex',
                    value: "*/rex*"
                },
                {
                    name: '- Parasaure',
                    value: "*/parasaure*"
                },
                {
                    name: '- Tricératops',
                    value: "*/triceratops*"
                },



            ],
            footer: {
                text: `Dinosaures actuellement programmés`
            }
        }
    });
};

module.exports.help = {
    name: 'dinos'
};