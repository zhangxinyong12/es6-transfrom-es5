## es6代码转es5
可以学习借鉴es5是如何实现的。
```
npm install
```
## 命令行转码 
Babel 提供命令行工具@babel/cli，用于命令行转码。

它的安装命令如下。
```
npm install --save-dev @babel/cli
```
基本用法如下。
```
# 转码结果输出到标准输出
$ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib

# -s 参数生成source map文件
$ npx babel src -d lib -s
```