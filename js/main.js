// 升旗按钮
let up_btn = document.getElementById("flag_up")
// 国旗 div
let flag = document.getElementById("flag")
// 阴影层
let shadow = document.getElementById("shadow")
// 视图容器
let container = document.getElementById('container')
// 用户是否手动设置了静音？
let man_muted = false

// 图片预加载
let image = new Image()
image.src = ASSET_URL + "/tiananmen.png"
// 图片加载完成
image.addEventListener('load', function () {
    shadow.innerHTML = "80%"
    shadow.hidden = true
    container.hidden = false
})

// 加载 国歌
let bgmusic = new Audio(ASSET_URL + "/bg.mp3")
bgmusic.muted = false

// 由于 ios 系统端 微信对 audio 的加载事件支持不好，所以不做预加载进度的判断
bgmusic.play()
bgmusic.pause()
// 部分ios设备会在 音频播放 后才开始加载

//   控制是否静音
let muted = document.getElementById('muted')
muted.addEventListener("click", function () {
    if (bgmusic.muted) {
        // 当前状态为静音，设置取消静音状态
        man_muted = false
        bgmusic.muted = false
        this.innerHTML = `
<svg t="1601358554127" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3229" width="32" height="32"><path d="M571.9 875.5c-13 0-26.1-3.5-37.9-10.6l-199.6-119c-0.9-0.6-1.9-1.2-2.7-1.8-8-4.1-16.4-6.2-25-6.2H167.9c-56 0-101.6-50.6-101.6-112.7V400.3c0-62.2 45.6-112.7 101.6-112.7h138.8c9.7 0 19.5-2.8 28.3-8.1l199.6-119c23.1-13.8 50.9-14.1 74.3-0.9 26.2 14.9 42.4 44.2 42.4 76.5l-0.3 130.6-0.3 422.6c0 32.3-16.3 61.6-42.4 76.5-11.5 6.5-23.9 9.7-36.4 9.7zM841.4 747.6c-9 0-18-3.4-24.9-10.3-13.7-13.7-13.7-36 0-49.7 46.7-46.7 72.4-108.8 72.4-174.9s-25.7-128.2-72.4-174.9c-13.7-13.7-13.7-36 0-49.7 13.7-13.7 36-13.7 49.7 0 60 60 93 139.7 93 224.6s-33 164.6-93 224.6c-6.8 6.9-15.8 10.3-24.8 10.3z" fill="#2c2c2c" p-id="3230"></path><path d="M722.9 666.4c-9 0-18-3.4-24.9-10.3-13.7-13.7-13.7-36 0-49.7 51.7-51.7 51.7-135.8 0-187.5-13.7-13.7-13.7-36 0-49.7 13.7-13.7 36-13.7 49.7 0 79.1 79.1 79.1 207.8 0 286.9-6.8 6.9-15.8 10.3-24.8 10.3z" fill="#2c2c2c" p-id="3231"></path></svg>
`
    } else {
        // 当前状态为 有声音，设置为静音状态
        man_muted = true
        bgmusic.muted = true
        this.innerHTML = `<svg t="1601354463214" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4155" width="32" height="32"><path d="M169.5744 837.2224c7.3728 8.6016 20.0704 9.8304 28.672 2.4576L889.2416 261.3248c8.6016-7.3728 9.8304-20.0704 2.4576-28.672a20.23424 20.23424 0 0 0-28.672-2.4576L172.032 808.5504c-8.6016 6.9632-9.8304 20.0704-2.4576 28.672zM768.4096 298.1888l37.6832-31.5392c-4.9152-5.3248-9.4208-9.8304-13.1072-13.5168a24.1664 24.1664 0 0 0-34.4064 2.048c-9.0112 10.24-8.192 25.3952 2.048 34.4064 1.2288 1.6384 4.096 4.9152 7.7824 8.6016zM840.0896 313.344l-37.6832 31.5392c0.4096 0.8192 1.2288 1.6384 1.6384 2.4576 28.2624 48.3328 45.4656 104.448 45.4656 168.7552s-17.2032 120.4224-45.4656 168.7552c-9.8304 16.7936-20.48 31.5392-31.1296 43.4176-6.144 6.9632-10.6496 11.8784-13.1072 13.9264a24.1664 24.1664 0 0 0-2.048 34.4064c9.0112 10.24 24.576 11.0592 34.4064 2.048 13.9264-12.288 33.9968-35.6352 53.6576-68.8128 32.768-55.296 52.0192-120.0128 52.0192-193.3312 0-73.3184-19.6608-138.0352-52.0192-193.3312-1.6384-4.096-3.6864-6.9632-5.7344-9.8304zM661.9136 387.4816l37.2736-31.5392c-0.8192-0.8192-2.048-2.4576-2.8672-3.2768a24.49408 24.49408 0 0 0-34.4064-1.2288c-9.8304 9.4208-10.24 24.576-1.2288 34.4064 0.4096 0.4096 0.8192 1.2288 1.2288 1.6384zM690.176 439.0912c8.192 22.9376 13.1072 48.3328 13.1072 77.0048 0 37.2736-8.192 70.0416-22.1184 97.8944-8.192 16.384-15.9744 27.0336-20.48 31.9488-9.4208 9.8304-8.6016 25.3952 1.2288 34.4064 9.8304 9.4208 25.3952 8.6016 34.4064-1.2288 7.7824-8.192 18.0224-22.9376 28.672-43.8272 16.7936-34.4064 27.0336-74.1376 27.0336-119.6032 0-40.96-8.6016-77.4144-22.9376-109.7728l-38.912 33.1776z" p-id="4156" fill="#2c2c2c"></path><path d="M239.2064 711.4752h35.6352l305.9712-256V223.232c0-27.0336-22.1184-39.7312-49.152-27.8528L336.6912 320.7168H239.2064c-54.0672 0-97.8944 43.4176-97.8944 97.4848v195.3792c0 54.0672 43.4176 97.8944 97.8944 97.8944zM352.6656 721.3056l179.4048 115.0976c27.4432 11.8784 49.152-0.8192 49.152-27.8528v-278.1184l-228.5568 190.8736z" p-id="4157" fill="#2c2c2c"></path></svg>`
    }
})

// 动画结束事件
flag.addEventListener("animationend", function () {
    // console.log("动画结束")
    shadow.hidden = false
    let show_at_end = document.getElementById("show_at_end")
    // 从会话储存中读取数据
    let data = sessionStorage.getItem("nums")
    if (!data) {
        // 本地没有数据的时候才去请求
        fetch(API_URL + '/api/add').then(res => {
            if (res.status == "200") {
                return res.text()
            } else {
                throw "服务器出错"
            }
        }).then(data => {
            console.log(data)
            changeStatus(data)
            sessionStorage.setItem("nums", data)
        }).catch(err => {
            // 显示 500 说明服务器可能有问题了
            changeStatus("500")
        })
    } else {
        changeStatus(data)
    }

    // 改变文字显示，只在当前函数作用域生效
    function changeStatus(data) {
        show_at_end.innerHTML = show_at_end.innerHTML.replace("{{ num }}", data)
        show_at_end.hidden = false
        document.title = `全民升国旗,我是第 ${data} 位升旗手！`
    }
})

if (up_btn.ontouchstart === null){
// 长按升旗
    up_btn.addEventListener("touchstart", flagUp)
    up_btn.addEventListener("touchend",flagStop)
}else {
    up_btn.addEventListener("mousedown",flagUp)
    up_btn.addEventListener("mouseup",flagStop)
}


function flagStop(event) {
    // 音乐暂停
    bgmusic.pause()
    // 禁用浏览器默认事件
    event.preventDefault();
    this.style.animationPlayState = "running"
    flag.style.animationPlayState = "paused"
}
function flagUp(event) {
    event.preventDefault();
    // 长按的时候 按钮暂停旋转
    this.style.animationPlayState = "paused"
    // 升旗动画开始
    flag.style.animationPlayState = "running"
    // 播放国歌
    bgmusic.play()
}