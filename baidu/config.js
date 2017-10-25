module.exports = {
  rules: [
    {
      match: /share\.js/i,
      handler: function (text) {
        // text = text.replace('http://bdimg.share.baidu.com/', '//fe.office.bzdev.net/source/wcl/common/baidu/');
        text = text.replace('http://bdimg.share.baidu.com/', './');
        return text;
      }
    }
  ],
};