abstract class Department {
  // Abstract Classes cannot be instantiated
  // Absrtact classes are mostly used to be inherited from
  // The classes that inherit from abstract classes then can be instantiated
  protected employees: string[] = [];
  // static properties of a Class are those properties that are dettached 
  // from instances of that class
  static fiscalYear = 2020;// static property sample

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return {
      name: name
    }
  }

  describe(this: Department) {
    console.log(`Dept. ID: (${this.id})`);
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee); 
  }

  printStaffInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}



class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}
const employee1 = Department.createEmployee('Silvana');
console.log(employee1, Department.fiscalYear);

const programming = new ITDepartment('it', ['Bill']);

programming.describe();
programming.addEmployee('Steve');
programming.addEmployee('Ariana');
programming.addEmployee('Jeff');

console.log(programming);

abstract class HRDepartment extends Department {
  private lastReport: string;

  get recentReport(){
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  set recentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid report.');
    }

    this.addReport(value);
  }
  head_directors: string[];
  constructor(id: string, head_directors: string[], private reports: string[]) {
    super(id, 'HR');
    this.head_directors = head_directors;
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if(name === 'Bill') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  abstract describe(this: Department): void;
}

//const humanResources = new HRDepartment('hr', ['Margit', 'Julia'], ['2020 Employees Report']);
