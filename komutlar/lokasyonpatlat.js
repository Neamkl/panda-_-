const Discord = require('discord.js');

const cevaplar = [
    ":bomb: Sonuçlara Göre **__35,5000__** Kişinin Yaralı olduğu gözüküyor NOT: **__Komut Tamamen Eğlence Amaçlıdır Ve Random (Rastgele Gönderiliyor)__**",
	":bomb: Sonuçlara Göre **__600,5000__** Kişinin Yaralı olduğu gözüküyor NOT: **__Komut Tamamen Eğlence Amaçlıdır Ve Random (Rastgele Gönderiliyor)__**",
	":bomb: Sonuçlara Göre **__65,2005__** Kişinin Yaralı olduğu gözüküyor NOT: **__Komut Tamamen Eğlence Amaçlıdır Ve Random (Rastgele Gönderiliyor)__**",
    ":bomb: Sonuçlara Göre **__20 Kişinin__** Yaralı olduğu gözüküyor  NOT: **__Komut Tamamen Eğlence Amaçlıdır Ve Random (Rastgele Gönderiliyor)__**",
    ":bomb: Sonuçlara Göre **__25,3000__** Kişinin Yaralı olduğu gözüküyor NOT: **__Komut Tamamen Eğlence Amaçlıdır Ve Random (Rastgele Gönderiliyor)__**"

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
  name: 'lokasyonpatlat', 
  description: 'İstediğiniz Bir Yeri Patlatır',
  usage: 'lokasyonpatlat'
};