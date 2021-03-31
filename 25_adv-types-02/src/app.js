var e1 = {
    name: 'Gersi',
    privileges: ['Read Only'],
    startDate: new Date()
};
//Type Guards => in order to avoid errors with type actions
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmplInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmplInfo(e1);
// Type Guards with Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a Truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('The Cargo amount is: ' + amount + ' kg.');
    };
    return Truck;
}());
var bmw = new Car();
var mercedes = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(2000);
    }
}
useVehicle(bmw);
useVehicle(mercedes);
