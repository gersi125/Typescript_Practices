// Intersection Tpyes
// Allow us to combine other types

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