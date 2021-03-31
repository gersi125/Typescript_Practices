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
        this.employees = [];
    }
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
    return Department;
}());
//----------Inheritance of Classes---------//
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
var HRDepartment = /** @class */ (function (_super) {
    __extends(HRDepartment, _super);
    // When we want to create one single instance of a certain class
    // we call it a Singleton
    // we can do tis by setting the constructor of that class into private
    function HRDepartment(id, head_directors, reports) {
        var _this = _super.call(this, id, 'HR') || this;
        _this.reports = reports;
        _this.head_directors = head_directors;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(HRDepartment.prototype, "recentReport", {
        // Getter
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found!');
        },
        // Setter 
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid report.');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    HRDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new HRDepartment('hr', ['Margit Bencic'], []);
        return this.instance;
    };
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
var humanResources = HRDepartment.getInstance();
humanResources.addEmployee('Ella');
humanResources.addEmployee('Margot');
humanResources.addEmployee('Bill');
//humanResources.recentReport = '';
humanResources.recentReport = "Year and Report";
humanResources.addReport('New Year 2021 Resolution');
console.log(humanResources.recentReport);
console.log(humanResources);
