const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    const membre = message.mentions.members.first() || message.member;
    // if (!membre) { return message.channel.send('Veuillez mentionner un utilisateur !'); }

    message.channel.send("Voici les commandes pour **ARK** disponibles avec le bot *DodoZBot*  :");
    message.channel.send("1. **/{dino}** : Vous montre toutes les informations poru tame le dino en question. *Utilisation :*  **_/{dino}");
    message.channel.send("2. **/craft** : Vous montre le craft de l'objet en question. *Utilisation :* _**/craft {objet}**_");
    message.channel.send("3. **/dinos** : Vous montre les dinos disponibles avec le bot *(/{dino})*.");
    message.channel.send("4. **/events** : Vous montre le ou les events en cours sur le jeu.");
    message.channel.send("5. **/maj** : Vous montre la ou les dernières mises à jours de ARK.");
    message.channel.send("*De nouvelles commandes arriveront bientot !*");

};

module.exports.help = {
    name: 'help'
};