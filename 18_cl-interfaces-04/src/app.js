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
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // Abstract Classes cannot be instantiated
        // Absrtact classes are mostly used to be inherited from
        // The classes that inherit from abstract classes then can be instantiated
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return {
            name: name
        };
    };
    Department.prototype.describe = function () {
        console.log("Dept. ID: (" + this.id + ")");
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printStaffInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // static properties of a Class are those properties that are dettached 
    // from instances of that class
    Department.fiscalYear = 2020; // static property sample
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var employee1 = Department.createEmployee('Silvana');
console.log(employee1, Department.fiscalYear);
var programming = new ITDepartment('it', ['Bill']);
programming.describe();
programming.addEmployee('Steve');
programming.addEmployee('Ariana');
programming.addEmployee('Jeff');
console.log(programming);
var HRDepartment = /** @class */ (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment(id, head_directors, reports) {
        var _this = _super.call(this, id, 'HR') || this;
        _this.reports = reports;
        _this.head_directors = head_directors;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(HRDepartment.prototype, "recentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found!');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid report.');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    HRDepartment.prototype.addEmployee = function (name) {
        if (name === 'Bill') {
            return;
        }
        this.employees.push(name);
    };
    HRDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    return HRDepartment;
}(Department));
//const humanResources = new HRDepartment('hr', ['Margit', 'Julia'], ['2020 Employees Report']);
