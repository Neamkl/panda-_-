const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix; "h!"

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
	
	oynuyor1();
  return new Promise((resolve, reject) => {
	  
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



function oynuyor1() {//burayabirisimyaz2 yerine bi isim ver
    return new Promise(resolve => {
        setTimeout(() => {
          
            
client.user.setActivity(`h!yardım | Dev Güncelleme | h!davet | h!emojiyazı | Yeni İmaj !`, { type: 'STREAMING',url:'https://www.twitch.tv/salegendforty'});
//dögüsü yapılacak kodlama


            oynuyor2(); //buraya sıradaki functionun ismini yaz
        }, 5000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}








function oynuyor2() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!rol-ekle | h!rol-al`, { type: 'STREAMING',url:'https://www.twitch.tv/salegendforty'});
//dögüsü yapılacak kodlama

            oynuyor3(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 3000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}








function oynuyor3() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım | h!emojiyazı Aktif , h!stresçarkı Aktif , h!yazıtura Aktif , h!8ball Aktif!`, { type: 'STREAMING',url:'https://www.twitch.tv/salegendforty'});
//dögüsü yapılacak kodlama

            oynuyor4(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 5000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}








function oynuyor4() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`Yakında Güncelleme !`, { type: 'STREAMING',url:'https://www.twitch.tv/salegendforty'});
//dögüsü yapılacak kodlama

            oynuyor5(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 7000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}


function oynuyor5() {//burayabirisimyaz yerine Bir İsim Belirle
    return new Promise(resolve => {
        setTimeout(() => {
          
client.user.setActivity(`h!yardım | h!davet | +5 Komut !`, { type: 'STREAMING',url:'https://www.twitch.tv/salegendforty'});
//dögüsü yapılacak kodlama

            oynuyor6(); //buraya sıradaki functionun isini yaz (düngü oluşturcağın)
        }, 2000);  //buradaki sayı süredir 5000=5sn | 1000=1sn
      });
}




// Mustafa Eren'in Kodlaması [Başlangıç]
client.on(`ready`,() => {


	oynuyor1(); // burayı değiştir



	
	
	
	
	

});







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);