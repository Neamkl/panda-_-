const Discord = require('discord.js');

const cevaplar = [
    
	
	"Ühü Ühü https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
	"Maaaaa :( https://media.giphy.com/media/Ph8OWoJA2M3eM/giphy.gif",
	"lelelelelelleleleleelel :( https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
	"https://media.giphy.com/media/3oeSANreHGL0RU7wm4/giphy.gif",
	"Ağlatmak Günahtır Mk Malı Günah Bana Yazılıyo"
	
]
exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: h!8ball <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'ağlat', 
  description: 'Etiketlediğiniz Kişiyi Ağlatır',
  usage: 'ağlat'
};