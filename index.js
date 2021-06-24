const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
 
app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js");
const mySecret = process.env['TOKEN'] ///borra esto si usas algun otro hosteo que no sea repl.it///
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });

let prefix = config.prefix
 client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
 client.on("message", (message) => {
   if(command === "info") {
    const embed = new Discord.MessageEmbed()
      .setTitle('Información del servidor')
      .setColor(0x5E9DE4)
      .addField('-Imagenes en Imagenes', 1)
      .addField('-No Spam/Flood', 2)
      .addField('-No Pings Masivos', 3)
      .addField('Miembros:', message.guild.memberCount, true)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
      .setTimestamp()
    message.channel.send(embed);
   }

   if(command === "code") {
    message.channel.send("el codigo fuente esta en github https://github.com/HankB-o-t/Mr.Bot ");
  }

  if(command === "help") {
   const embed = new Discord.MessageEmbed()
      .setTitle('Comandos Mios')
      .setColor(0x5E9DE4)
      .addField('-h para leer las reglas', message.guild.name, true)
      .addField('-info para leer esto', message.channel.name)
      .addField('Miembros:', message.guild.memberCount, true)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
      .setTimestamp()
    message.channel.send(embed);

  }

  if(message.content.startsWith("Mr.Bot")) {
    message.channel.send("Bruh, soy un bot, pensaste que soy un humano XD, hasta en mi nombre hay una etiqueta que dice BOT , a menos q no sepas leer, pero si no sabrias, como hubieras escrito esto??? ");
  }

  if(message.content.startsWith("Hola")) {
    message.channel.send("Buenos Dias");
  }

 });
 
 client.login(config.token);
