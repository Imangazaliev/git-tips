function escapeStr(str) {
  return str
      .replace(/\"/g, '\\"')
      .replace(/\n/g, '\\n');
}

var renderItem = function(data) {
  var tips = [
    '### ' + data.title,
    '```sh',
    data.tip,
    '```\n',
  ];

  if (Array.isArray(data.alternatives)) {
    tips.push('__Alternatives:__');

    data.alternatives.map(function(alternative){
      tips = tips.concat(['```sh', alternative, '```\n'])
    });
  }

  return tips.join('\n');
};

function render(data){
  var data = data.data;

  var renderedItems = data.items.map(renderItem);

  return renderedItems.join('\n');
}

module.exports = render;
