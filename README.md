# 第三方脚本集合

目前全站升级https已经接近尾声，开始设法解决第三方脚本不支持https问题。  
目前折中的解决方案：把第三方脚本放在自己服务器加载，以确保https正常使用

## 警告：

现在运营商劫持DNS频率比较高，导致有时候第三方的js（例如百度）都被劫持成广告的js，  
因此，每次重新爬取脚本时，请注意是否刚好爬取到广告脚本！！

## 百度

```bash
# 从百度分享抓取相关的脚本
$ npm run baidu $1

# 不存在$1时，默认生成到/baidu下面
# $1可配置成自己需要存放的路径，例如：/code/source/baidu/
```



##### 存在问题：
1. 不能显示分享总数，总数在百度那边，接口不支持https（可以考虑通过nginx代理到百度，从而获取转为自己域名下面的数据）

##### 处理方式：

1. 百度分享域名换成自己的域名
一开始是改为相对路径，后来发现项目和资源是不同子域名，导致加载不到，所以决定改为可配置域名

```bash
# /baidu/config.js
module.exports = {
  rules: [
    {
      match: /share\.js/i, // 文件名匹配规则
      handler: function (text) {
        text = text.replace('http://bdimg.share.baidu.com/', './'); // 相对路径，适合项目与分享同域名
        // text = text.replace('http://bdimg.share.baidu.com/', '//youself.com/'); // 绝对路径，适合多个子域名（推荐）
        return text;
      }
    }
  ],
};
```

2. 所有js、css的头部加入对应的header信息
3. 移除logger文件，分享统计的不支持https


## QQ & Discuz

```bash
# 从QQ抓取相关的脚本
$ npm run qq $1

# 不存在$1时，默认生成到/qq下面
# $1可配置成自己需要存放的路径，例如：/code/source/qq/
```

##### 存在问题：
1. 移除qq初始化统计事件，感觉不如直接关闭腾讯分析

##### 处理方式：

1. 移除qq初始化统计事件

```bash
# /qq/config.js
module.exports = {
  rules: [
    {
      match: /ping\.js/i,
      handler: function (text) {
        text = text.replace(/http:/gi, '')
                    .replace(/this\.loadHotClick\(this\)/i, '')
                    .replace(/this\.sendInfo\(this\.url\.join\(""\)\);/i, '');
        return text;
      }
    }
  ],
};
```