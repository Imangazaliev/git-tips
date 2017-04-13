function escapeStr(str) {
  return str
    .replace(/\"/g, '\\"')
    .replace(/\n/g, '\\n');
}

var renderItem = function(data) {
  var lines = [
    '### ' + data.title,
  ];

  if (data.description !== undefined) {
    lines.push(data.description);
  }

  lines = lines.concat(['```sh',
    data.tip,
    '```\n',
  ]);

  if (Array.isArray(data.alternatives)) {
    lines.push('__Alternatives:__');

    data.alternatives.map(function(alternative){
      lines = lines.concat(['```sh', alternative, '```\n'])
    });
  }

  return lines.join('\n');
};

function render(data){
  var data = data.data;

  var lines = [
    `\n## ${data.title}\n`,
  ];

  lines = lines.concat(data.items.map(renderItem));

  return lines.join('\n');
}

module.exports = render;
