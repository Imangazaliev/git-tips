slugify = function(text) {
  var text = text.replace(/[a-z]+/gi, function (str) {
    return str.toLowerCase();
  });

  return text.toString()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\wа-я\-]+/gi, '')    // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

var render = function(data) {
  var data = data.data;

  var output = `### ${data.title}\n\n`;

  data.items.map(function (item) {
    output += '- [' + item.title + '](#' + slugify(item.title) + ')\n';
  });

  return output + '\n';
};

module.exports = render;
