const config = {
  // your bot's token from the bot creation page
  token: 'BOT_TOKEN', // it's a secret to everyone
  
  // list of user IDs that can allow reposting of the content (allowed to react to repost)
  admins: ['309390326433579008', '277147928924258304', '284830486025469952'], // vgmoose, pwsincd, crc32

  // list of channels to monitor for repostable messages
  repostable_channels: ['421414606687305728'],  // hbas-repo

  // list of strings that when detected in a message, will get a repostable reaction to them
  activation_keywords: [':nx:', ':wiiu:'],  // any messages with nx or wii u emojis

  // list of channels to repost any and all content to
  output_channels: ['453947482515177492', '548608919438884894'],  // hbas-updates, twitter

  // the emoji used to signify a repost (should, line up with the repostable_channels list)
  // see: https://discordjs.guide/popular-topics/reactions.html#unicode-emojis
  // unicode emoji for standard ones, IDs for custom ones
  reaction_buttons: ['339140869275910151', '🐦']  // homebrew emoji, bird emoji
};

module.exports = config;