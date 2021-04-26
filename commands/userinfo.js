const Discord = require('discord.js');

module.exports = {
  name: 'userinfo',
  aliases : ['ui', 'whois'],
  description: 'Informations sur l\'utilisateur mentionné ou vous-même.',
  
  async execute(message, args) {
    let member = message.mentions.users.first();
    if(!member) member = message.author;
    
    let avatar = member.displayAvatarURL();
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} : Qui suis-je ?`)
      .setThumbnail(avatar)
      .setDescription(`Client ID : ${member.id}`)
      .addField('**Compte crée le**', member.createdTimestamp)
      .addField('**Statut**', member.presence)
    
    message.channel.send(embed)
  }
}
