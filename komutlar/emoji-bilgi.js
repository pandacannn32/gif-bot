const Discord = require('discord.js');
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji İsmi Belirtmeniz Gerekiyor.")
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .setTimestamp()
    message.channel.send(embed)
}
//【Maiar】Code★Botlist★Uptime AİTDİR!!!
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emoji-bilgi'],
    permLevel: 0
}//【Maiar】Code★Botlist★Uptime AİTDİR!!!

exports.help = {
    name: 'emojibilgi',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}