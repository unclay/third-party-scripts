const fs = require('fs');
const path = require('path');
const superagent = require('superagent');
const colors = require('colors');

const db = require('./db');
const config = require('./config');
const dirname = process.argv[2] || __dirname;

colors.setTheme({  
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'red',
  info: 'green',
  data: 'blue',
  help: 'cyan',
  warn: 'yellow',
  debug: 'magenta',
  error: 'red',
});

Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function Url(url) {
  const reg = /^((?:(\w+:)\/\/)?((\w+):?(\w+)?@)?(([^\/\?:]+)(?:\:(\d+))?))(\/[^\?#]+)?(\?[^#]+)?(#.*)?/;
  const u = reg.exec(url);
  this.uri = url;
  this.origin = u[1];
  this.protocol = u[2];
  //! URI已解码的授权组成部分，未实现。
  this.authority;
  this.username = u[4];
  this.password = u[5];
  this.host = u[6] || '';
  this.hostname = u[7] || '';
  this.port = u[8] || '';
  this.path = u[9] || '/';
  this.search = u[10] || '';
  this.hash = u[11] || '';
}

const createCatalog = function (catalogUrl) {
  const catalogArr = catalogUrl.split('/');
  const res = fs.existsSync(path.resolve(dirname, catalogUrl));
  if (!res) {
    for (let i = 1; i <= catalogArr.length; i++) {
      const newUrl = catalogArr.slice(0, i).join('/');
      if (!fs.existsSync(path.resolve(dirname, newUrl))) {
        fs.mkdirSync(path.resolve(dirname, newUrl));
      }
    }
  }
}

function header (arr) {
  let text = '/*!\n';
  for (const item of arr) {
    text += ' * ' + item + '\n';
  }
  text += ' */\n';
  return text;
}
function removeHeader(text) {
  return (text || '').replace(/(?:\/\*(?:[\s\S]*?)\*\/)/gm, '');
}

const loadJs = async function (url) {
  const u = new Url(url);
  const urlPath = u.path.replace(/^\//, '');
  let uriCatalog = urlPath.split('/');
  uriCatalog = uriCatalog.slice(0, uriCatalog.length - 1).join('/');
  const res = await superagent.get(url).buffer(true).send();
  if (res.text) {
    createCatalog(uriCatalog);
    let text = res.text;
    // 外部更新规则
    if (config && config.rules && config.rules.length > 0) {
      for (const item of config.rules) {
        if (urlPath.match(item.match)) {
          text = item.handler(text);
          break;
        }
      }
    }
    let fileText;
    if (fs.existsSync(path.resolve(dirname, urlPath))) {
      fileText = fs.readFileSync(path.resolve(dirname, urlPath), 'utf-8');
    }
    // js\css顶部加入header信息
    if (urlPath.match('.js') || urlPath.match('.css')) {
      const head = [
        `Third Party Scripts v${process.env.npm_package_version} (https://github.com/unclay/third-party-scripts)`,
        `Clone at ${new Date().Format('yyyy-MM-dd hh:mm:ss')}`,
        `Clone from ${url}`,
      ];
      text = header(head) + text;
    }
    // 内容有更新时才需要重新保存下来
    if (removeHeader(fileText) !== removeHeader(text)) {
      fs.writeFileSync(path.resolve(dirname, urlPath), text, 'utf-8');
      console.log(`[modified] ${url} -> ${path.resolve(dirname, urlPath)}`.info);
    } else {
      console.log('[not modified]'.warn, url.warn);
    }
  } else if (res.body) {
    // 二进制，用于图片
    createCatalog(uriCatalog);
    fs.writeFileSync(path.resolve(dirname, urlPath), res.body, 'utf-8');
  }
}
console.log(`${process.env.npm_package_name} v${process.env.npm_package_version}`.info);
console.log('');
// 开始拉取第三方数据
for (const item of db) {
  if (item) {
    loadJs(item);
  }
}
