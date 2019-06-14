const Discord = require('discord.js');
exports.createEmbedFull = function(
    author, author_url,
    title,
    description,
    thumbnail,
    field_1, field_1_desc,
    field_2, field_2_desc,
    field_3, field_3_desc,
    field_4, field_4_desc,
    footer, footer_url,
    color,
    image_url,
) {
    return new Discord.RichEmbed()
    .setAuthor(author, null, author_url)
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .addField(field_1, field_1_desc, true)
    .addField(field_2, field_2_desc, true)
    .addField(field_3, field_3_desc, true)
    .addField(field_4, field_4_desc, true)
    .setFooter(footer, footer_url)
    .setColor(color)
    .setImage(image_url)
  ;
}
exports.createEmbed = function(
    author, author_url,
    title,
    description,
    thumbnail,
    footer, footer_url,
    color,
    image_url,
) {
    return new Discord.RichEmbed()
    .setAuthor(author, null, author_url)
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setFooter(footer, footer_url)
    .setColor(color)
    .setImage(image_url)
  ;
}