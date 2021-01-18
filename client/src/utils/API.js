const ajax = require("ajax")
module.exports = {
    searchApi: function(){
        
    },
    loginAPI: function(){
        return ajax.get("/login", {
        params: {
            mode: "no-cors"
        }});
    }
}