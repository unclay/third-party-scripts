module.exports = {
  rules: [
    {
      match: /share\.js/i,
      handler: function (text) {
        text = text.replace('http://bdimg.share.baidu.com/', '//scdn.bozhong.com/source/common/baidu/');
        return text;
      }
    }
  ],
};