"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UpcomingCoursesComponent = (function () {
    function UpcomingCoursesComponent(GetDataService) {
        this.GetDataService = GetDataService;
        this.data = {};
    }
    UpcomingCoursesComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UpcomingCoursesComponent.prototype.getData = function () {
        var _this = this;
        this.GetDataService.getData().subscribe(function (res) { _this.data = res; }, function (error) { return _this.errorMessage = error; });
    };
    UpcomingCoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-upcoming-courses',
            templateUrl: './upcoming-courses.component.html',
            styleUrls: ['./upcoming-courses.component.scss']
        })
    ], UpcomingCoursesComponent);
    return UpcomingCoursesComponent;
}());
exports.UpcomingCoursesComponent = UpcomingCoursesComponent;
//# sourceMappingURL=upcoming-courses.component.js.map