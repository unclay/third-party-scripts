function header (arr) {
  let text = '/*!\n';
  for (const item of arr) {
    text += ' * ' + item + '\n';
  }
  text += ' */\n';
  return text;
}
module.exports = {
  rules: [
    {
      match: /ping\.js/i,
      handler: function (text) {
        text = text.replace(/http:/gi, '')
                    .replace(/this\.loadHotClick\(this\)/i, '')
                    .replace(/this\.sendInfo\(this\.url\.join\(""\)\);/i, '');
        text = header([
          'qq不支持https，因此移除初始化事件代码',
          'remove code `this.loadHotClick(this)`',
          'remove code `this.sendInfo(this.url.join(""));`',
        ]) + text;
        return text;
      }
    }
  ],
};