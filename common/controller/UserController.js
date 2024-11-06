import User from "../model/user.js";

class UserController {
    constructor() {
        this.users = [new User(1, "user01"), new User(2, "user02"), new User(3, "user03")];
    }

    getAll() {
        return this.users;
    }
}

export default new UserController();
