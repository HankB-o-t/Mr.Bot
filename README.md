Bot Bastante Simple Que funciona con node.js y discord.js 

En config.json cambia el prefix a lo que quieras (por ej. "s!", "&", "+", "*" etc(pon uno un poco simple, no como "e>"))

Si en este bot vas a usarlo en repl.it:

1-borra tu token de config.json

2-Crea un "secreto" llamado "TOKEN" y agrega la constante que aparece abajo de tu "secreto"

3-Cambia lo de "client.login(config.token);" a "client.login(process.env.TOKEN);"

con eso ya tu bot estaria listo