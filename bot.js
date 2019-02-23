const Discord = require('discord.js');
const config = require('./config.js');

const client = new Discord.Client();

var last_message = null;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // only do things if we're in a repostable channel
  if (!config.repostable_channels.includes(msg.channel.id)) {
    return;
  }

  // message exists and contains at least one of the activation keywords
  if (msg.content && config.activation_keywords.some(key => msg.content.includes(key))) {

    // react to this message with all reaction buttons, and set listener call backs
    config.reaction_buttons.every(button => msg.react(button));

    // save the content of this message, to reply upon the next reaction
    last_message = msg.content;
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  if (config.reaction_buttons.some(key => reaction.emoji.name)) {
    if (config.admins.includes(user.id) && last_message) {
      // send the last message contents to the appropriate channel based on which emoji was selected
      const button = config.reaction_buttons.findIndex(e => e == reaction.emoji.id || reaction.emoji.name);
      const channel_id = config.output_channels[button];
      client.channels.get(channel_id).send(last_message);

      // clear the last message to help prevent duplicate submissions
      last_message = null;
    }
  }
});

client.login(config.token);