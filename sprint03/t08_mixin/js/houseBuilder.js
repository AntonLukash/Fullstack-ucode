class houseBlueprint {
    address;
    date = new Date();
    description;
    owner;
    size;
    _averageBuildSpeed = 0.5;
    getDaysToBuild() {
        return this.size / this._averageBuildSpeed;
    }
    roomCount;
};

class HouseBuilder extends houseBlueprint {
    constructor(address, description, owner, size, roomCount) {
        super();
        this.address = address;
        this.description = description;
        this.owner = owner;
        this.size = size;
        this.roomCount = roomCount;
    }
}

