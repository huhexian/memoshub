
/*********************************************************/

var memosGetsApi = "/api/memo/all?limit="+limit+"&offset=";
var memosGetApi = "/api/memo/";
var offset = 0;
var prefixId = "id=";
var prefixDomain = "domain=";
var imgUriPrefix = "/o/r/";

var rendererMD = new marked.Renderer();
 marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
}); 

hljs.initHighlightingOnLoad();

String.prototype.lefttrim = function() {
    return this.replace(/(^\s*)/g, "");
}

function format(value,args){
    var dt = new Date(value*1000);
                if(args == 'yyyy-M-d') {// yyyy-M-d
                let year = dt.getFullYear();
                let month = dt.getMonth() + 1;
                let date = dt.getDate();
                return `${year}-${month}-${date}`;
            } else if(args == 'yyyy-M-d H:m:s'){// yyyy-M-d H:m:s
                let year = dt.getFullYear();
                let month = dt.getMonth() + 1;
                let date = dt.getDate();
                let hour = dt.getHours();
                let minute = dt.getMinutes();
                let second = dt.getSeconds();
                return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
            } else if(args == 'yyyy-MM-dd') {// yyyy-MM-dd
                let year = dt.getFullYear();
                let month = (dt.getMonth() + 1).toString().padStart(2,'0');
                let date = dt.getDate().toString().padStart(2,'0');
                return `${year}-${month}-${date}`;
            } else {// yyyy-MM-dd HH:mm:ss
                let year = dt.getFullYear();
                let month = (dt.getMonth() + 1).toString().padStart(2,'0');
                let date = dt.getDate().toString().padStart(2,'0');
                let hour = dt.getHours().toString().padStart(2,'0');
                let minute = dt.getMinutes().toString().padStart(2,'0');
                let second = dt.getSeconds().toString().padStart(2,'0');
                return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    };
}

function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");　　 //search,查询？后面的参数，并匹配正则
    var r = location.search.substr(1).match(reg);　　
    if (r != null) return decodeURI(decodeURI(r[2]));
};


function sort(json) {
    var arr = [];
    for (var i = 0; i < json.length; i++) {
       var num = 1;
        for (var j  = i+1; j < json.length; j++) {
                if (json[i].updatedTs < json[j].updatedTs) {        
                var temp = json[j];       
                json[j] = json[i];
                json[i] = temp;
            }

        }
    }
    for (var i = 0; i < json.length; i++) {
        arr.push(json[i]);
    }
    return arr;
}

/*********************************************************/