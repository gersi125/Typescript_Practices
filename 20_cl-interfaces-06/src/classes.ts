abstract class Department {
  protected employees: string[] = [];

  // readonly makes sure that if you try to write to this property therafter, it fails
  constructor(private readonly id: string, public name: string) {}

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

//----------Inheritance of Classes---------//

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

class HRDepartment extends Department {
  private lastReport: string;
  private static instance: HRDepartment;
  
  // Getter
  get recentReport(){
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  // Setter 
  set recentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid report.');
    }

    this.addReport(value);
  }


  head_directors: string[];

  private constructor(id: string, 
              head_directors: string[], 
              private reports: string[]) 
  {
    super(id, 'HR');
    this.head_directors = head_directors;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(this.instance) {
      return this.instance;
    } 
      this.instance = new HRDepartment('hr', ['Margit Bencic'], []);
      return this.instance;
    
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

}

const humanResources = HRDepartment.getInstance();

humanResources.addEmployee('Ella');
humanResources.addEmployee('Margot');
humanResources.addEmployee('Bill');

humanResources.recentReport = "Year and Report";
humanResources.addReport('New Year 2021 Resolution');
console.log(humanResources.recentReport);

console.log(humanResources);