exports.run = async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send("ARRETE ERWAN, t'as pas le droit.")
    } else {
        if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.channel.send("Donne un nombre de messages à supprimer (entre 2 et 100).")
        }
        await message.channel.bulkDelete(deleteCount).catch(error => message.reply(`Impossible de supprimer les messages à cause de: ${error}`))
    }
}