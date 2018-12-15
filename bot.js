const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var prefix = "$"


client.login(process.env.token);

//help



   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "$help") {
               if(!message.channel.guild) return message.reply(':x:  **The orders are not in your الاوامر مو فى **');
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(` **

$move -> سحب عضو معين لرومك

$bc -> لأرسال رساله جماعيه لأعضاء السيرفر بشكل مطور

$clear -> لمسح الرسائل 

$avatar -> لعرض افتارك الشخصي 

 $ban -> حضر عضو من السيرفر
 
 $kick -> طرد عضو من السيرفر
 
 $mute -> اعضاء ميوت كتابي لعضو في السيرفر
 
 $unmute -> فك الميوت عن عضو في السيرفر
 
 $dac -> حذف جميع رومات السيرفر
 
 $dar -> حذف جميع رتب السيرفر
 
 $opr -> فتح المحادثة في الروم
 
 $deopr -> قفل المحادثة في الرةوم

 $role -> اعطاء رتبه لشخض معين
 
 $role humans -> اعطاء رتب للبشريين
 
 $role bots -> اعطاء رتبه للبوتات
 
 $role all -> اعطاء رتبه للجميع سواء بشر او بوتات
 **`);

      message.author.send({embed});
    }
}); 

//dac-dar

client.on('message', message => {
if(message.content.split(' ')[0] == prefix + 'dac') {  
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.channels.forEach(m => {
m.delete();
});
}
if(message.content.split(' ')[0] == prefix + 'dar') { 
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`تم حذف جميع الرتب بنجاح`")
}
});

//================


client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number π‘```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('message', message => {
  if (message.content.startsWith("$avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});


client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
message.channel.send("**$bc <message>**");
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('# | السيرفر', `${message.guild.name}`,true)
      .addField('# | المرسل ', `${message.author.username}#${message.author.discriminator}`,true)
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.send(`${m}`,{embed: bc});
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)   
  .addField(':diamond_shape_with_a_dot_inside:  عدد الاعضاء المرسل لهم ',`**[ ${message.guild.memberCount} ]**`, true)        
  .addField(':pencil:| الرسالة ', args)
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});
	  


client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**يجب عليك منشنه العضو المراد تبنيده**");
  if(!reason) return message.reply ("**يجب عليك كتابه سبب الباند¯**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لقد تم تبنيدك من السيرفر يرجى مواصله الادارة في حال تم تبنيدك بالغلط**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**يجب عليك منشنه العضو المراد طرده**");
  if(!reason) return message.reply ("**يجب عليك كتابه سبب الطرد¯**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لقد تم طردك من السيرفر يرجى مواصله الادارة في حال تم طردت بالغلط**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

 




client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
}
 }
});

//mute

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "$mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

//room-close-open

client.on('message', message => {
         if(message.content === prefix + "deopr") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "opr") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});

//vip
	var PREFIX = "$vip"

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "312244272000663564") return;



if (message.content.startsWith(PREFIX + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/31014411");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 

if (message.content.startsWith(PREFIX + 'username')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(PREFIX + 'avatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
if(message.content.startsWith(PREFIX + 'listening')) {
    client.user.setActivity(args.join(' '), {type: 'LISTENING'});
}
if(message.content.startsWith(PREFIX + 'watching')) {
    client.user.setActivity(args.join(' '), {type: 'WATCHING'});
}
});

