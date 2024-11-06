export default class User {
    /** Construct a new user, based upon uid and username **/
    constructor(uid, username) {
        this.uid = uid;
        this.username = username;
    }

    /** JSONify **/
    jsonify() {
        return { "uid": this.uid, "username": this.username }
    }
}

//const users = [
//    { 
//        "uid": 1, 
//        "username": "user01"
//    }, {
//        "uid": 2, 
//        "username": "user02"
//    }
//];
//
//exports.users = users;
