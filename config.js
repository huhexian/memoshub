
/**************** ↓以下为需要自定义修改的部分 ↓ ******************/

// 人员列表
var infos = [
  {
    "name": "老张",
    "api": "https://memos.laozhang.org", // memos api域名
    "site": "https://laozhang.org", // 个人网站域名
    "avatar": "https://zhangsir.s3.us-east-005.backblazeb2.com/2023/05/13/645ebca844b3a.png",  // 头像
    "comment":true, // 评论开关
    "comment_server_adress": "https://artalk.laozhang.org/", // 评论服务接口地址
    "comment_site_name": "memos"  // artalk 评论site
  },
  {
    "name": "1900",
    "api": "https://memos.1900.live",
    "site": "https://1900.live",
    "avatar": "https://cdn.1900.live/202205/logodeng-pao-fang-an-3.png",
    "comment":true
  },
  {
    "name": "林木木",
    "api": "https://me.edui.fun", 
    "site": "https://immmmm.com", 
    "avatar": "https://cravatar.cn/avatar/ba83fa02fc4b2ba621514941307e21be",
    "comment":true
  },
  {
    "name": "记忆一隅",
    "api": "https://memos.vlieo.com",
    "site": "https://vlieo.com",
    "avatar": "https://vlieo.com/images/avatar.png?v=1687790747714",
    "comment":true
  },{
    "name": "veryjack",
    "api": "https://say.veryjack.com",
    "site": "https://veryjack.com",
    "avatar": "https://pix.veryjack.com/i/2023/04/04/fsxnkv.webp",
    "comment":true
  },{
    "name": "eirms",
    "api": "https://memo.eirms.com",
    "site": "https://eirms.com",
    "avatar": "https://dogefs.s3.ladydaily.com/lucy/storage/1680832936501.png",
    "comment":true
  },{
    "name": "TeacherDu平台",
    "api": "https://s.dusays.com",
    "site": "https://dusays.com",
    "avatar": "https://cravatar.cn/avatar/c1b204bab687a23c8b6d7c8de11c7c59",
    "comment":true
  },{
    "name": "l22",
    "api": "https://memos.l22.org",
    "site": "https://l22.org",
    "avatar": "https://cravatar.cn/avatar/4b0d33a08ac73dc07a5293f14232ca53",
    "comment":true
  },{
    "name": "isay",
    "api": "https://isay.live",
    "site": "https://xsinger.me",
    "avatar": "https://cravatar.cn/avatar/f0e33f4d097fe2e9fd74b9b129e7a655",
    "comment":true
  },{
    "name": "印记",
    "api": "https://yinji.net",
    "site": "https://yinji.net",
    "avatar": "https://sdn.geekzu.org/avatar/ba98152d337d7be289b51b90769cb194",
    "comment":true
  }
];

// 每次加载每个人多少条
var limit = 5;

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


/**************** ↑以上为需要自定义修改的部分↑ ******************/

