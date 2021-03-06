/**
 * @param {("fr"|"en")} language - Language to use in the response
 * @param {module:"discord.js".Message} message - Message from the discord server
 * @param {String[]} args=[] - Additional arguments sent with the command
 */

const UnblockCommand = async function(language, message, args) {
    if ((await canPerformCommand(message, language,
        PERMISSION.ROLE.BOTOWNER)) !== true) {
        return;
    }

    if (args.length === 1) {
        if (!hasBlockedPlayer(args[0])) {
            await message.channel.send("Not blocked");
            return;
        }
        removeBlockedPlayer(args[0]);
        await message.channel.send("Unblocked with success");
    }
    else {
        await message.channel.send("Usage: !unblock <discord id>");
    }
};

module.exports = {
    commands: [
        {
            name: 'unblock',
            func: UnblockCommand
        }
    ]
};