class IncrementService {
    static getNextId() {
        IncrementService.currentId += 1;
        return IncrementService.currentId;
    }
}

IncrementService.currentId = 0;

export default IncrementService;
