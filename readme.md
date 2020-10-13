### h5实现升国旗
#### 演示
[上线版本](https://q.jialidun.vip)  
[github-page版,比较慢，无后台统计人数功能](https://jianwi.github.io/flag_up)
#### 前端实现原理：
使用 css3的动画，事件实现国旗上升，暂停  
使用 transform 控制元素位值变化，开启新图层，避免不必要的重排

#### 人数统计功能
1. 后台使用 nodejs  
2. 使用 pm2 运行web服务  
3. 数据库用 redis 
4. 持久化采用默认的RDB方式,每秒保存一次。不会丢失太多数据

> 为什么要用 redis  
> 文件io效率低下，并发时会出现问题  
> 业务比较简单，相比于其他数据库，使用 redis 更快，更方便

#### 跨域解决
前端和后端部署，能不跨域就不跨域。  
而且服务器暴漏太多端口不好   
所以使用 nginx 反向代理
```
location /api {
	 proxy_pass http://127.0.0.1:3300;
}
```

#### 使用
拿来直接就能用，如果要追求更好的性能，可以使用cdn,修改
js/config.js
```
API_URL // 后台api的url，如果你使用了反向代理，保持默认即可。否则，配置下 CORS 跨域
ASSET_URL // 静态资源地址
```
### 部署
#### 1. 复制项目
```shell script
git clone https://github.com/jianwi/flag_up.git
```
#### 2. 后端部署
如果没有 pm2 ，先全局安装pm2
```shell script
cnpm install pm2 -g
```
安装依赖
```shell script
cd api
cnpm install
``` 
运行 api 服务器
```shell script
pm2 start index.js
```
默认是 3300 端口,此时用浏览器打开“127.0.0.1:3300”如果显示404则成功  
此时可以选择使用反向代理，或者将 config.js 中的 API_URL 改为 “127.0.0.1:3300“，此时需要后端实现跨域资源共享  
推荐使用反向代理


### 遇到的问题 & 解决思路
1. 部分 ios 设备在 audio.play() 调用后才开始加载  
在 audio 创建完后立即调用 audio.play() 和 audio.pause()
 
使用预加载

2. pc 端用鼠标点击不能触发事件  
pc 端不支持 touch 事件。  
怎么检测设备是否支持 touch 事件？  
如果不支持，document.ontouchstart 就是 undefined，因为没有这个属性。
然而支持的话，document.ontouchstart 就是 null ，表示是个空指针引用

