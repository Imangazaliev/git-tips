function escapeStr(str) {
  return str
      .replace(/\"/g, '\\"')
      .replace(/\n/g, '\\n');
}

var render = function(data) {
  var data = data.data;

  var tips = [
    '## ' + data.title,
    '```sh',
    data.tip,
    '```',
  ];

  if (Array.isArray(data.alternatives)) {
    tips.push('\n__Alternatives:__');

    data.alternatives.map(function(alternative){
      tips = tips.concat(['```sh', alternative, '```', '\n'])
    });
  } else {
    tips.push('\n');
  }

  return tips.join('\n');
};

module.exports = render;
