const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

     message.channel.send(`:timer: | İnternet Hızınız Yükleniyor, lütfen bekleyin.`).then(m => m.delete(3000));
     message.channel.send(`:timer: | Pinginiz Hesaplanıyor, lütfen bekleyin.`).then(m => m.delete(9000));
     message.channel.send(`:timer: | Host Aranıyor, lütfen bekleyin.`).then(m => m.delete(9000));
     message.channel.send(`:timer: | İşletim Sistemi Hesaplanıyor, lütfen bekleyin.`).then(m => m.delete(12000));
  
  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor('#000000')
.setTitle('**İnternet Bilgilerin**')
.addField(`:arrow_down: İndirme: **${data.speeds.download} MB**      :arrow_up: Yükleme: **${data.speeds.upload} MB **`)
.addField(` :round_pushpin: Ping: **${client.ping}**`)
.addField(`:level_slider: İşletim Sistemi: **${osType}** \n \n:desktop: İnternet Sağlayıcısı: **${data.client.isp}** \n \n:file_cabinet: Host: **${data.server.host}**`)

  message.channel.send(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hız"],
  permLevel: 0,
  kategori: "sahip"
};

exports.help = {
  name: 'hız-test',
  description: 'internet hız testi yapar!',
  usage: 'hız'
};
 