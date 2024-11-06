import Domain from "../model/domain.js";

class DomainController {
    constructor() {
        this.domains = [
            new Domain(1, 1, "North"),
            new Domain(2, 1, "South")
        ];
    }

    getAll() {
        return this.domains;
    }
}

export default new DomainController();
