
/**************** ↓以下为需要自定义修改的部分 ↓ ******************/


// 域名（注意最后面不要有 / ）
var domains = [
    "https://memo.eirms.com",
    "https://memos.laozhang.org",
    "https://say.veryjack.com",
    "https://memos.1900.live",
    "https://memos.vlieo.com",
    "https://api.mm.xlap.top",
    "https://s.dusays.com",
    "https://isay.live"
];

// 头像
var headUrls = {
    "https://memos.laozhang.org":"https://zhangsir.s3.us-east-005.backblazeb2.com/2023/05/13/645ebca844b3a.png",
    "https://memo.eirms.com":"https://dogefs.s3.ladydaily.com/lucy/storage/1680832936501.png",
    "https://say.veryjack.com":"https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp",
    "https://memos.1900.live":"https://cdn.1900.live/202205/logodeng-pao-fang-an-3.png",
    "https://memos.vlieo.com":"https://vlieo.com/images/avatar.png?v=1681480182253",
    "https://api.mm.xlap.top":"https://api.mm.xlap.top/logo.png",
    "https://s.dusays.com":"https://cravatar.cn/avatar/c1b204bab687a23c8b6d7c8de11c7c59",
    "https://isay.live":"https://cravatar.cn/avatar/f0e33f4d097fe2e9fd74b9b129e7a655"
};

// 头像点击链接
var headHrefs = {
     "https://memo.eirms.com":   "https://memo.eirms.com",
    "https://memos.laozhang.org":"https://memos.laozhang.org",
    "https://say.veryjack.com":"https://say.veryjack.com",
    "https://memos.1900.live":"https://memos.1900.live",
    "https://memos.vlieo.com":"https://memos.vlieo.com",
    "https://api.mm.xlap.top":"https://api.mm.xlap.top",
    "https://s.dusays.com":"https://s.dusays.com",
    "https://isay.live":"https://isay.live"
};


// 首页banner轮播图（注意最后一条不要逗号，如不需要轮播图，改成 var banlist = []; 即可）
var banlist = [];
// var banlist = [{
//     href:"https://baidu.com",
//     img:"img/2022092304413371-900x350-c.webp",
//     desc:"哈哈哈哈哈",
//     active:"active"
// },
// {
//     href:"https://baidu.com",
//     img:"img/2022092304184493-900x350-c.jpg",
//     desc:"啦啦啦啦啦",
//     active:""
// }];

// 每次拉取每个人多少条
var limit = 5;
/**************** ↑以上为需要自定义修改的部分↑ ******************/

