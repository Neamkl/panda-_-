const Discord = require('discord.js');

const cevaplar = [
    
	
	"ananı teflon tavaya oturtup götünü kızartıp portakalsız orospu çocuğu yaparım seni götünü siktiğimin evladı **__Bu Komut Eğlence İçindir Ciddiye Almayınız__**",
	"senin anneni eyfel kulesine çıkarırım orda aşağı düşme tehlikesi içinde sikerim piç. **__Komut Tamamen Eğlence Amaçlıdır Ciddiye Almayınız!__**",
	"Seni Düdüklü Pencereye Sokar Düdük Olan Kardeşlerini Ve Seni Sike Sike Patlatırım **__Bu Komut Eğlence Amaçlıdır Ciddiye Almayınız!__**",
	"Kardeşim Küfür Kötü Bişi O Sana Ne Yaptıysa Özür Dilesin. Benide Günaha Sokacak Orospu Kertenkelesi",
	"Ananı Irzını Gelmişini Geçmişini Sikiyim",
	
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
  name: 'söv', 
  description: 'Söver -_-',
  usage: 'söv'
};