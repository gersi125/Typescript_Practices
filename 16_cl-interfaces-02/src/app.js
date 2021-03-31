var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // readonly makes sure that if you try to write to this property therafter, it fails
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //private id: string;
        //public name: string;
        this.employees = [];
        //this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department ID: (" + this.id + ")");
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printStaffInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
//const accounting = new Department('Accounting');
//accounting.describe();
//const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
//accountingCopy.describe();
var accounting = new Department('acc', 'Accounting');
accounting.describe();
accounting.addEmployee('Bella');
accounting.addEmployee('Abel');
accounting.addEmployee('Gigi');
accounting.printStaffInfo();
//---Inheritance Sample in Typescript---//
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var programming = new ITDepartment('it', ['Bill']);
programming.describe();
programming.addEmployee('Steve');
programming.addEmployee('Ariana');
programming.addEmployee('Jeff');
console.log(programming);
