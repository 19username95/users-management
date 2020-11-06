import { users } from "../mocks/all-users.json";

class IncrementService {
    static getNextId() {
        IncrementService.currentId += 1;
        return IncrementService.currentId;
    }
}

IncrementService.currentId = users.length;

export default IncrementService;
