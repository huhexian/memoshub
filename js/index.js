/*** 初始化 vue begin***/

const {
    createApp
} = Vue;

const app = createApp({
    data() {
        return {
            datas: [],
            imgUri: "",
            banlist: [],
            infos: infos,
            tempCommentCache: {}
        }
    },
    methods: {
        formatDate(value, args) {
            return format(value, args);
        },
        next(event) {
            offset++;
            const that = this;
            getDatas(function(data) {
                that.datas.push(...data);
            });
        },
        nextSort(event) {
            offset++;
            const that = this;
            getDatas(function(data) {
                data.push(...that.datas);
                that.datas = sort(data);
            });
        },
        commentClick(event) {

          
            var comment  =event.target.getAttribute('comment');
            if (comment == "false" ||comment == false || comment == undefined || comment == "" || comment == null){
                return;
            }
            var pageKey = event.target.getAttribute('pageKey');
            var server = event.target.getAttribute('serveradress');
            var user = event.target.getAttribute('user');
            var itemId = event.target.getAttribute('itemid');
            var commentSiteName = event.target.getAttribute('commentsitename');
            if (server == undefined || server == "" || server == null) {
                server = "https://api.hanyu.life/api/artalk/";
                pageKey = user + "-" + pageKey;
                commentSiteName = "hub";
            }
            if (pageKey == undefined || pageKey == "" || pageKey == null){
                 pageKey = user + "-" + pageKey;
            }
            if (commentSiteName == undefined || commentSiteName == "" || commentSiteName == null){
                 commentSiteName = "hub";
            }

            if (this.tempCommentCache[itemId + user] == 1) {
                return;
            }
            this.tempCommentCache[itemId + user] = 1;
            Artalk.init({
                el: '#comments-' + itemId + '-' + user,
                // 绑定元素的 Selector
                pageKey: pageKey,
                // 固定链接 (留空自动获取)
                pageTitle: '',
                // 页面标题 (留空自动获取)
                server: server,
                // 后端地址
                site: commentSiteName,
                // 你的站点名
            })
        }

    },
    mounted: function() {
        const that = this;
        this.imgUri = imgUriPrefix;
        this.banlist = banlist;
        getDatas(function(data) {
            data.push(...that.datas);
            that.datas = sort(data);
        });
    }
});

const vm = app.mount('#app');

/*** 初始化 vue end***/

function getDatas(callback) {
    // $.ajaxSetup({ async: false });
    var tmpMap = {};

    for (var i = 0; i < infos.length; i++) {

        $.ajax({
            type: "GET",
            url: infos[i].api + memosGetsApi + offset * limit,
            beforeSend: function() {
                tmpMap[this.url] = i;
            },
            success: function(response) {
                var current = tmpMap[this.url];
                var name = infos[current].name,
                site = infos[current].site,
                avatar = infos[current].avatar,
                api = infos[current].api,
                serveradress = infos[current].comment_server_adress,
                commentsitename = infos[current].comment_site_name;
                comment = infos[current].comment;
                for (var j = 0; j < response.data.length; j++) {
                    response.data[j]["name"] = name;
                    response.data[j]["api"] = api;
                    response.data[j]["site"] = site;
                    response.data[j]["avatar"] = avatar;
                    response.data[j]["comment_server_adress"] = serveradress;
                    response.data[j]["comment_site_name"] = commentsitename;
                    response.data[j]["comment"] = comment;
                }
                getDataSuccess(response.data, callback);
            },
            error: function(e) {
                console.log(e);
            }
        });
    }
    // $.ajaxSetup({ async: true });
    //getDataSuccess(sort(allData), callback);

};

function getDataSuccess(data, callback) {
    var d = data;
    for (var i = 0; i < d.length; i++) {
        d[i].content = d[i].content.lefttrim();
        var tags = [];
        if (d[i].content.indexOf("#") == 0) {
            var k = 0;
            for (var j = 0; j < d[i].content.length; j++) {
                var temp = j + 1 == d[i].content.length ? true: false;
                if (d[i].content.charAt(j) == " " || d[i].content.charAt(j) == "\n" || d[i].content.charAt(j) == "\t" || temp) {
                    j = temp ? j + 1 : j;
                    var tag = d[i].content.substring(k, j);
                    tags.push(tag);
                    k = j + 1;
                    if (d[i].content.charAt(j + 1) != "#") {
                        break;
                    }
                }
            }
            d[i].content = d[i].content.substring(k, d[i].content.length);
            d[i]["tags"] = tags;
        }

        d[i].content = marked(d[i].content);
        d[i].content = d[i].content.replace("\n", "<p></p>");
    }
    callback(d);
};