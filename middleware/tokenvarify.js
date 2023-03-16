let jwt = require("jsonwebtoken")

function tokenvarify(req, res){
    var decoded = jwt.verify(req.headers.authorization, 'kire');
}
module.exports = tokenvarify