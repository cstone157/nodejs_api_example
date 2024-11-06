export default class Domain {
    /** Construct a new user, based upon uid and username **/
    constructor(uid, event_uid, name) {
        this.uid = uid;
        this.event_uid = event_uid;
        this.name = name;
    }

    /** JSONify **/
    jsonify() {
        return { "uid": this.uid, "event_uid": this.event_uid, "name": this.name }
    }
}

/*const domains = [
    { 
        "uid": 1, 
        "event_uid": 1,
        "name": "north"
    }, {
        "uid": 2, 
        "event_uid": 1,
        "name": "south"
    }
];

//exports.domains = domains;
export { domains };
*/