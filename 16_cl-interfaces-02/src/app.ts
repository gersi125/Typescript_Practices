class Department {
  //private id: string;
  //public name: string;
  private employees: string[] = [];

  // readonly makes sure that if you try to write to this property therafter, it fails
  constructor(private readonly id: string, public name: string) {
    //this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ID: (${this.id})`);
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

//const accounting = new Department('Accounting');
//accounting.describe();
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//accountingCopy.describe();

const accounting = new Department('acc', 'Accounting');

accounting.describe();

accounting.addEmployee('Bella');
accounting.addEmployee('Abel');
accounting.addEmployee('Gigi');

accounting.printStaffInfo();

//---Inheritance Sample in Typescript---//

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

const programming = new ITDepartment('it', ['Bill']);

programming.describe();
programming.addEmployee('Steve');
programming.addEmployee('Ariana');
programming.addEmployee('Jeff');

console.log(programming);

