
// development 
let ipUrl ="http://llblogservice333-env.eba-r2whibsc.eu-west-3.elasticbeanstalk.com/admin/"

 //let ipUrl="http://127.0.0.1:7001/admin/";
 //let ipUrl="http://127.0.0.1:3000/admin/";

let servicePath = {
    checkLogin:ipUrl + 'checkLogin' ,  //  apiurl-check userName and pwd
    getTypeInfo:ipUrl + 'getTypeInfo',  //  apiurl-get article types
    addArticle:ipUrl + 'addArticle',  //  apiurl-post article to db
    updateArticle:ipUrl + 'updateArticle',  //  apiurl-update article, then to db
    getArticleList:ipUrl + 'getArticleList',  //  apiurl-get articles from db
    delArticle:ipUrl + 'delArticle/',  //  apiurl-rm a article from db
    getArticleById:ipUrl + 'getArticleById/'  //  apiurl-rm a article from db
}
export default servicePath;