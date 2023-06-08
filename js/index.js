/*** 初始化 vue begin***/

const {
    createApp
} = Vue;

const app = createApp({
    data() {
        return {
            datas: [],
            imgUri:"",
            headUrl:"",
            headHref:"",
            domain:"",
            banlist:[],
            allData:[]
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
        }
    },
    mounted: function() {
        const that = this;
        this.imgUri = imgUriPrefix;
        this.banlist = banlist;
        getDatas(function(data) {
             // that.datas.push(...data);
             data.push(...that.datas);
             that.datas = sort(data);
        });
    }
});

const vm = app.mount('#app');

/*** 初始化 vue end***/

function getDatas(callback) {
    var allData = new Array();
    // $.ajaxSetup({ async: false });

    var tmpMap = {};

    for (var i = 0; i < domains.length; i++) {
        
         $.ajax({
            type: "GET",
            url: domains[i] + memosGetsApi + offset*limit,
            beforeSend:function (){
              tmpMap[this.url] = i;
            },
            success: function(data) {
                console.log()
                var ii = tmpMap[this.url];
                for (var j = 0; j < data.data.length; j++) {
                    for (var p = 0; p <  data.data[j].resourceList.length; p++) {
                        if (data.data[j].resourceList[p].externalLink == "") {
                                data.data[j].resourceList[p]["domain"] =  domains[ii] ;
                         }
                    }
                    data.data[j]["domain"] =  domains[ii] ;
                    data.data[j]["headUrls"] =  headUrls[domains[ii]] ;
                    data.data[j]["headHrefs"] =  headHrefs[domains[ii]] ;
                    //allData.push(data.data[j]);
                }
                getDataSuccess(data.data, callback);
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
    var commentsUrls = [];
    // var d = data.data;
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
            //console.log(tags);
        }

        d[i].content = marked(d[i].content);
        d[i].content = d[i].content.replace("\n", "<p></p>");
        commentsUrls.push(prefixId + d[i].id+"&"+prefixDomain+d[i].domain);
    }

     callback(d);

    // twikoo.getCommentsCount({
    //     envId: twikooEnvId,
    //     // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
    //     urls: commentsUrls,
    //     includeReply: false // 评论数是否包括回复，默认：false
    // }).then(function(res) {
    //     var commentCountsMap = {};
    //     for (var i = 0; i < res.length; i++) {
    //         commentCountsMap[res[i].url] = res[i].count;
    //     }
    //     for (var i = 0; i < d.length; i++) {
    //         var commentCount = commentCountsMap[prefixId + d[i].id+"&"+prefixDomain+d[i].domain]
    //         if (commentCount != undefined) {
    //             d[i]["commentCount"] = commentCount;
    //         }
    //     }
    //     callback(d);
    // }).
    // catch(function(err) {
    //     console.error(err);
    //     callback(d);
    // });
};


