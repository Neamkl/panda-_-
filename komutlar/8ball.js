const Discord = require('discord.js');

const cevaplar = [
    "31?",
	"iyiyim",
	"evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar konuşak",
    "ne bilim olm baane",
    "Telefonunu Ver Aşkım",
	"Gel Buluşalım",
	"Anlamıyomm",
	"Kimse",
	"Moruq Hüseyini Öldürekmi SaFIRTINANIN sevgilisine yavşıyo",
	"Polisi Ararım",
	"Layiklik Power",
	"Şuan Sevişiyom Bi Bırakın",
	"Kimsin Çabuk Söyle Yoksa Polisi Ararım!",
	"Pepe Ölemez Senin Gibiler Bakcaktı:(",
	"İyiyim Senden?",
	"Ben Bir Pandayım Kızıl Pandaları Öldürek",
	"Bana Tablet Al",
	"Hiç Sevgilin Oldumu",
	"Anne Süt Verrr",
	"Ben Bir Pandayımm",
	"Legend's Never Die Moruq",
	"Tam Bi mal",
	"Adamın Dibi",
	"Tam Bi Öküz",
	"Gel Lan Çumraya Kavga Edek",
	"Ara Beni Whatsappdan",
	"Ben Katilim",
	"Ben Slenderman",
	"Za xD",
	"h!8ball Komutu Çok Güzel Komut Yapımcımı Seviyorummmm"
]
exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirt. **Doğru Kullanım**: h!8ball <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: '8ball', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: '8ball <soru>'
};