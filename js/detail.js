
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
            const {
                createApp
            } = Vue;

            const app = createApp({
                data() {
                    return {
                        data: {},
                        imgUri:"",
                        headUrl:"",
                        headHref:"",
                        domain:""
                    }
                },
                methods: {
                   formatDate(value, args) {
                        return format(value, args);
                    },
                },
                mounted: function() {
                    const that = this;
                    this.imgUri = imgUriPrefix;
                    getData(function(data) {
                        that.data = data;
                    });
                }
            });

            const vm = app.mount('#app');
            var prefix = "id=";

            function getData(callback) {

                $.ajax({
                    type: "GET",
                    url:  getParam("domain") + memosGetApi + getParam("id"),
                    success: function(data) {
                        var commentsUrls = [];
                        var d = data.data;

                        d.content = d.content.lefttrim();
                        var tags = [];
                        if (d.content.indexOf("#") == 0) {
                            var k = 0;
                            for (var j = 0; j < d.content.length; j++) {
                                var temp = j + 1 == d.content.length ? true: false;
                                if (d.content.charAt(j) == " " || d.content.charAt(j) == "\n" || d.content.charAt(j) == "\t" || temp) {
                                    j = temp ? j + 1 : j;
                                    var tag = d.content.substring(k, j);
                                    tags.push(tag);
                                    k = j + 1;
                                    if (d.content.charAt(j + 1) != "#") {
                                        break;
                                    }
                                }
                            }
                            d.content = d.content.substring(k, d.content.length);
                            d["tags"] = tags;
                            //console.log(tags);
                        };

                        for (var p = 0; p <  d.resourceList.length; p++) {
                             if (d.resourceList[p].externalLink == "") {
                                d.resourceList[p]["domain"] =  getParam("domain");
                             }
                        }
                           
                            d["domain"] =  getParam("domain") ;
                            d["headUrls"] =  headUrls[getParam("domain") ] ;
                            d["headHrefs"] =  headHrefs[getParam("domain") ] ;

                        d.content = marked(d.content);
                        d.content = d.content.replace("\n", "<p></p>");

                        d.content = marked(d.content);
                        d.content = d.content.replace("\n", "<p></p>");
                        callback(d);
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            };


            // prefixId + getParam("id") +"&"+prefixDomain+getParam("domain")
    