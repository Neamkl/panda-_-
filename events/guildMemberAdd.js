module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!');
    member.guild.defaultChannel.send('Hoşgeldin Sunucuya '+username+'');
};













exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['no'],
  permLevel: 0 
};
