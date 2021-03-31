type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// Intersection Type Sample
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Gersi',
    privileges: ['Read Only'],
    startDate: new Date()
}

// Intersection Types can be used with any type
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Type Guards => in order to avoid errors with type actions
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmplInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)
    }
}

printEmplInfo(e1);

// Type Guards with Classes
class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a Truck...');
    }

    loadCargo(amount: number) {
        console.log('The Cargo amount is: ' + amount + ' kg.');
    }
}

type Vehicle = Car | Truck;

const bmw = new Car();
const mercedes = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if(vehicle instanceof Truck) {
        vehicle.loadCargo(2000);
    }
}

useVehicle(bmw);
useVehicle(mercedes);