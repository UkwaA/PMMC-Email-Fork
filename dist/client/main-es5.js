(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account-setting/account-setting.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-setting/account-setting.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountSettingAccountSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mt-4 mx-auto\">\r\n            <div class=\"row text-center text-white mb-5\">\r\n                <div class=\"col-lg-7 mx-auto\">\r\n                    <h1>User Account</h1>\r\n                </div>\r\n            </div>\r\n            <form>                \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-bold\">\r\n                            <label>UserName</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"userDetails.Username\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-bold\">\r\n                            <label>Password</label>\r\n                        </div>\r\n                        <div class=\"col-md-3\">•••••••••••••                     \r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-md btn-warning col-md-4\" \r\n                            [routerLink]=\"['/profile/change-current-password']\">\r\n                            Change Password</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 text-bold\">\r\n                            <label>Email</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"userDetails.Email\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>                    \r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav *ngIf=\"visible\" [class.header_change]=\"header_variable\" class=\"navbar navbar-expand-lg navbar-dark fixed-top\" >\r\n  <div class=\"container\">  \r\n  <a  class=\"navbar-brand\" href=\"#\">\r\n    <img src = \"https://files.constantcontact.com/51bd4a7a001/b894f4d9-d76a-48cc-b5b0-3a0d3b8c79cd.png\" width=\"120\" height=\"60\"> </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" routerLink=\"/group-program\" routerLinkActive='active'>Group Program</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" routerLink=\"/individual-program\" routerLinkActive='active'>Individual Program</a>\r\n        </li>\r\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive='active'>Contact</a>\r\n        </li>\r\n        <!-- <li class = \"nav-item\" >\r\n          <a class = \"nav-link\" routerLink=\"/customer-register\"> Register </a>\r\n        </li>\r\n         -->\r\n        <li *ngIf=\"!auth.isLoggedIn()\" class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\" routerLinkActive='active'>Login</a>\r\n        </li>\r\n        <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            {{auth.getUserDetails().Username}}\r\n          </a>\r\n          <div class=\"dropdown-menu animate slideIn\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"nav-link\" routerLink=\"/profile\"> Account </a>\r\n            <a class=\"nav-link\"  (click)=\"auth.logout()\">Logout</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n<!-- Footer -->\r\n<footer *ngIf=\"visible\" class=\"mainfooter\" role=\"contentinfo\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <!--Column Info-->\r\n        <div class=\"footer-info\">\r\n          <h4 style=\"padding-bottom:20px;\">PACIFIC MARINE MAMMAL CENTER</h4>\r\n          <p class=\"text-justify\" style=\"color: rgb(192, 183, 183);\">Our patient are sentinel species of our\r\n            environment. Their intricate involvement on both the terrestrial and marine environments provides us with a\r\n            unique wealth of knowledge.</p>\r\n          <div class=\"social-network fa-lg\">\r\n            <a>Follow Us</a>\r\n            <a style=\"padding-left:25px; color: #0ebbff;\" href=\"https://www.facebook.com/pacificmmc/\" class=\"faFacebook\"\r\n              title=\"faFacebook\">\r\n              <fa-icon [icon]=\"faFacebook\"></fa-icon>\r\n            </a>\r\n            <a style=\"padding-left:25px; color: #0ebbff\" href=\"https://www.youtube.com/channel/UCApjY-oadg3lgl8Ahn3h53Q\"\r\n              class=\"faYoutube\" title=\"faYoutube\">\r\n              <fa-icon [icon]=\"faYoutube\"></fa-icon>\r\n            </a>\r\n            <a style=\"padding-left:25px; color: #0ebbff\"\r\n              href=\"https://www.yelp.com/biz/pacific-marine-mammal-center-laguna-beach\" class=\"faYelp\" title=\"faYelp\">\r\n              <fa-icon [icon]=\"faYelp\"></fa-icon>\r\n            </a>\r\n            <a style=\"padding-left:25px; color: #0ebbff\" href=\"mailto:info@pacificmmc.org\" class=\"faEnvelope\"\r\n              title=\"faEnvelope\">\r\n              <fa-icon [icon]=\"faEnvelope\"></fa-icon>\r\n            </a>\r\n            <div style=\"padding-top:20px; padding-bottom:20p;\">\r\n              <div class=\"subscribe-wrapper subscribe2-wrapper mb-15\">\r\n                <div class=\"subscribe-form\">\r\n                  <form action=\"#\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <input placeholder=\"Enter Your Email\" type=\"email\"\r\n                      style=\"background: none; border: 1px solid #fff; border-radius: 30px; color: #fff; display: inline-block;\r\n                            font-size: 18px; font-weight: 200; height: 40px; margin-right: 12px; padding-left: 35px; width: 70%; cursor: pointer;\" class=\"form-control\"\r\n                      formControlName=\"subscribeEmail\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.subscribeEmail.errors }\">\r\n                    <button\r\n                      style=\" background: #ffff; border: none; border-radius: 30px; color: #4b5d73; display: inline-block; font-size: 15px;\r\n                            font-weight: 400; line-height: 1; padding: 12px 15px; transition: all 0.3s ease 0s;\">Subscribe\r\n                      <i class=\"fas fa-long arrow-alt-right\"></i>\r\n                    </button>\r\n                    <div *ngIf=\"submitted && f.subscribeEmail.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.subscribeEmail.errors.required\">Email is required</div>\r\n                      <div *ngIf=\"f.subscribeEmail.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-2\">\r\n        <!--Column1-->\r\n        <div class=\"footer-pad\">\r\n          <h5 style=\"padding-bottom:20px;\">Useful Links</h5>\r\n          <p class=\"link\" style=\"line-height:200%;\">\r\n            <a style=\"color: rgb(192, 183, 183);\" href=\"#\">Home</a>\r\n            <br /><a style=\"color: rgb(192, 183, 183);\" routerLink=\"/login\">Login</a>\r\n            <br /><a style=\"color: rgb(192, 183, 183);\" routerLink=\"/register\">Register</a>\r\n            <br /><a style=\"color: rgb(192, 183, 183);\" routerLink=\"/contact\">Contacts</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <!--Column1-->\r\n        <div class=\"footer-pad\">\r\n          <h5 style=\"padding-bottom:20px;\">Visit Us</h5>\r\n          <p style=\"color: rgb(192, 183, 183); line-height:200%;\" class=\"info\">\r\n            <fa-icon [icon]=\"faDoorOpen\"></fa-icon> Open Daily 10AM - 4PM Pacific\r\n            <br />\r\n            <fa-icon [icon]=\"faLaughWink\"></fa-icon> Admission is FREE\r\n            <br />\r\n            <fa-icon [icon]=\"faHandHoldingUsd\"></fa-icon> Donations are Welcome!\r\n            <br />\r\n            <fa-icon [icon]=\"faPhone\"></fa-icon> (949) 494-3050\r\n            <br />\r\n            <fa-icon [icon]=\"faMapMarkedAlt\"></fa-icon> 20612 Laguna Canyon Road, Laguna Beach, CA 92651\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div style=\"padding-top:20px;\" class=\"Policy-Term text-center\">\r\n        <a style=\"color: white;\" href=\"https://www.pacificmmc.org/privacy-policy\">Privacy Policy </a>\r\n        <a style=\"color: white;\" href=\"https://www.pacificmmc.org/terms-of-use\">| Term of Use</a>\r\n        <p>Copyright © 2020 Pacific Marine Mammal Center. All rights reserved.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-group-program/booking-group-program.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-group-program/booking-group-program.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingGroupProgramBookingGroupProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row text-left\">\r\n            <h1>{{programDetails.Name}}</h1>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div [innerHTML]=\"programDetails.Description\"></div>\r\n    </div>\r\n    <hr>\r\n    <!-- <div class=\"row text-left\" style=\"font-weight: bold;\">\r\n      <p>${{programDetails.FullAmount}}</p>\r\n    </div>\r\n    <hr> -->\r\n  \r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n      <!-- Adult Quantity -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.AdultQuantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"AldultQuantity\">Adult Quantity: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"AldultQuantity\" \r\n                  [ngClass]=\"{'is-invalid': submitted && f.AldultQuantity.errors }\">\r\n            <div *ngIf=\"submitted && f.AldultQuantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.AldultQuantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.AldultQuantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Age 5-7 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age57Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age57Quantity\">Children Age 5-7: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age57Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age57Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age57Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age57Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age57Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Age 8-10 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age810Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age810Quantity\">Children Age 8-10: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age810Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age810Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age810Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age810Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age810Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Age 11-12 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age1112Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age1112Quantity\">Children Age 11-12: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age810Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age1112Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age1112Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age1112Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age1112Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n       <!-- Age 13-14 -->\r\n       <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age1314Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age1314Quantity\">Children Age 13-14: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age810Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age1314Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age1314Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age1314Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age1314Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n       <!-- Age 14-15 -->\r\n       <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age1415Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age1415Quantity\">Children Age 14-15: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age810Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age1415Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age1415Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age1415Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age1415Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n       <!-- Age 15-17 -->\r\n       <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Age1517Quantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Age1517Quantity\">Children Age 15-17: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"number\" min = \"0\" max = \"35\" placeholder=\"\" formControlName=\"Age810Quantity\" \r\n                    [ngClass]=\"{'is-invalid': submitted && f.Age1517Quantity.errors }\">\r\n            <div *ngIf=\"submitted && f.Age1517Quantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.Age1517Quantity.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.Age1517Quantity.errors.max\">Maximum for a group is 35</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Organization Name -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.OrganizationName\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"OrganizationName\">School Name: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"OrganizationName\" \r\n                  [ngClass]=\"{'is-invalid': submitted && f.OrganizationName.errors }\">\r\n            <div *ngIf=\"submitted && f.OrganizationName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.OrganizationName.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.OrganizationName.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Teacher Name -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.TeacherName\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"TeacherName\">Teacher Name: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"TeacherName\" \r\n                  [ngClass]=\"{'is-invalid': submitted && f.TeacherName.errors }\">\r\n            <div *ngIf=\"submitted && f.TeacherName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.TeacherName.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.TeacherName.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Teacher Email -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.TeacherEmail\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"TeacherEmail\">Teacher Email: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"TeacherEmail\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.TeacherEmail.errors }\" />\r\n            <div *ngIf=\"submitted && f.TeacherEmail.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.TeacherEmail.errors.required\">Email is required</div>\r\n                <div *ngIf=\"f.TeacherEmail.errors.email\">Email must be a valid email address</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Teacher Phone Number -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.TeacherPhoneNo\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"TeacherPhoneNo\">Teacher Phone Number: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"xxx-xxx-xxxx\" formControlName=\"TeacherPhoneNo\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.TeacherPhoneNo.errors }\" />\r\n            <div *ngIf=\"submitted && f.TeacherPhoneNo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.TeacherPhoneNo.errors.required\">This is required</div>\r\n              <div *ngIf=\"f.TeacherPhoneNo.errors.minlength\">Please enter correct phone number</div>\r\n              <!-- <div *ngIf=\"f.TeacherPhoneNo.errors.pattern\">Invalid Phone Number</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Grade Level  -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.GradeLevel\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"GradeLevel\">Grade Level </label>\r\n          <div class=\"col-sm-10\">\r\n            <select class=\"form-control\" formControlName=\"GradeLevel\" [ngClass]=\"{ 'is-invalid': submitted && f.GradeLevel.errors }\">\r\n              <option>Kindergarten </option>\r\n              <option>1st</option>\r\n              <option>2nd</option>\r\n              <option>3rd</option>\r\n              <option>4th</option>\r\n              <option>5th</option>\r\n              <option>6th</option>\r\n              <option>7th</option>\r\n              <option>8th</option>\r\n              <option>9th</option>\r\n              <option>10th</option>\r\n              <option>11th</option>\r\n              <option>12th</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.GradeLevel.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.GradeLevel.errors.required\">This is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Total Quantity   -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.TotalQuantity\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"TotalQuantity\">Number of Participating Students: </label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"TotalQuantity\" \r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.TotalQuantity.errors }\">\r\n            <div *ngIf=\"submitted && f.TotalQuantity.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.TotalQuantity.errors.required\">This is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Program Restriction  -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.ProgramRestriction\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"ProgramRestriction\">Are you a Title One School? </label>\r\n          <div class=\"col-sm-10\">\r\n            <select class=\"form-control\" formControlName=\"ProgramRestriction\" [ngClass]=\"{ 'is-invalid': submitted && f.ProgramRestriction.errors }\">\r\n              <option>No </option>\r\n              <option>Yes</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.ProgramRestriction.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.ProgramRestriction.errors.required\">This is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.MaximumParticipant\">\r\n        <label for=\"MaximumParticipant\">There is a restriction on the maximum participants.</label>\r\n      </div>\r\n      <!-- Deposit  -->\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.Deposit\">\r\n        <label for=\"Deposit\">This program requires deposit. </label>\r\n      </div>\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.DepositAmount\">\r\n        <label for=\"DepositAmount\">Deposit Amount: $$$$ </label>\r\n      </div>\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingGroup.FullAmount\">\r\n        <label for=\"FullAmount\">This program requires you to pay full amount. </label>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n    </form>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-individual-program/booking-individual-program.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking-individual-program/booking-individual-program.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookingIndividualProgramBookingIndividualProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container\">\r\n  <div class=\"row text-left\">\r\n    <h1>{{programDetails.Name}}</h1>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div [innerHTML]=\"programDetails.Description\"></div>\r\n  </div>\r\n  <hr>\r\n <!--  <div class=\"row text-left\" style=\"font-weight: bold;\">\r\n    <p>${{programDetails.FullAmount}}</p>\r\n  </div>\r\n  <hr> -->\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.ParticipantName\">\r\n      <div class=\"row\">\r\n        <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"ParticipantName\">Participant Name:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"Full name\" formControlName=\"ParticipantName\" \r\n          [ngClass]=\"{'is-invalid': submitted && f.ParticipantName.errors }\">\r\n          <div *ngIf=\"submitted && f.ParticipantName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.ParticipantName.errors.required\">Paticipant Name is required</div>\r\n            <div *ngIf=\"f.ParticipantName.errors.minlength\">Must be at least 3 characters long.</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- Participant Age -->\r\n    <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.ParticipantAge\">\r\n      <div class=\"row\">\r\n        <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"ParticipantAge\">Participant Age: </label>\r\n        <div class=\"col-sm-10\">\r\n          <input class=\"form-control\" type=\"number\" min = \"5\" max = \"18\" placeholder=\"\" formControlName=\"ParticipantAge\"\r\n                [ngClass]=\"{'is-invalid': submitted && f.ParticipantAge.errors }\">\r\n          <div *ngIf=\"submitted && f.ParticipantAge.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.ParticipantAge.errors.required\">Paticipaant Age is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- Gender -->\r\n    <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.Gender\">\r\n      <div class=\"row\">\r\n        <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"Gender\">Gender: </label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"form-control\" formControlName=\"Gender\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.Gender.errors }\">\r\n          <option>Male</option>\r\n          <option>Female</option>\r\n        </select>\r\n        <div *ngIf=\"submitted && f.Gender.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.Gender.errors.required\">Gender is required</div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- T-Shirt Size -->\r\n    <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.MerchSize\">\r\n      <div class=\"row\">\r\n        <label class=\"col-form-label col-sm-2 pt-0 pl-0\" for=\"MerchSize\">T-Shirt Size: </label>\r\n        <div class=\"col-sm-10\">\r\n          <select class=\"form-control\" formControlName=\"MerchSize\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.MerchSize.errors }\">\r\n            <option>Youth Small</option>\r\n            <option>Youth Medium</option>\r\n            <option>Youth Large</option>\r\n            <option>Youth X Large</option>\r\n            <option>Aldult Small</option>\r\n            <option>Aldult Medium</option>\r\n            <option>Aldult Large</option>\r\n          </select>\r\n          <div *ngIf=\"submitted && f.MerchSize.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.MerchSize.errors.required\">Gender is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n    <!-- Allergy Info -->\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.AllergyInfo\">\r\n        <label for=\"AllergyInfo\">Allergy Information: </label>\r\n        <textarea class=\"form-control\" id=\"AllergyInfo\" rows=\"3\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.SpecialInfo\">\r\n        <label for=\"SpecialInfo\">Special Information: </label>\r\n        <textarea class=\"form-control\" id=\"SpecialInfo\" rows=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"form-group card bg-light font-weight-bold pl-3\" *ngIf = \"bookingIndividual.MediaRelease\">\r\n        <label for=\"MediaRelease\">Media Release: </label>\r\n        <div class=\"media_release row\">\r\n          <p> I hereby authorize the Pacific Marine Mammal Center to take and possibly use pictures of my child as advertising on our website at www.pacificmmc.org.</p>\r\n          <p> I HAVE READ AND UNDERSTOOD ALL OF THE INFORMATION WRITTEN AND BY CHECKING THIS BOX, I AGREE TO ADHERE TO THE TERMS OF THIS DOCUMENT.</p>\r\n        </div>\r\n        <div class = \"form_checkbox row\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"MediaRelease\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.MediaRelease.errors }\">\r\n          <label class=\"form-check-label\" for=\"MediaRelease\">\r\n            I agree.\r\n          </label>\r\n          <div *ngIf=\"submitted && f.MediaRelease.errors\" class=\"invalid-feedback\">Accept Media Release is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group card bg-light font-weight-bold\" *ngIf = \"bookingIndividual.EmergencyMedicalRelease\">\r\n        <label for=\"EmergencyMedicalRelease\">Emergency Medical Release: </label>\r\n        <div class=\"row\">\r\n          <p>In case of emergency, the Pacific Marine Mammal Center will make every effort to contact the guardians of the child involved before any treatment has begun. However, in the event we are unable to contact you, the guardians, we require this medical release to be signed for all participants in the program.</p>\r\n          <h6>I HEREBY AUTHORIZE THE PHYSICIAN OR HOSPITAL SELECTED BY THE PACIFIC MARINE MAMMAL CENTER TO HOSPITILIZE, SECURE TREATMENT FOR, AND ORDER INJECTION, ANESTHESIA, OR SURGERY FOR MY CHILD.</h6>\r\n          <p>It is further understood that if you check this box, you will assume full responsibility for any such treatment, including the payment of all costs, and will hold the Pacific Marine Mammal Center, its representatives, directors, counselors and staff, harmless.</p>\r\n          <p>In the event of an evacuation emergency, I give permission for PMMC to transport my child to the following safety evacuation location:</p>\r\n          <p>Geneva Presbyterian Church\r\n            24301 El Toro Rd, Laguna Woods, CA 92637</p>\r\n          <h6>I HAVE READ AND UNDERSTOOD ALL OF THE INFORMATION WRITTEN AND BY CHECKING THIS BOX, I AGREE TO ADHERE TO THE TERMS OF THIS DOCUMENT. IT IS FURTHER UNDERSTOOD THAT POLICIES AND TERMS OF THIS DOCUMENT MAY BE CHANGED AND AMENDED AS NEEDED AND THAT I SHALL BE INFORMED, IN WRITING, OF SUCH CHANGES.</h6>\r\n        </div>\r\n        <div class = \"form_checkbox row\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"EmergencyMedicalRelease\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.EmergencyMedicalRelease.errors }\">\r\n          <label class=\"form-check-label\" for=\"EmergencyMedicalRelease\">\r\n            I agree.\r\n          </label>\r\n          <div *ngIf=\"submitted && f.EmergencyMedicalRelease.errors\" class=\"invalid-feedback\">Accept Emergency Medical Release is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group card bg-light font-weight-bold\" *ngIf = \"bookingIndividual.LiabilityAgreement\">\r\n        <label for=\"LiabilityAgreement\">Liability Agreement: </label>\r\n        <div class=\"row\">\r\n          <p>I hereby acknowledge that I am the parent or legal guardian of the child who I have registered to participate in services and programs offered by Pacific Marine Mammal Center.  I recognize that children at play may suffer injuries despite adequate supervision. I know of the risks involved, accept them, and I nonetheless have voluntarily enrolled my child at Pacific Marine Mammal Center.</p>\r\n          <p>I hereby grant the Pacific Marine Mammal Center (PMMC) and news media outlets permission to use my child’s photograph or video in any and all of their publications. I hereby irrevocably authorize them to edit, alter, copy, exhibit, publish or distribute the photo or video for any lawful purpose.</p>\r\n          <p>In consideration of the services rendered by Pacific Marine Mammal Center, I agree that I, my heirs, executors, assigns, beneficiaries, or anyone claiming by or through me will not make a claim against, sue, attach the property of, or prosecute Pacific Marine Mammal Center, its employees, officers, directors, agents, servants, or volunteers for injury or damage resulting from the negligence or other acts, howsoever caused, connected to, arising out of, or as a result of, the provision of its services and programs, or my child's receipt of said services or participation in said programs.</p>\r\n          <p>In addition, I hereby release and discharge Pacific Marine Mammal Center from all causes of action, claims, or demands that I, my heirs, executors, assigns, beneficiaries, or anyone claiming by or through me many now have or may hereafter have for injury or damage resulting from my child's participation in Pacific Marine Mammal Center’s programs and services.</p>\r\n          <p>I further agree to indemnify, defend, and to hold harmless Pacific Marine Mammal Center arising out of any claims and demands whether made by or on behalf of my child or any other per-son or entity for either injuries to my child's person or property, or arising out of claims that my child's actions caused injury or damage to another person or property, whether or not such claims, injuries and damages were in fact caused or contributed to by Pacific Marine Mammal Center.</p>\r\n        </div>\r\n        <div class = \"form_checkbox row\">\r\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"LiabilityAgreement\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.LiabilityAgreement.errors }\">\r\n          <label class=\"form-check-label\" for=\"LiabilityAgreement\">\r\n            I agree.\r\n          </label>\r\n          <div *ngIf=\"submitted && f.LiabilityAgreement.errors\" class=\"invalid-feedback\">Accept Liability Agreement is required</div>\r\n        </div>\r\n      </div>\r\n      <!-- Name of Insurance Carrier -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.InsureProviderName\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"InsureProviderName\">Name of Insurance Carrier: </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"InsureProviderName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.InsureProviderName.errors }\">\r\n            <div *ngIf=\"submitted && f.InsureProviderName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.InsureProviderName.errors.required\">Insurance Carrier's Name is required</div>\r\n              <div *ngIf=\"f.InsureProviderName.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div> \r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Name of Insured Child -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.InsureRecipientName\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"InsureRecipientName\">Name of Insured Child:  </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"InsureRecipientName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.InsureRecipientName.errors }\">\r\n            <div *ngIf=\"submitted && f.InsureRecipientName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.InsureRecipientName.errors.required\">Insurance Recipient's Name is required</div>\r\n              <div *ngIf=\"f.InsureRecipientName.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <!-- Insurance Policy Number -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.InsurePolicyNo\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"InsurePolicyNo\">Insurance Policy Number:  </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"\" formControlName=\"InsurePolicyNo\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.InsurePolicyNo.errors }\">\r\n            <div *ngIf=\"submitted && f.InsurePolicyNo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.InsurePolicyNo.errors.required\">Insurance Policy Number is required</div>\r\n              <div *ngIf=\"f.InsurePolicyNo.errors.minlength\">Please enter correct Policy number</div>\r\n              <!-- <div *ngIf=\"f.InsurePolicyNo.errors.pattern\">Invalid Number</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Insurance Phone Number -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.InsurePhoneNo\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"InsurePhoneNo\">Insurance Phone Number:  </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"xxx-xxx-xxxx\" formControlName=\"InsurePhoneNo\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.InsurePhoneNo.errors }\">\r\n            <div *ngIf=\"submitted && f.InsurePhoneNo.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.InsurePhoneNo.errors.required\">Insurance Phone Number is required</div>\r\n              <div *ngIf=\"f.InsurePhoneNo.errors.minlength\">Please enter correct phone number</div>\r\n              <!-- <div *ngIf=\"f.InsurePhoneNo.errors.pattern\">Invalid Phone Number</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Authorized Pickup Name 1 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.AuthorizedPickupName1\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"AuthorizedPickupName1\">Authorized Pick Up Name #1: </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Full name\" formControlName=\"AuthorizedPickupName1\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.AuthorizedPickupName1.errors }\">\r\n            <div *ngIf=\"submitted && f.AuthorizedPickupName1.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.AuthorizedPickupName1.errors.required\">Authorized Pickup Name is required</div>\r\n              <div *ngIf=\"f.AuthorizedPickupName1.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Authorized Pickup Phone 1 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.AuthorizedPickupPhone1\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"AuthorizedPickupPhone1\">Authorized Pick Up Phone Number #1: </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"xxx-xxx-xxxx\" formControlName=\"AuthorizedPickupPhone1\" \r\n                [ngClass]=\"{ 'is-invalid': submitted && f.AuthorizedPickupPhone1.errors }\">\r\n            <div *ngIf=\"submitted && f.AuthorizedPickupPhone1.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.AuthorizedPickupPhone1.errors.required\">Authorized Pickup Phone is required</div>\r\n              <div *ngIf=\"f.AuthorizedPickupPhone1.errors.minlength\">Please enter correct phone number</div>\r\n              <!-- <div *ngIf=\"f.AuthorizedPickupPhone1.errors.pattern\">Invalid Phone Number</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Authorized Pickup Name 2 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.AuthorizedPickupName2\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"AuthorizedPickupName2\">Authorized Pick Up Name #2: </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Full name\" formControlName=\"AuthorizedPickupName2\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.AuthorizedPickupName2.errors }\">\r\n            <div *ngIf=\"submitted && f.AuthorizedPickupName2.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.AuthorizedPickupName2.errors.required\">Authorized Pickup Name is required</div>\r\n              <div *ngIf=\"f.AuthorizedPickupName2.errors.minlength\">Must be at least 3 characters long.</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Authorized Pickup Phone 2 -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.AuthorizedPickupPhone2\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"AuthorizedPickupPhone2\">Authorized Pick Up Phone Number #2: </label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"xxx-xxx-xxxx\" formControlName=\"AuthorizedPickupPhone2\" \r\n                [ngClass]=\"{ 'is-invalid': submitted && f.AuthorizedPickupPhone2.errors }\">\r\n            <div *ngIf=\"submitted && f.AuthorizedPickupPhone2.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.AuthorizedPickupPhone2.errors.required\">Authorized Pickup Phone is required</div>\r\n              <div *ngIf=\"f.AuthorizedPickupPhone2.errors.minlength\">Please enter correct phone number</div>\r\n              <!-- <div *ngIf=\"f.AuthorizedPickupPhone2.errors.pattern\">Invalid Phone Number</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Early Dropoff -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.EarlyDropOff\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"EarlyDropOff\">Early Drop Off: </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"EarlyDropOff\" \r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.EarlyDropOff.errors }\">\r\n              <option>No, thanks! (+$0) </option>\r\n              <option>Monday Early Drop Off (+$7)</option>\r\n              <option>Tueday Early Drop Off (+$7)</option>\r\n              <option>Wednesday Early Drop Off (+$7)</option>\r\n              <option>Thursday Early Drop Off (+$7)</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.EarlyDropOff.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.EarlyDropOff.errors.required\">This is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <!-- Late Pickup -->\r\n      <fieldset class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.LatePickup\">\r\n        <div class=\"row\">\r\n          <label class=\"col-form-label col-sm-3 pt-0 pl-0\" for=\"LatePickup\">Late Pick Up: </label>\r\n          <div class=\"col-sm-9\">\r\n            <select class=\"form-control\" formControlName=\"LatePickup\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.LatePickup.errors }\">\r\n              <option>No, thanks! (+$0) </option>\r\n              <option>Monday Late Pick-Up (+$7)</option>\r\n              <option>Tueday Late Pick-Up  (+$7)</option>\r\n              <option>Wednesday Late Pick-Up  (+$7)</option>\r\n              <option>Thursday Late Pick-Up  (+$7)</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.LatePickup.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.LatePickup.errors.required\">This is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <!-- <div class=\"form-group font-weight-bold\" *ngIf = \"bookingIndividual.FullAmount\">\r\n        <label for=\"FullAmount\">This program requires you to pay full amount. </label>\r\n      </div> -->\r\n      <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/g-program/g-program.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/g-program/g-program.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGProgramGProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <h4 class=\"text-center\">Choose the options you'd like to display:</h4>\r\n  <div class=\"row\">\r\n    <div class = \"col-sm-6\" *ngFor = 'let item of varLabels'>\r\n      <section class=\"options-section\">\r\n        <mat-checkbox class=\"options-margin\" [(ngModel)]=\"bookingGroup[item.var]\" (change)=\"chkbDataChange($event)\">\r\n          <div data-toggle=\"tooltip\" title=\"{{item.tooltip}}\" >\r\n            {{item.label}}\r\n          </div>\r\n        </mat-checkbox>\r\n      </section>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"button pt-5 pb-5\">\r\n    <button class=\"btn btn-lg btn-info btn-block \" type=\"submit\" (click)=\"openModal()\">Update Program Requirement</button>\r\n  </div> -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/i-program/i-program.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/i-program/i-program.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIProgramIProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h4 class=\"text-center\">Choose the options you'd like to display:</h4>\r\n    <div class=\"row\">\r\n      <div class = \"col-sm-6\" *ngFor = 'let item of varLabels'>\r\n        <section class=\"options-section\">\r\n          <mat-checkbox class=\"options-margin\" [(ngModel)]=\"bookingIndividual[item.var]\" (change)=\"chkbDataChange($event)\">\r\n            <div data-toggle=\"tooltip\" title=\"{{item.tooltip}}\">\r\n            {{item.label}}\r\n            </div>\r\n          </mat-checkbox>\r\n        </section>  \r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"button pt-5 pb-5\">\r\n      <button class=\"btn btn-lg btn-info btn-block \" type=\"submit\" (click)=\"openModal()\">Update Program Requirement</button>\r\n    </div> -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-dialog/modal-dialog.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-dialog/modal-dialog.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalDialogModalDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"modal-content-wrapper\">\r\n    <header id=\"modal-header\">\r\n        <h1 id=\"modal-title\">{{modalData.title}}</h1>\r\n    </header>\r\n    <mat-divider></mat-divider>\r\n    <section id=\"modal-body\">\r\n        <p>{{modalData.description}}</p>\r\n    </section>\r\n    <mat-divider></mat-divider>\r\n    <footer id=\"modal-footer\">\r\n        <button mat-raised-button id=\"modal-action-button\" (click)=\"actionFunction()\">\r\n            {{modalData.actionButtonText}}\r\n        </button>\r\n        <button *ngIf = \"modalData.numberOfButton == '2'\" mat-raised-button id=\"modal-cancel-button\" (click)=\"closeModal()\">\r\n            Cancel\r\n        </button>\r\n    </footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container py-5\">\r\n  <div class=\"row text-center text-white mb-5\">\r\n      <div class=\"col-lg-7 mx-auto\">\r\n          <h1>Contact</h1>\r\n      </div>\r\n  </div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">      \r\n      <form *ngIf=\"!loading\" [formGroup] = \"myForm\" (ngSubmit)=\"submit(myForm.value)\"> \r\n        <mat-form-field class=\"inputField\">\r\n          <input matInput type=\"text\" formControlName = \"fullName\" placeholder = \"Full Name\" >\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputField\">\r\n          <input matInput type=\"email\" formControlName = \"email\" placeholder = \"Email\">\r\n          <!-- <mat-placeholder style=\"color:white\">Email</mat-placeholder> -->\r\n          <mat-error *ngIf = \"email.invalid && email.touched\">\r\n            Email is invalid\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputField\">\r\n          <input matInput type=\"text\" formControlName = \"subject\" placeholder = \"Subject\">\r\n          <!-- <mat-placeholder style=\"color:white\">Subject</mat-placeholder> -->\r\n          <mat-error *ngIf = \"subject.touched\">\r\n            Minimum 3 characters\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput type=\"text\" formControlName = \"message\" placeholder = \"Your Messages\"> </textarea>\r\n          <!-- <mat-placeholder style=\"color:white\">Your Messages</mat-placeholder> -->\r\n          <mat-error *ngIf = \"message.touched\">\r\n            Minimum 5 characters\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <div class=\"text-right\">\r\n          <button mat-raised-button [disabled]=\"myForm.invalid\" type=\"submit\" \r\n          class=\"btn btn-primary btn-lg active\" aria-pressed=\"true\" data-toggle=\"modal\" data-target=\"#ModalCenter\">\r\n          Submit</button>\r\n          \r\n        </div>\r\n      </form>\r\n      <!-- Modal -->\r\n      <div class=\"modal fade \" id=\"ModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" >\r\n            <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{modalHeader}}</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{modalContent}}\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click) = \"reset()\">Close</button>                                  \r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div><!-- Modal Ends -->\r\n    </div>\r\n    <div class=\"col-md-6\" style=\"padding-bottom: 50px;\">\r\n      <div id=\"map-container-google-11\" class=\"z-depth-1-half map-container-6\" style=\"height: 400px;\">\r\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2463201415467!2d-117.76466114915011!3d33.57295325018747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce6748ce46f67%3A0x253e5efc8f4271f!2sPacific%20Marine%20Mammal%20Center!5e0!3m2!1sen!2sus!4v1581394621910!5m2!1sen!2sus\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createprogram/createprogram.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createprogram/createprogram.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateprogramCreateprogramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mt-4 mb-5 mx-auto\">\r\n            <form (submit)=\"createProgram()\" enctype=\"multipart/form-data\">\r\n                <h1 class=\"text-center\">Create Program Information</h1>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <label>Program Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter Program Name\"\r\n                        [(ngModel)]=\"programData.Name\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"des font-weight-bold\">\r\n                        <label>Description</label>\r\n                    </div>\r\n                    <ckeditor [editor]=\"Editor\" style=\"box-shadow: black;\" data=\"\" (ready)=\"onReady($event)\" name=\"editor\" [(ngModel)]=\"programData.Description\"></ckeditor>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <label>Deposit Amount</label>\r\n                    <input type=\"number\" class=\"form-control\" name=\"deposit\" placeholder=\"Enter Program Deposit Require\" [(ngModel)]=\"programData.DepositAmount\" required>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <label>Price Per Participant</label>\r\n                    <input type=\"number\" class=\"form-control\" name=\"fullamount\" placeholder=\"Enter Price for 1 Participant\" [(ngModel)]=\"programData.PricePerParticipant\" required>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <label>Maximum Number of Participant</label>\r\n                    <input type=\"number\" class=\"form-control\" name=\"numerofParticipant\" placeholder=\"Enter Number of Participant\" [(ngModel)]=\"programData.MaximumParticipant\" required>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Image</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"file\" (change)=\"onFileChange($event)\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Program Type</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <select id=\"programCat\" (change)=\"selectChangeHandler($event)\" >\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Sub Type Of Group Program</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <select id=\"programSubCategories\" (change)=\"selectSubTypeChangeHandler($event)\" >\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"button pt-5 pb-5\">\r\n                    <button class=\"btn btn-lg btn-info btn-block\" type=\"submit\">Create Program</button>\r\n                </div>  \r\n            </form>\r\n               \r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-info/customer-info.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer-info/customer-info.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerInfoCustomerInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = \"banner\">\r\n    <div class = \"container\">\r\n        <div class=\"d-flex justify-content-center h-100\"></div>\r\n            <div class = \"card\">\r\n                <div class = \"card-header\">\r\n                    <h3 class = \"text_header text-center\"> Personal Info </h3>\r\n                </div>\r\n                <div class = \"card-body\">\r\n                <form [formGroup] = \"customerInfoForm\" (ngSubmit) = \"openModal()\" \r\n                ng-class=\"{submitted:this.submitted}\" class=\"registerform\">\r\n                <div class = \"contact_header_title row justify-content-center\"> \r\n                    <h5 class = \"text_header text-center mb-1\"> </h5>\r\n                </div>\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faAddressBook\"></fa-icon></span>\r\n                    </div>\r\n                    <input id = \"fname\" type = \"string\" class = \"form-control\" placeholder = \"First Name\"\r\n                    formControlName=\"firstName\" \r\n                    [(ngModel)]=\"credentials.FirstName\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('firstName').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('firstName').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>First name is required </small></div>\r\n                </div>\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faAddressBook\"></fa-icon></span>\r\n                    </div>\r\n                    <input id = \"fname\" type = \"string\" class = \"form-control\" placeholder = \"Last Name\" \r\n                    formControlName=\"lastName\" \r\n                    [(ngModel)]=\"credentials.LastName\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('lastName').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('lastName').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>Last name is required </small></div>\r\n                </div>\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faPhoneSquare\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"number\" class = \"form-control\" placeholder = \"Phone Number\"\r\n                    formControlName=\"phoneNum\" \r\n                    [(ngModel)]=\"credentials.PhoneNo\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('phoneNum').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('phoneNum').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>Phone number is required </small></div>\r\n                </div>\r\n                <div class = \"address_header_title row justify-content-center\"> \r\n                    <h5 class = \"text_header text-center mt-3 mb-3\">  </h5>\r\n                </div>\r\n\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faHome\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"string\" class = \"form-control\" placeholder = \"Street Address\"\r\n                    formControlName=\"address_street\" \r\n                    [(ngModel)]=\"credentials.StreetAddress\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('address_street').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('address_street').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>Street Address is required </small></div>\r\n                </div>\r\n\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faHome\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"string\" class = \"form-control\" placeholder = \"Line 2\" \r\n                    formControlName=\"address_unit\" \r\n                    [(ngModel)]=\"credentials.StreetAddress2\">\r\n                </div> \r\n\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faMapPin\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"string\" class = \"form-control\" placeholder  = \"City\"\r\n                    formControlName=\"address_city\" \r\n                    [(ngModel)]=\"credentials.City\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('address_city').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('address_city').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>City is required </small></div>\r\n                </div>\r\n\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faMap\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"string\" class = \"form-control\" maxlength = \"2\" placeholder = \"State\"\r\n                    formControlName=\"address_state\" \r\n                    [(ngModel)]=\"credentials.State\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('address_state').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('address_state').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>State is required </small></div>\r\n                </div>\r\n\r\n                <div class = \"input-group form-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><fa-icon [icon]=\"faMapMarker\"></fa-icon></span>\r\n                    </div>\r\n                    <input type = \"number\" class = \"form-control\" maxlength = \"5\" placeholder = \"Zip Code\"\r\n                    oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\r\n                    formControlName=\"address_zipcode\" \r\n                    [(ngModel)]=\"credentials.Zipcode\" [ngClass]=\"{ 'is-invalid': submitted && !customerInfoForm.get('address_zipcode').valid}\">\r\n                    <div *ngIf=\"submitted && !customerInfoForm.get('address_zipcode').valid\" \r\n                    class = \"warning col-12 pl-0\"> <small>Zip Code is required </small></div>\r\n                </div>\r\n\r\n                <div class = \"form-group checkbox\">\r\n                    <mat-checkbox color = \"primary\" class = \"form-control\" (change) = \"checkBoxClicked()\"> Check to subscribe to our newsletter </mat-checkbox>\r\n                </div>\r\n\r\n            <div class = \"d-flex submit_button flex-row-reverse\"> \r\n                <button  class = \"submit_btn btn btn-primary\" [disabled] = \"customerInfoForm.ng-invalid\" type=\"submit\"> Submit </button>\r\n            </div>\r\n        </form>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 *ngIf = \"role == '3'\"> Admin's Dashboard</h1>\r\n<h1 *ngIf = \"role == '2'\"> Program Manager's Dashboard</h1>\r\n<h1 *ngIf = \"role == '1'\"> User's Dashboard</h1>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/group-program/group-program.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group-program/group-program.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGroupProgramGroupProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row text-center mb-5\">\r\n        <div class=\"col-lg-7 mx-auto\">\r\n            <h1 class=\"title\">Group Program List</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-5 filter\">\r\n        <div class=\"col-lg-10 col-md-9 col-sm-8 p-0\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type in Program Name or Description to Search\" [(ngModel)]=\"searchText\">\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-3 col-sm-4\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"clearSearch()\">Clear Search</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\"  *ngFor = 'let program of programs | filter:searchText' >\r\n        <div class=\"col-lg-12 mx-auto\" *ngIf='program.ProgramType == 0'>\r\n            <!-- List group-->\r\n            <ul class=\"list-group shadow\">\r\n                <!-- list group item-->\r\n                <li class=\"list-group-item\">\r\n                    <div class=\"image-wrapper p-3\">\r\n                        <img src={{program.ImgData}} class=\"float-left p-3\" alt=\"Generic placeholder image\" width=\"350\" height=\"280\">\r\n                        <a  [routerLink]=\"['/booking-group-program', program.ProgramPK]\"><h5 class=\"mt-0 m-3\">{{program.Name}}</h5></a>\r\n                        <div [innerHTML]=\"program.Description\"></div>\r\n                        <div class=\"d-flex align-items-center justify-content-between mt-1\">\r\n                            <h6 class=\"font-weight-bold my-2\">${{program.PricePerParticipant}}</h6>\r\n                            <a [routerLink]=\"['/booking-group-program', program.ProgramPK]\" class=\"btn btn-info btn-lg active\" role=\"button\" aria-pressed=\"true\">Book now!</a>\r\n                        </div>\r\n                    </div>\r\n                </li> <!-- End -->\r\n            </ul> <!-- End -->\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\" >\r\n  <div class=\"container\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-lg-12\">\r\n        <h1 class=\"text\"> PACIFIC MARINE MAMMAL CENTER </h1>\r\n        <h2 class=\"greeting\" style=\"color: white;\"> Enjoy your exploration with our programs! </h2>\r\n      </div>\r\n    </div>\r\n    \r\n       <!--  <form action=\"#\" method=\"post\" novalidate=\"novalidate\">\r\n            <div class=\"row search-bar pl-5\">\r\n                        <div class=\"col-lg-3 col-md-3 col-sm-12 p-1\">\r\n                            <select class=\"form-control search-slt\" id=\"exampleFormControlSelect1\" style=\"width: 220px\">\r\n                                <option>Select Types of Program</option>\r\n                                <option>Group</option>\r\n                                <option>Individual</option>\r\n                            </select> \r\n                        </div>\r\n                         <div class=\"col-lg-3 col-md-3 col-sm-12 p-1 pl-5\">\r\n                            <select class=\"form-control search-slt\" id=\"exampleFormControlSelect1\" style=\"width: 175px\">\r\n                                <option>Select Age Group</option>\r\n                                <option>5-8</option>\r\n                                <option>8-12</option>\r\n                                <option>12-16</option>\r\n                            </select>\r\n                        </div>\r\n                          <div class=\"col-lg-3 col-md-3 col-sm-12 p-1 pl-5\">\r\n                            <input class=\"form-control\" type=\"date\" value=\"\" id=\"example-date-input\" style=\"width: 170px\">\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-3 col-sm-12 p-1 pl-5\">\r\n                            <button type=\"button\" class=\"btn btn-primary wrn-btn\">Search</button>\r\n                        </div>\r\n                    </div>\r\n        </form> -->\r\n  </div>\r\n</div> \r\n  <!-- Page Content -->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"col-lg-12\">\r\n        <h1>Most Popular Programs</h1>\r\n      </div>\r\n    </div>\r\n    <!-- Page Features -->\r\n    <div class=\"card-deck row\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-4\"  *ngFor = \"let program of programs; let i = index\">\r\n        <div class=\"program_card card h-95 border-light\" style=\"box-shadow: 0px 2px 2px #34393a80;\" *ngIf = \"i < 6\">\r\n       <!--Card image-->\r\n          <div class=\"view overlay row\">\r\n            <img class=\"image_div card-img flex-fill p-1\" src={{program.ImgData}} alt=\"Card image cap\" width=\"270\" height=\"260\">\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <a *ngIf = \"program.ProgramType\" [routerLink] = \"['/booking-individual-program', program.ProgramPK]\"><h4 class=\"card-title\">{{program.Name}}</h4></a>\r\n            <a *ngIf = \"!program.ProgramType\" [routerLink] = \"['/booking-group-program', program.ProgramPK]\"><h4 class=\"card-title\">{{program.Name}}</h4></a>\r\n            <hr class=\"card__item card__divider\">\r\n            <div class=\"block-with-text\">\r\n              <div [innerHTML]=\"program.Description\"></div>\r\n            </div>\r\n            <h4> ... </h4>\r\n            <div class=\"text-right pt-1\">\r\n              <a *ngIf = \"program.ProgramType\" [routerLink] = \"['/booking-individual-program', program.ProgramPK]\" class=\"btn btn-outline-info\">Find Out More!</a>\r\n              <a *ngIf = \"!program.ProgramType\" [routerLink] = \"['/booking-group-program', program.ProgramPK]\" class=\"btn btn-outline-info\">Find Out More!</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer text-muted d-flex justify-content-between bg-light border-light\">\r\n            <a style = \"color: #5077a9;\" ><fa-icon [icon]=\"faClock\"></fa-icon> 1h45 </a>\r\n            <a style = \"color: #5077a9;\" > <fa-icon [icon]=\"faComment\"></fa-icon> 115 </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    \r\n    \r\n\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/individual-program/individual-program.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/individual-program/individual-program.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndividualProgramIndividualProgramComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row text-center mb-5\">\r\n        <div class=\"col-lg-7 mx-auto\">\r\n            <h1 class=\"title\">Individual Program List</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row mb-5 filter\">\r\n        <div class=\"col-lg-10 col-md-9 col-sm-8 p-0\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type in Program Name or Description to Search\" [(ngModel)]=\"searchText\">\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-3 col-sm-4\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"clearSearch()\">Clear Search</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\"  *ngFor = 'let program of programs | filter:searchText' >\r\n        <div class=\"col-lg-12 mx-auto\" *ngIf='program.ProgramType == 1'>\r\n            <!-- List group-->\r\n            <ul class=\"list-group shadow\">\r\n                <!-- list group item-->\r\n                <li class=\"list-group-item\">\r\n                    <!-- Custom content-->\r\n                    <div class=\"image-wrapper p-3\">\r\n                        <img src={{program.ImgData}} class=\"float-left p-3\" alt=\"Generic placeholder image\" width=\"350\" height=\"280\">\r\n                        <a  [routerLink]=\"['/booking-individual-program', program.ProgramPK]\"><h5 class=\"mt-0 m-3\">{{program.Name}}</h5></a>\r\n                        <div [innerHTML]=\"program.Description\"></div>\r\n                        <div class=\"d-flex align-items-center justify-content-between mt-1\">\r\n                            <h6 class=\"font-weight-bold my-2\">${{program.PricePerParticipant}}</h6>\r\n                            <a [routerLink]=\"['/booking-individual-program', program.ProgramPK]\" class=\"btn btn-info btn-lg active\" role=\"button\" aria-pressed=\"true\">Book now!</a>\r\n                        </div>\r\n                    </div>\r\n                </li> <!-- End -->\r\n            </ul> <!-- End -->\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\">\r\n    <div class=\"container\">\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"text-center\">Sign In</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (submit)=\"login()\" [formGroup]=\"loginForm\">\r\n                        <p class=\"error\" *ngIf = \"errorMessage\"> {{errorMessage}}</p>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faUser\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter Username\" \r\n                            [(ngModel)] =\"credentials.Username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                            </div> \r\n                        </div>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faKey\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"password\" class=\"form-control\" placeholder=\"password\"\r\n                            formControlName=\"password\" placeholder=\"Password\" [(ngModel)] =\"credentials.Password\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row align-items-center remember\">\r\n                            <input type=\"checkbox\">Remember Me\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"submit\" value=\"Login\" class=\"btn float-right login_btn\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"d-flex justify-content-center links\">\r\n                        Don't have an account?<a [routerLink]=\"['/register']\">Sign Up</a>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-center\">\r\n                        <a [routerLink]=\"['/login/forgot-password']\">Forgot your password?</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/change-current-password/change-current-password.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/change-current-password/change-current-password.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordServiceChangeCurrentPasswordChangeCurrentPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8 mx-auto\">\r\n            <div class=\"row text-center text-white mb-5\">\r\n                <div class=\"col-lg-8 mx-auto\">\r\n                    <h1>Change Password</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form (ngSubmit)=\"setNewPassword()\" [formGroup]=\"changePasswordForm\">\r\n        <fieldset class=\"input-group form-group font-weight-bold\">\r\n            <div class=\"errorMessage\" *ngIf = \"errorMessage\">\r\n                <p>*{{errorMessage}}</p>\r\n            </div>\r\n            <div class=\"row\">\r\n                <label for=\"oldPassword\" class=\"col-form-label col-sm-3 pt-0 pl-0 text-bold\">Current Password</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"oldPassword\" placeholder=\"Current Password\" \r\n                        [(ngModel)]=\"userData.currentPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.oldPassword.errors }\">\r\n                    <div *ngIf=\"submitted && f.oldPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.oldPassword.errors.required\">Current Password is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>        \r\n        </fieldset>\r\n        <fieldset class=\"input-group form-group font-weight-bold\">\r\n            <div class=\"row\">\r\n                <label for=\"password\" class=\"col-form-label col-sm-3 pt-0 pl-0 text-bold\">New Password</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"New Password\" \r\n                        [(ngModel)]=\"newPassword\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">New Password is required</div>\r\n                        <div *ngIf=\"f.password.errors.minlength\">New Password must be at least 6 characters</div>\r\n                    </div>\r\n                </div>\r\n            </div> \r\n        </fieldset>\r\n        <fieldset class=\"input-group form-group font-weight-bold\">\r\n            <div class=\"row\">\r\n                <label for=\"confirmPassword\" class=\"col-form-label col-sm-3 pt-0 pl-0 text-bold\">Confirm Password</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Re-enter New Password\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.confirmPassword.errors.required\">Confirm New Password is required</div>\r\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">New Passwords must match</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </fieldset>\r\n        <div class=\"input-group form-group\">\r\n            <button type=\"submit\" class=\"btn btn-lg btn-info btn-block\" aria-pressed=\"true\" value=\"Change Password\">Change Password</button>\r\n        </div>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordServiceForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"banner\">\r\n    <div class=\"container\">\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"text-center\">Forgot Password</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"resetPassword()\" [formGroup]=\"myForm\">\r\n                        <!-- <p class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</p> -->                        \r\n                            <div class=\"input-group form-group mt-5 \" >\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <fa-icon [icon]=\"faEnvelope\"></fa-icon>\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"email\" class=\"form-control\" autofocus placeholder=\"Enter your email to reset password\" formControlName=\"email\"\r\n                                    [(ngModel)]=\"userInfo.Email\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                    <div *ngIf=\"f.email.errors.email\">Must be a valid email address</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <input type=\"submit\" value=\"Reset\" class=\"btn float-right reset-btn mt-5 mb-5\">\r\n                            </div>                        \r\n                    </form>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"d-flex justify-content-center links\">\r\n                        Register new account!<a [routerLink]=\"['/register']\">Sign Up</a>\r\n                    </div>\r\n                </div>   \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordServiceResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\">\r\n    <div class=\"container\">\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"text-center\">Set New Password</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"setNewPassword()\" [formGroup]=\"resetPasswordForm\">\r\n                        <div *ngIf=\"CurrentState == 'NotVerified'\" class=\"error-message\">\r\n                            <p>*{{errorMessage}}</p>\r\n                            <br>Click <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                                [routerLink]=\"['/login/forgot-password']\">HERE</button> to go back to Forgot Password Page.\r\n                        </div>                        \r\n                        <div *ngIf=\"CurrentState == 'TokenValid'\">\r\n                            <div class=\"input-group form-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <fa-icon [icon]=\"faKey\"></fa-icon>\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                    placeholder=\"Enter New Password\" [(ngModel)]=\"newPassword\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group form-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <fa-icon [icon]=\"faCheckDouble\"></fa-icon>\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\r\n                                    placeholder=\"Re-enter New Password\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"submit\" class=\"btn float-right update-btn mt-5 mb-5\" aria-pressed=\"true\"\r\n                                    value=\"Update Password\">\r\n                            </div>\r\n                        </div>                     \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-info/profile-info.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-info/profile-info.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileInfoProfileInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1> Profile Information Page </h1>\r\n<hr>\r\n<div class=\"container bootstrap snippet\">\r\n    <div class=\"row\">\r\n  \t\t<div class=\"col-sm-10\"><h2>User name</h2></div>\r\n    <!-- \t<div class=\"col-sm-2\"><a href=\"/users\" class=\"pull-right\"><img title=\"profile image\" class=\"img-circle img-responsive\" src=\"http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100\"></a></div> -->\r\n        </div>\r\n    <div class=\"row\">\r\n  \t\t<div class=\"col-sm-3 col-md-5\"><!--left col-->\r\n            <div class=\"text-center\">\r\n                <img src=\"http://ssl.gstatic.com/accounts/ui/avatar_2x.png\" class=\"avatar img-circle img-thumbnail\" alt=\"avatar\">\r\n                <h6>Upload a different photo...</h6>\r\n                <input type=\"file\" class=\"text-center center-block file-upload\">\r\n            </div>\r\n            <br>\r\n        </div><!--/col-3-->\r\n    \t<div class=\"col-sm-9 col-md-7\">\r\n            <section class=\"readonly\">\r\n                <mat-checkbox [(ngModel)]=\"isDisabled\"> Read Only </mat-checkbox>\r\n            </section>\r\n            <hr>\r\n                <form [formGroup]=\"customerInfoForm\" (ngSubmit)=\"openModal()\">\r\n                    <fieldset [disabled]=\"isDisabled\">\r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>First name</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"FirstName\" placeholder=\"First name\" [(ngModel)]=\"customerDetails.FirstName\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.FirstName.errors }\">\r\n                            <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n                        \r\n                        <div class=\"col-xs-6\">\r\n                        <label><h4>Last name</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"LastName\"placeholder=\"Last name\" [(ngModel)]=\"customerDetails.LastName\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.LastName.errors }\">\r\n                            <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n            \r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>Phone Number</h4></label>\r\n                            <input type=\"number\" class=\"form-control\" formControlName=\"PhoneNo\" placeholder=\"Phone No\" [(ngModel)]=\"customerDetails.PhoneNo\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.PhoneNo.errors }\" >\r\n                            <div *ngIf=\"submitted && f.PhoneNo.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.PhoneNo.errors.required\">Phone No is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n            \r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>Address</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"Address\"placeholder=\"enter address\" [(ngModel)]=\"customerDetails.Address\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.Address.errors }\" >\r\n                            <div *ngIf=\"submitted && f.Address.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.Address.errors.required\">Street Address is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>Address #2</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"Address2\" placeholder=\"enter address (optional)\">\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <div class=\"col-xs-6\">\r\n                            <label for=\"email\"><h4>City</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"City\" placeholder=\"enter city\" [(ngModel)]=\"customerDetails.City\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.City.errors }\" >\r\n                            <div *ngIf=\"submitted && f.City.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.City.errors.required\">City is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>State</h4></label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"State\"placeholder=\"enter state\" [(ngModel)]=\"customerDetails.State\" \r\n                            [ngClass]=\"{'is-invalid': submitted && f.State.errors }\" maxlength = \"2\" >\r\n                            <div *ngIf=\"submitted && f.State.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.State.errors.required\">State is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <div class=\"col-xs-6\">\r\n                            <label><h4>Zipcode</h4></label>\r\n                            <input type=\"number\" class=\"form-control\" formControlName=\"Zipcode\" placeholder=\"enter zipcode\" [(ngModel)]=\"customerDetails.Zipcode\"\r\n                            [ngClass]=\"{'is-invalid': submitted && f.Zipcode.errors }\">\r\n                            <div *ngIf=\"submitted && f.Zipcode.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.Zipcode.errors.required\">Zipcode is required</div>\r\n                              </div>\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <!-- <div class=\"col-xs-6\">\r\n                            <label class=\"checkbox-inline\"></label>\r\n                                <input type=\"checkbox\" title=\"Subscribe\" [(ngModel)]=\"customerDetails.Subscribe\" value=\"\">Subscribe                          \r\n                        </div>\r\n                        <br/> -->\r\n                        <div>\r\n                            <section class=\"options-section\">\r\n                                <mat-checkbox class=\"options-margin\" formControlName=\"Subscribe\"\r\n                                [(ngModel)]=\"subscribeChecked\">Subscribe to Email</mat-checkbox>\r\n                            </section>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"col-xs-12 input-group form-group \">                            \r\n                            <button class=\"btn btn-lg btn-success\" type=\"submit\"><i class=\"glyphicon glyphicon-ok-sign\"></i>Update Personal Info</button>\r\n                        </div>\r\n                        <br/>\r\n                    </fieldset>\r\n              \t</form>\r\n              <hr>\r\n        </div><!--/col-9-->\r\n    </div><!--/row-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\r\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n        [opened]=\"(isHandset$ | async) === false\">\r\n      <mat-toolbar> \r\n        <a class=\"navbar-brand\" href=\"#\">\r\n          <img src = \"https://files.constantcontact.com/51bd4a7a001/b894f4d9-d76a-48cc-b5b0-3a0d3b8c79cd.png\" width=\"120\" height=\"60\"> </a>\r\n      </mat-toolbar>\r\n      <section [routerLinkActive]=\"['active']\" *ngIf = \"role == '2' || role == '3'\"> Program </section>\r\n      <mat-divider [routerLinkActive]=\"['active']\" *ngIf = \"role == '2' || role == '3'\"></mat-divider>\r\n      <mat-nav-list [routerLinkActive]=\"['active']\" *ngIf = \"role == '2' || role == '3'\">\r\n        <a mat-list-item [routerLink]=\"['/profile/createprogram']\" [routerLinkActive]=\"['active']\"> <mat-icon [class.active]='selected' matListIcon>add_circle</mat-icon> New Program</a>\r\n        <a mat-list-item [routerLink]=\"['/profile/program-management']\" [routerLinkActive]=\"['active']\"><mat-icon matListIcon>edit</mat-icon> Program Management</a>\r\n      </mat-nav-list>\r\n      <section *ngIf = \"role == '3'\"> Account</section>\r\n      <mat-divider *ngIf = \"role == '3'\"></mat-divider>\r\n      <mat-nav-list *ngIf = \"role == '3'\">\r\n        <a mat-list-item [routerLink]=\"['/profile/set-user-role']\" [routerLinkActive]=\"['active']\"><mat-icon matListIcon>supervised_user_circle</mat-icon>User Management</a>\r\n      </mat-nav-list>\r\n      <!-- <mat-nav-list>\r\n        <a mat-list-item [routerLink]=\"['/profile/createprogram']\" [routerLinkActive]=\"['active']\"><mat-icon matListIcon>account_circle</mat-icon>Your Account</a>\r\n      </mat-nav-list>\r\n      <section> Others </section>\r\n      <mat-divider></mat-divider>\r\n      <mat-nav-list>\r\n        <a mat-list-item [routerLink]=\"['/profile/createprogram']\" [routerLinkActive]=\"['active']\"><mat-icon matListIcon>settings</mat-icon>Setting</a>\r\n      </mat-nav-list> -->\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <mat-toolbar color=\"primary\">\r\n        <button\r\n          type=\"button\"\r\n          aria-label=\"Toggle sidenav\"\r\n          mat-icon-button\r\n          (click)=\"drawer.toggle()\"\r\n          *ngIf=\"isHandset$ | async\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n        <h1>PACIFIC MARINE MAMMAL CENTER</h1>\r\n        <!-- User Information -->\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\">\r\n          <span>{{userName}} </span>\r\n          <!-- <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\"> -->\r\n          <mat-icon matListIcon>account_circle</mat-icon>\r\n        </a>\r\n        <!-- Dropdown - User Information -->\r\n        <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile', 'profile-info', id]\">\r\n            <mat-icon>info</mat-icon>\r\n            Profile\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile', 'account-setting', id]\">\r\n            <mat-icon>settings</mat-icon>\r\n            Account Setting\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\" (click)='auth.logout()'>\r\n            <mat-icon>exit_to_app</mat-icon>\r\n            Logout\r\n          </a>\r\n        </div>\r\n      </mat-toolbar>\r\n      <!-- Add Content Here --> \r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program-details/program-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program-details/program-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramDetailsProgramDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mt-4 mb-5 mx-auto\">\r\n            <!-- <section class=\"readonly\">\r\n                <mat-checkbox [(ngModel)]=\"isDisabled\"> Read Only </mat-checkbox>\r\n              </section> -->\r\n            <form>\r\n                <fieldset [disabled]=\"isDisabled\">\r\n                <h1 class=\"text-center\">Program Requirement</h1>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Program Name</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"programData.Name\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group \">\r\n                    <label class=\"font-weight-bold\">Description</label>\r\n                    <ckeditor [editor]=\"Editor\" [disabled]=\"isDisabled\" (ready)=\"onReady($event)\" name=\"editor\" [(ngModel)]=\"programData.Description\" name=\"description\"></ckeditor>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Deposit Amount</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"number\" class=\"form-control\" name=\"deposit\"\r\n                                [(ngModel)]=\"programData.DepositAmount\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Price Per Participant</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"number\" class=\"form-control\" name=\"price\"\r\n                                [(ngModel)]=\"programData.PricePerParticipant\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Maximum Number of Participant</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"number\" class=\"form-control\" name=\"participant\"\r\n                                [(ngModel)]=\"programData.MaximumParticipant\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <img class=\"card-img flex-fill\" [src]=\"viewImgHref\" alt=\"Card image cap\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>Image</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                        <input type=\"file\" (change)=\"onFileChange($event)\" [disabled]=\"isDisabled\" accept=\"image/x-png,image/gif,image/jpeg\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group font-weight-bold\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Program Type</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"ProgramType\"\r\n                            [(ngModel)]=\"ProgramTypeText\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Binding i and g-program Component -->\r\n                <div *ngIf = \"programData.ProgramType=='1'\" ><i-program [ProgramPK]=\"ProgramPK\" [formData]=\"formData\" (dataChange)=\"dataChangedHandler($event)\"></i-program></div>\r\n                <div *ngIf = \"programData.ProgramType=='0'\" ><g-program [ProgramPK]=\"ProgramPK\" [formData]=\"formData\" (dataChange)=\"dataChangedHandler($event)\"></g-program></div>\r\n                <div *ngIf='PageMode == \"edit\"' class=\"button pt-5 pb-5\">\r\n                    <button class=\"btn btn-lg btn-info btn-block \" type=\"submit\" (click)=\"openModal()\">Update Program Requirements</button>\r\n                </div>\r\n            </fieldset>\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/program-management/program-management.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program-management/program-management.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgramManagementProgramManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row text-center text-white mb-5 mt-4\">\r\n        <div class=\"col-lg-7 mx-auto\">\r\n            <h1>Program Management</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"row filter\">\r\n        <div class=\"col-lg-2 col-md-2 col-sm-3 p-0\">\r\n            <select class=\"form-control\" style = \"font-weight: bold\" id=\"programCat\" (change)=\"selectChangeHandler($event)\" >\r\n            </select>\r\n        </div>\r\n        <div class=\"col-lg-8 col-md-8 col-sm-7 pr-0\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type in Program Name or Keywords to Search\" [(ngModel)]=\"searchText\">\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-2 col-sm-2\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"clearSearch()\">Clear Search</button>\r\n        </div>\r\n    </div>\r\n    <!--  Create table -->\r\n    <div class=\"table-responsive-sm\">\r\n        <table #datatable class=\"table table-hover\" style=\"width:100%\">\r\n            <thead>\r\n                <tr>\r\n                    <th style=\"width:45%\"> Program Name </th>\r\n                    <th style=\"width:20%\"> Program Type </th>\r\n                    <th style=\"width:35%\"> Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let program of programs | filter:searchText\">\r\n                    <td class=\"name\"> {{program.Name}} \r\n                        <div class=\"errorMessage\" *ngIf=\"!program.IsActive\">\r\n                            <mat-icon color=\"red\">error</mat-icon> \r\n                            <label>Need Requirement</label>\r\n                        </div>\r\n                    </td>\r\n                    <td *ngIf=\"program.ProgramType =='0'\"> Group Program </td>\r\n                    <td *ngIf=\"program.ProgramType =='1'\"> Individual Program </td>\r\n                    <td><button [routerLink]=\"['/profile', 'program-details', program.ProgramPK, 'view']\" class=\"btn btn-info\">\r\n                            <mat-icon matListIcon>visibility</mat-icon> View\r\n                        </button>\r\n                        <button [routerLink]=\"['/profile', 'program-details', program.ProgramPK, 'edit']\"\r\n                            class=\"btn btn-warning\">\r\n                            <mat-icon matListIcon>edit</mat-icon> Edit\r\n                        </button>\r\n                        <button *ngIf = \"!program.IsActive\" (click) = \"openModalSwitch(program.ProgramPK, program.IsActive)\"\r\n                            class=\"btn btn-success\">\r\n                            <mat-icon matListIcon> visibility </mat-icon> Enable\r\n                        </button>\r\n                        <button *ngIf = \"program.IsActive\" (click) = \"openModalSwitch(program.ProgramPK, program.IsActive)\"\r\n                            class=\"btn btn-danger\">\r\n                            <mat-icon matListIcon> visibility_off </mat-icon> Disable\r\n                        </button>\r\n                        \r\n                        <!-- <button class=\"btn btn-danger\">\r\n                            <mat-icon matListIcon>error</mat-icon> Delete\r\n                        </button></td> -->\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner\">\r\n    <div class=\"container\">\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h3 class=\"text-center\">Register</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form (ngSubmit)=\"openModal()\" [formGroup]=\"registerForm\">\r\n                        <p class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faUser\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter Username\" \r\n                            [(ngModel)]=\"credentials.Username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n                            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faEnvelope\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\"\r\n                                [(ngModel)]=\"credentials.Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                <div *ngIf=\"f.email.errors.email\">Must be a valid email address</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faKey\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" \r\n                                [(ngModel)]=\"credentials.Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group form-group\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\"><fa-icon [icon]=\"faCheckDouble\"></fa-icon></span>\r\n                            </div>\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Re-enter Password\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                            <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                                <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row align-items-center acceptTerms\">\r\n                            <input type=\"checkbox\" formControlName=\"acceptTerms\" \r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\">\r\n                            <label for=\"acceptTerms\"> Accept Terms & Conditions</label>\r\n                            <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.acceptTerms.errors.required\">Accept Terms & Conditions is required</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"submit\" value=\"Register\" class=\"btn float-right register_btn\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"d-flex justify-content-center links\">\r\n                        Already have an account!<a [routerLink]=\"['/login']\">Sign In</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/set-user-role/set-user-role.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/set-user-role/set-user-role.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSystemAdminDashboardSetUserRoleSetUserRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row text-center text-white mb-5\">\r\n        <div class=\"col-lg-7 mt-5 mx-auto\">\r\n            <h1>User Management</h1>\r\n        </div>\r\n    </div>      \r\n    <div class=\"row filter\">        \r\n        <div class=\"col-lg-8 col-md-8 col-sm-7 pr-0\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type in Username or Keywords to Search\" [(ngModel)]=\"searchText\">\r\n        </div>\r\n        <div class=\"col-lg-2 col-md-2 col-sm-2\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"clearSearch()\">Clear Search</button>\r\n        </div>\r\n    </div>  \r\n    \r\n    <div class=\"table-responsive-sm\">\r\n        <table class=\"table table-hover\" style=\"width:100%\">\r\n            <thead>\r\n                <tr>\r\n                    <th style=\"width:35%\"> User Name </th>\r\n                    <th style=\"width:35%\"> Email </th>\r\n                    <th style=\"width:30%\"> Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngFor = 'let user of listOfUsers | filter:searchText'>\r\n                <tr *ngIf =\"user.UserPK != currentUserID\">\r\n                    <td class=\"name\"> {{user.Username}} </td>\r\n                    <td> {{user.Email}} </td>\r\n                    <td><button [routerLink]=\"['/profile', 'user-details', user.UserPK]\" class=\"btn btn-warning\"> <mat-icon matListIcon>edit</mat-icon> Edit</button>\r\n                        <button *ngIf = \"!user.IsActive\" (click) = \"openModalSwitch(user.UserPK, user.IsActive)\"\r\n                            class=\"btn btn-success\">\r\n                            Activate Account  \r\n                        </button>\r\n                        <button *ngIf = \"user.IsActive\" (click) = \"openModalSwitch(user.UserPK, user.IsActive)\"\r\n                            class=\"btn btn-danger\">\r\n                            Deactivate Account\r\n                        </button>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/user-details/user-details.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/user-details/user-details.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSystemAdminDashboardUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mt-12 mx-auto\">\r\n            <div class=\"row text-center text-white mb-5\">\r\n                <div class=\"col-lg-12 mx-auto\">\r\n                    <h1>User Detail</h1>\r\n                </div>\r\n            </div>\r\n            <form>                \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>UserName</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"userDetails.Username\" readonly>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Password</label>\r\n                        </div>\r\n                        <div class=\"col-md-3\">•••••••••••••                     \r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-md btn-warning col-md-4\" \r\n                            (click)=\"openModalResetPassword()\">\r\n                            Reset Password</button>                            \r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Email</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"userDetails.Email\">\r\n                        </div>\r\n                    </div>\r\n                </div>     \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Current Role</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <div *ngIf = \"userDetails.Role_FK == 1\">Customer</div>\r\n                            <div *ngIf = \"userDetails.Role_FK == 2\">Manager</div>\r\n                            <div *ngIf = \"userDetails.Role_FK == 3\">System Admin</div>\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n                <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>New Role</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\">\r\n                            <select id=\"roleSelection\">                                \r\n                            </select>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n                <button class=\"btn btn-lg btn-info btn-block\" type=\"submit\" (click)=\"openModalUpdateUserDetail()\">Update User Details</button>\r\n            </form>\r\n         \r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/account-setting/account-setting.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/account-setting/account-setting.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountSettingAccountSettingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row-header {\r\n    font-weight: bold;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 45px;\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  color: #08b2b8; \r\n}\r\n\r\n.text-bold{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1zZXR0aW5nL2FjY291bnQtc2V0dGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LXNldHRpbmcvYWNjb3VudC1zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDhiMmI4OyBcclxufVxyXG5cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/account-setting/account-setting.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/account-setting/account-setting.component.ts ***!
    \**************************************************************/

  /*! exports provided: AccountSetting */

  /***/
  function srcAppAccountSettingAccountSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountSetting", function () {
      return AccountSetting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    let AccountSetting = class AccountSetting {
      constructor(route, auth) {
        this.route = route;
        this.auth = auth;
      }

      ngOnInit() {
        this.route.params.subscribe(val => {
          this.UserPK = val.id;
          this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
            this.userDetails = user;
          });
        });
      }

    };

    AccountSetting.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }];

    AccountSetting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'account-setting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-setting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account-setting/account-setting.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-setting.component.css */
      "./src/app/account-setting/account-setting.component.css")).default]
    })], AccountSetting);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.top-nav-collapse {\r\n    background-color: #ffffff !important;\r\n    box-shadow: 0px 2px 2px #585d5e80;\r\n  }\r\n\r\n@media (max-width: 991px) {\r\n    .navbar:not(.top-nav-collapse) {\r\n      background: #ffffff !important;\r\n      box-shadow: 0px 2px 2px #585d5e80;\r\n    }\r\n  }\r\n\r\n.header_change{\r\n    position: fixed;\r\n    background: rgb(255, 255, 255) !important;\r\n    width: 100%;\r\n    z-index: 1;\r\n    box-shadow: 0px 2px 2px #585d5e80;\r\n}\r\n\r\n.navbar-toggler, .header_change .navbar-toggler {\r\n    border-color: rgb(34, 33, 33);\r\n}\r\n\r\n.navbar-toggler-icon, .header_change .navbar-toggler-icon  {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(34, 33, 33)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\") !important;\r\n    \r\n}\r\n\r\n.header_change a{\r\n    color: rgb(54, 53, 53) !important;\r\n\r\n}\r\n\r\n.header_change .nav-link:hover, .nav-link:hover{\r\n    color: #08b2b8!important;\r\n    text-decoration: underline;\r\n}\r\n\r\n.header_change .nav-link.active, .nav-link:focus, .nav-link.active, .header_change .nav-link:focus{\r\n    color: #08b2b8!important;\r\n}\r\n\r\n.nav-item{\r\n    text-align: right;\r\n    font-family: \"Trebuchet MS\" !important;\r\n}\r\n\r\n/* .nav-link:active, .nav-link:focus{\r\n    color: #08b2b8!important;\r\n    outline: 0 !important;\r\n} */\r\n\r\n.nav-link{\r\n    color: rgb(19, 39, 77)!important;\r\n    font-weight: normal;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\nbody {\r\n    overflow-y:hidden;\r\n    overflow-x:hidden;\r\n  }\r\n\r\n.dropdown:hover>.dropdown-menu {\r\n    display: block !important;\r\n    -webkit-transition-delay: 10s ;\r\n            transition-delay: 10s ;\r\n    opacity:1; \r\n    visibility: visible;\r\n \r\n}\r\n\r\n.dropdown>.dropdown-toggle:active {\r\n    /*Without this, clicking will make it sticky*/\r\n     pointer-events: none;\r\n}\r\n\r\n.mainfooter {\r\n    background: #16222A; \r\n    background: linear-gradient(59deg, #3A6073, #16222A);\r\n    color: white; padding-top:50px; padding-bottom:50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlDQUFpQztFQUNuQzs7QUFFRjtJQUNJO01BQ0UsOEJBQThCO01BQzlCLGlDQUFpQztJQUNuQztFQUNGOztBQUVGO0lBQ0ksZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZRQUE2UTs7QUFFalI7O0FBRUE7SUFDSSxpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixzQ0FBc0M7QUFDMUM7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLDZDQUE2QztLQUM1QyxvQkFBb0I7QUFDekI7O0FBR0E7SUFDSSxtQkFBbUI7SUFFbkIsb0RBQW9EO0lBQ3BELFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUI7QUFDdkQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wLW5hdi1jb2xsYXBzZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAjNTg1ZDVlODA7XHJcbiAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4ICM1ODVkNWU4MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4uaGVhZGVyX2NoYW5nZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggIzU4NWQ1ZTgwO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIsIC5oZWFkZXJfY2hhbmdlIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigzNCwgMzMsIDMzKTtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24sIC5oZWFkZXJfY2hhbmdlIC5uYXZiYXItdG9nZ2xlci1pY29uICB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiKDM0LCAzMywgMzMpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNFJTNDL3N2ZyUzRVwiKSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXJfY2hhbmdlIGF7XHJcbiAgICBjb2xvcjogcmdiKDU0LCA1MywgNTMpICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyX2NoYW5nZSAubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiAjMDhiMmI4IWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaGVhZGVyX2NoYW5nZSAubmF2LWxpbmsuYWN0aXZlLCAubmF2LWxpbms6Zm9jdXMsIC5uYXYtbGluay5hY3RpdmUsIC5oZWFkZXJfY2hhbmdlIC5uYXYtbGluazpmb2N1c3tcclxuICAgIGNvbG9yOiAjMDhiMmI4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYXYtaXRlbXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogLm5hdi1saW5rOmFjdGl2ZSwgLm5hdi1saW5rOmZvY3Vze1xyXG4gICAgY29sb3I6ICMwOGIyYjghaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59ICovXHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogcmdiKDE5LCAzOSwgNzcpIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgfVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMHMgO1xyXG4gICAgb3BhY2l0eToxOyBcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiBcclxufVxyXG5cclxuLmRyb3Bkb3duPi5kcm9wZG93bi10b2dnbGU6YWN0aXZlIHtcclxuICAgIC8qV2l0aG91dCB0aGlzLCBjbGlja2luZyB3aWxsIG1ha2UgaXQgc3RpY2t5Ki9cclxuICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuXHJcbi5tYWluZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxNjIyMkE7IFxyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTlkZWcsICMzQTYwNzMsICMxNjIyMkEpOyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1OWRlZywgIzNBNjA3MywgIzE2MjIyQSk7XHJcbiAgICBjb2xvcjogd2hpdGU7IHBhZGRpbmctdG9wOjUwcHg7IHBhZGRpbmctYm90dG9tOjUwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(router, location, auth, fb, document) {
        this.router = router;
        this.location = location;
        this.auth = auth;
        this.fb = fb;
        this.submitted = false;
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"];
        this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faYoutube"];
        this.faYelp = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faYelp"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPhone"];
        this.faMapMarkedAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkedAlt"];
        this.faHandHoldingUsd = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHandHoldingUsd"];
        this.faDoorOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDoorOpen"];
        this.faLaughWink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLaughWink"]; // Change color on scroll

        this.header_variable = false;
      }

      ngOnInit() {
        var pattern = /^http:\/\/.+((\/$)|(\/#$)|(\/group-program$)|(\/booking-group-program.+)|(\/individual-program$)|(\/booking-individual-program.+)|(\/contact$)|(\/register$)|(\/customer-register)|(\/login))/;
        this.location.onPopState(() => {
          this.loadingURL = this.location.href;
          /* if (this.loadingURL == "http://localhost:4200/" || this.loadingURL == "http://localhost:4200/group-program"
          || this.loadingURL == "http://localhost:4200/individual-program" || this.loadingURL == "http://localhost:4200/contact"
          || this.loadingURL == "http://localhost:4200/customer-register" || this.loadingURL == "http://localhost:4200/login" ) {
            this.hf.visible = true;
          }
          else {
            this.hf.visible = false;
          } */

          if (pattern.test(this.loadingURL)) {
            this.visible = true;
          } else {
            this.visible = false;
          }
        });
        this.router.events.subscribe(e => {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
            // Function you want to call here
            this.URL = this.location.href;

            if (pattern.test(this.URL)) {
              this.visible = true;
            } else {
              this.visible = false;
            }
          }
        });
        /* if (this.URL == "http://localhost:4200/" || this.URL == "http://localhost:4200/group-program"
        || this.URL == "http://localhost:4200/individual-program" || this.URL == "http://localhost:4200/contact"
        || this.URL == "http://localhost:4200/customer-register" || this.URL == "http://localhost:4200/login" ) {
          this.hf.visible = true;
        }
        else {
          this.hf.visible = false;
        } */

        /*  this.hf.visible = true; */

        this.registerForm = this.fb.group({
          subscribeEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
        });
      }

      get f() {
        return this.registerForm.controls;
      }

      onSubmit() {
        this.submitted = true; // stop here if form is invalid

        if (this.registerForm.invalid) {
          return;
        } // display form values on success


        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }

      scrollfunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          this.header_variable = true;
        } else {
          this.header_variable = false;
        }
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
      }]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:scroll', ['$event'])], AppComponent.prototype, "scrollfunction", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(500)])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./customer-info/customer-info.component */
    "./src/app/customer-info/customer-info.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _createprogram_createprogram_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./createprogram/createprogram.component */
    "./src/app/createprogram/createprogram.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth-role-guard.service */
    "./src/app/auth-role-guard.service.ts");
    /* harmony import */


    var _auth_customer_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./auth-customer-guard.service */
    "./src/app/auth-customer-guard.service.ts");
    /* harmony import */


    var _auth_system_role_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./auth-system-role-guard.service */
    "./src/app/auth-system-role-guard.service.ts");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/email.services */
    "./src/app/services/email.services.ts");
    /* harmony import */


    var _services_customer_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/customer.services */
    "./src/app/services/customer.services.ts");
    /* harmony import */


    var _group_program_group_program_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./group-program/group-program.component */
    "./src/app/group-program/group-program.component.ts");
    /* harmony import */


    var _individual_program_individual_program_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./individual-program/individual-program.component */
    "./src/app/individual-program/individual-program.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _booking_individual_program_booking_individual_program_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./booking-individual-program/booking-individual-program.component */
    "./src/app/booking-individual-program/booking-individual-program.component.ts");
    /* harmony import */


    var _booking_group_program_booking_group_program_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./booking-group-program/booking-group-program.component */
    "./src/app/booking-group-program/booking-group-program.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _program_management_program_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./program-management/program-management.component */
    "./src/app/program-management/program-management.component.ts");
    /* harmony import */


    var _program_details_program_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./program-details/program-details.component */
    "./src/app/program-details/program-details.component.ts");
    /* harmony import */


    var _system_admin_dashboard_set_user_role_set_user_role_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./system-admin-dashboard/set-user-role/set-user-role.component */
    "./src/app/system-admin-dashboard/set-user-role/set-user-role.component.ts");
    /* harmony import */


    var _system_admin_dashboard_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./system-admin-dashboard/user-details/user-details.component */
    "./src/app/system-admin-dashboard/user-details/user-details.component.ts");
    /* harmony import */


    var _components_i_program_i_program_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/i-program/i-program.component */
    "./src/app/components/i-program/i-program.component.ts");
    /* harmony import */


    var _components_g_program_g_program_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/g-program/g-program.component */
    "./src/app/components/g-program/g-program.component.ts");
    /* harmony import */


    var _password_service_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./password-service/forgot-password/forgot-password.component */
    "./src/app/password-service/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _password_service_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./password-service/reset-password/reset-password.component */
    "./src/app/password-service/reset-password/reset-password.component.ts");
    /* harmony import */


    var _password_service_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./password-service/change-current-password/change-current-password.component */
    "./src/app/password-service/change-current-password/change-current-password.component.ts");
    /* harmony import */


    var _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./account-setting/account-setting.component */
    "./src/app/account-setting/account-setting.component.ts");
    /* harmony import */


    var _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./profile-info/profile-info.component */
    "./src/app/profile-info/profile-info.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    const routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    }, {
      path: 'user-details/:id',
      component: _system_admin_dashboard_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailsComponent"],
      canActivate: [_auth_system_role_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthSystemRoleGuardService"]]
    }, {
      path: 'customer-register/:id',
      component: _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__["CustomerRegisterComponent"],
      canActivate: [_auth_customer_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthCustomerGuardService"]]
    }, {
      path: 'group-program',
      component: _group_program_group_program_component__WEBPACK_IMPORTED_MODULE_23__["GroupProgramComponent"]
    }, {
      path: 'individual-program',
      component: _individual_program_individual_program_component__WEBPACK_IMPORTED_MODULE_24__["IndividualProgramComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["Contact"]
    }, {
      path: 'booking-individual-program/:id',
      component: _booking_individual_program_booking_individual_program_component__WEBPACK_IMPORTED_MODULE_26__["BookingIndividualProgramComponent"]
    }, {
      path: 'booking-group-program/:id',
      component: _booking_group_program_booking_group_program_component__WEBPACK_IMPORTED_MODULE_27__["BookingGroupProgramComponent"]
    }, {
      path: 'customer-register/:id',
      component: _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__["CustomerRegisterComponent"]
    }, {
      path: 'login/forgot-password',
      component: _password_service_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgotPasswordComponent"]
    }, {
      path: 'login/reset-password/:token',
      component: _password_service_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__["ResetPasswordComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
      children: [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__["DashboardComponent"],
        canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"]]
      }, {
        path: 'createprogram',
        component: _createprogram_createprogram_component__WEBPACK_IMPORTED_MODULE_14__["CreateProgramComponent"],
        canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"]]
      }, {
        path: 'program-management',
        component: _program_management_program_management_component__WEBPACK_IMPORTED_MODULE_31__["ProgramManagementComponent"],
        canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"]]
      }, {
        path: 'program-details/:id/:mode',
        component: _program_details_program_details_component__WEBPACK_IMPORTED_MODULE_32__["ProgramDetailsComponent"],
        canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"]]
      }, {
        path: 'set-user-role',
        component: _system_admin_dashboard_set_user_role_set_user_role_component__WEBPACK_IMPORTED_MODULE_33__["SetUserRoleComponent"],
        canActivate: [_auth_system_role_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthSystemRoleGuardService"]]
      }, {
        path: 'user-details/:id',
        component: _system_admin_dashboard_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailsComponent"],
        canActivate: [_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"]]
      }, {
        path: 'profile-info/:id',
        component: _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_41__["ProfileInfo"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]]
      }, {
        path: 'account-setting/:id',
        component: _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_40__["AccountSetting"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]]
      }, {
        path: 'change-current-password',
        component: _password_service_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangeCurrentPasswordComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]]
      }]
    }];
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _createprogram_createprogram_component__WEBPACK_IMPORTED_MODULE_14__["CreateProgramComponent"], _group_program_group_program_component__WEBPACK_IMPORTED_MODULE_23__["GroupProgramComponent"], _individual_program_individual_program_component__WEBPACK_IMPORTED_MODULE_24__["IndividualProgramComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_25__["Contact"], _booking_individual_program_booking_individual_program_component__WEBPACK_IMPORTED_MODULE_26__["BookingIndividualProgramComponent"], _booking_group_program_booking_group_program_component__WEBPACK_IMPORTED_MODULE_27__["BookingGroupProgramComponent"], _program_management_program_management_component__WEBPACK_IMPORTED_MODULE_31__["ProgramManagementComponent"], _program_details_program_details_component__WEBPACK_IMPORTED_MODULE_32__["ProgramDetailsComponent"], _system_admin_dashboard_set_user_role_set_user_role_component__WEBPACK_IMPORTED_MODULE_33__["SetUserRoleComponent"], _system_admin_dashboard_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_34__["UserDetailsComponent"], _components_i_program_i_program_component__WEBPACK_IMPORTED_MODULE_35__["IProgramComponent"], _components_g_program_g_program_component__WEBPACK_IMPORTED_MODULE_36__["GProgramComponent"], _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_12__["CustomerRegisterComponent"], _password_service_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgotPasswordComponent"], _password_service_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_38__["ResetPasswordComponent"], _password_service_change_current_password_change_current_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangeCurrentPasswordComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__["DashboardComponent"], _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_51__["ModalDialogComponent"], _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_40__["AccountSetting"], _profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_41__["ProfileInfo"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_30__["CKEditorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_42__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_43__["LayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_47__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_48__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_49__["MatProgressSpinnerModule"]],
      providers: [_services_email_services__WEBPACK_IMPORTED_MODULE_21__["EmailService"], _services_program_services__WEBPACK_IMPORTED_MODULE_16__["ProgramServices"], _services_customer_services__WEBPACK_IMPORTED_MODULE_22__["CustomerService"], _auth_role_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthRoleGuardService"], _auth_system_role_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthSystemRoleGuardService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _auth_customer_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthCustomerGuardService"], _authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_51__["ModalDialogComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-customer-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/auth-customer-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthCustomerGuardService */

  /***/
  function srcAppAuthCustomerGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthCustomerGuardService", function () {
      return AuthCustomerGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _services_customer_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/customer.services */
    "./src/app/services/customer.services.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let AuthCustomerGuardService = class AuthCustomerGuardService {
      constructor(location, auth, CS, router) {
        this.location = location;
        this.auth = auth;
        this.CS = CS;
        this.router = router;
        console.log("Customer Guard Service");
        this.URL_ID = this.location.path().split('/')[this.location.path().split('/').length - 1];
        console.log("URL_ID: " + this.URL_ID);
      }

      canActivate() {
        console.log("Logged in");
        console.log("User PK: " + this.auth.registeredPK); // if(this.auth.getUserDetails().UserPK.toString() != this.URL_ID)

        if (this.URL_ID == 'register') return true;

        if (this.auth.registeredPK != this.URL_ID) {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }

    };

    AuthCustomerGuardService.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _services_customer_services__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthCustomerGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthCustomerGuardService);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    let AuthGuardService = class AuthGuardService {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
      }

      canActivate() {
        if (!this.auth.isLoggedIn()) {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }

    };

    AuthGuardService.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/auth-role-guard.service.ts":
  /*!********************************************!*\
    !*** ./src/app/auth-role-guard.service.ts ***!
    \********************************************/

  /*! exports provided: AuthRoleGuardService */

  /***/
  function srcAppAuthRoleGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoleGuardService", function () {
      return AuthRoleGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    let AuthRoleGuardService = class AuthRoleGuardService {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
      }

      canActivate() {
        if (this.auth.getUserDetails().Role_FK == '1') {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }

    };

    AuthRoleGuardService.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthRoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthRoleGuardService);
    /***/
  },

  /***/
  "./src/app/auth-system-role-guard.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth-system-role-guard.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthSystemRoleGuardService */

  /***/
  function srcAppAuthSystemRoleGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSystemRoleGuardService", function () {
      return AuthSystemRoleGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    let AuthSystemRoleGuardService = class AuthSystemRoleGuardService {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
      }

      canActivate() {
        if (this.auth.getUserDetails().Role_FK != '3') {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }

    };

    AuthSystemRoleGuardService.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthSystemRoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthSystemRoleGuardService);
    /***/
  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./constants */
    "./src/app/constants.ts");

    let AuthenticationService = class AuthenticationService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }

      saveToken(token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
      }

      getToken() {
        if (!this.token) {
          this.token = localStorage.getItem('usertoken');
        }

        return this.token;
      }

      getUserDetails() {
        const token = this.getToken();
        let payload;

        if (token) {
          payload = token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        } else {
          return null;
        }
      }

      isLoggedIn() {
        const user = this.getUserDetails();

        if (user) {
          return user.exp > Date.now() / 1000;
        } else {
          return false;
        }
      }

      register(user) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/register", user);
      }

      login(user) {
        const base = this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/login", user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
          if (data.token) {
            this.saveToken(data.token);
          }

          return data;
        }));
        return request;
      }

      profile() {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/profile", {
          headers: {
            Authorization: "".concat(this.getToken())
          }
        });
      }

      logout() {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        /* this.router.navigateByUrl('/') */
      }

      getAllUser() {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/edit-user", {
          headers: {
            Authorization: "".concat(this.getToken())
          }
        });
      }

      getUserDetailsByID(UserPK) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/get-user-details/" + UserPK);
      }

      updateUserDetail(UserPK, userDetails) {
        return this.http.put(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/get-user-details/" + UserPK, userDetails);
      }

      resetUserPassword(UserPK, userDetails) {
        return this.http.put(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/reset-password/" + UserPK, userDetails);
      }

      changeCurrentPassword(UserPK, userDetails) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/change-current-password/" + UserPK, userDetails);
      }

      setUserActiveStatus(UserPK, IsActive) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].SERVER_URL + "/users/set-user-status/" + UserPK + "/" + IsActive);
      }

    };

    AuthenticationService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/booking-group-program/booking-group-program.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/booking-group-program/booking-group-program.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingGroupProgramBookingGroupProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  padding-top: 100px;\r\n  padding-bottom: 56px;\r\n}\r\n\r\n.row{\r\npadding-top: 10px;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  color: #08b2b8; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1ncm91cC1wcm9ncmFtL2Jvb2tpbmctZ3JvdXAtcHJvZ3JhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9va2luZy1ncm91cC1wcm9ncmFtL2Jvb2tpbmctZ3JvdXAtcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG59XHJcblxyXG4ucm93e1xyXG5wYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDhiMmI4OyBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/booking-group-program/booking-group-program.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/booking-group-program/booking-group-program.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BookingGroupProgramComponent */

  /***/
  function srcAppBookingGroupProgramBookingGroupProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingGroupProgramComponent", function () {
      return BookingGroupProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_program_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let BookingGroupProgramComponent = class BookingGroupProgramComponent {
      constructor(route, router, fb, service) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.service = service;
        this.submitted = false;
      }

      ngOnInit() {
        // Get Group Program Requirement
        this.route.params.subscribe(val => {
          this.ProgramPK = val.id;
        });
        this.service.getProgramRequirementDetails('g', this.ProgramPK).subscribe(program => {
          this.bookingGroup = program;
          console.log(this.bookingGroup);
        });
        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(details => {
          this.programDetails = details;
          console.log(this.programDetails);
        }); // this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);

        this.registerForm = this.fb.group({
          AldultQuantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age57Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age810Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age1112Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age1314Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age1415Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          Age1517Quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(35)]],
          ProgramRestriction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          OrganizationName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          GradeLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          TeacherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          TeacherEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          TeacherPhoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          TotalQuantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      get f() {
        return this.registerForm.controls;
      }

      onSubmit() {
        this.submitted = true;
        console.log("submitted"); // Stop here if form is invalid

        if (this.registerForm.invalid) {
          console.log("invalid");
          return;
        }

        console.log("valid"); // display form values on success

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }

    };

    BookingGroupProgramComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: src_app_services_program_services__WEBPACK_IMPORTED_MODULE_3__["ProgramServices"]
    }];

    BookingGroupProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-group-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-group-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-group-program/booking-group-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-group-program.component.css */
      "./src/app/booking-group-program/booking-group-program.component.css")).default]
    })], BookingGroupProgramComponent);
    /***/
  },

  /***/
  "./src/app/booking-individual-program/booking-individual-program.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/booking-individual-program/booking-individual-program.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookingIndividualProgramBookingIndividualProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    padding-top: 100px;\r\n    padding-bottom: 56px;\r\n  }\r\n\r\n  \r\n  h1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color: #08b2b8; \r\n}\r\n\r\n  \r\n  .row{\r\n  padding-top: 10px;\r\n  padding-left: 14px;\r\n  padding-right: 21px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n  \r\n  .form-check-label{\r\n  padding-left: 10px;\r\n}\r\n\r\n  \r\n  .form_checkbox{\r\n  padding-left: 40px;\r\n}\r\n\r\n  \r\n  .form-group.card{\r\n  padding-top: 7px;\r\n  padding-left: 7px;\r\n}\r\n\r\n  \r\n  label{\r\n  padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy1pbmRpdmlkdWFsLXByb2dyYW0vYm9va2luZy1pbmRpdmlkdWFsLXByb2dyYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0UsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOzs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0VBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ib29raW5nLWluZGl2aWR1YWwtcHJvZ3JhbS9ib29raW5nLWluZGl2aWR1YWwtcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwOGIyYjg7IFxyXG59XHJcblxyXG4ucm93e1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVse1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZvcm1fY2hlY2tib3h7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC5jYXJke1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/booking-individual-program/booking-individual-program.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/booking-individual-program/booking-individual-program.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BookingIndividualProgramComponent */

  /***/
  function srcAppBookingIndividualProgramBookingIndividualProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingIndividualProgramComponent", function () {
      return BookingIndividualProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_program_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/program.services */
    "./src/app/services/program.services.ts");

    let BookingIndividualProgramComponent = class BookingIndividualProgramComponent {
      constructor(fb, route, router, service) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.service = service;
        this.submitted = false;
      }

      ngOnInit() {
        // Get Individual Program Requirement
        this.route.params.subscribe(val => {
          this.ProgramPK = val.id;
          this.service.getProgramRequirementDetails('i', this.ProgramPK).subscribe(program => {
            this.bookingIndividual = program;
          });
          this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(details => {
            this.programDetails = details;
          });
        }); // this.bookingIndividual = new BookingIndividualData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true,true, true);

        this.registerForm = this.fb.group({
          ParticipateName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          ParticipateAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          MerchSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          //AllergyInfo: ['', Validators.required],
          //SpecialInfo: ['', Validators.required],
          MediaRelease: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
          EmergencyMedicalRelease: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
          LiabilityAgreement: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
          InsureProviderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          InsureRecipientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          InsurePolicyNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
          InsurePhoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          AuthorizedPickupName1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          AuthorizedPickupPhone1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          AuthorizedPickupName2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          AuthorizedPickupPhone2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
          EarlyDropOff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          LatePickup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      get f() {
        return this.registerForm.controls;
      }

      onSubmit() {
        this.submitted = true;
        console.log("submitted"); // stop here if form is invalid

        if (this.registerForm.invalid) {
          console.log("invalid");
          return;
        } // display form values on success


        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }

    };

    BookingIndividualProgramComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: src_app_services_program_services__WEBPACK_IMPORTED_MODULE_4__["ProgramServices"]
    }];

    BookingIndividualProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-individual-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-individual-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/booking-individual-program/booking-individual-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-individual-program.component.css */
      "./src/app/booking-individual-program/booking-individual-program.component.css")).default]
    })], BookingIndividualProgramComponent);
    /***/
  },

  /***/
  "./src/app/components/g-program/g-program.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/g-program/g-program.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGProgramGProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options-section {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  align-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.options-margin {\r\n  margin: 0 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nLXByb2dyYW0vZy1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nLXByb2dyYW0vZy1wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLm9wdGlvbnMtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/g-program/g-program.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/g-program/g-program.component.ts ***!
    \*************************************************************/

  /*! exports provided: GProgramComponent */

  /***/
  function srcAppComponentsGProgramGProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GProgramComponent", function () {
      return GProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_program_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let GProgramComponent = class GProgramComponent {
      constructor(auth, service, router, matDialog) {
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.matDialog = matDialog;
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.service.getProgramRequirementByID('g', this.ProgramPK).subscribe(res => {
          this.bookingGroup = res;
        });
        this.varLabels = [{
          var: "AdultQuantity",
          label: "Adult Quantity"
        }, {
          var: "Age57Quantity",
          label: "Age 5-7 Quantity"
        }, {
          var: "Age810Quantity",
          label: "Age 8-10 Quantity"
        }, {
          var: "Age1112Quantity",
          label: "Age 11-12 Quantity"
        }, {
          var: "Age1314Quantity",
          label: "Age 13-14 Quantity"
        }, {
          var: "Age1415Quantity",
          label: "Age 14-15 Quantity"
        }, {
          var: "Age1517Quantity",
          label: "Age 15-17 Quantity"
        }, {
          var: "TotalQuantity",
          label: "Total Quantity"
        }, {
          var: "ProgramRestriction",
          label: "Program Restriction"
        }, {
          var: "OrganizationName",
          label: "Organization Name"
        }, {
          var: "GradeLevel",
          label: "Grade Level"
        }, {
          var: "TeacherName",
          label: "Teacher Name"
        }, {
          var: "TeacherEmail",
          label: "Teacher Email"
        }, {
          var: "TeacherPhoneNo",
          label: "Teacher Phone Number"
        }, {
          var: "AlternativeDate",
          label: "Alternative Date"
        }, {
          var: "EducationPurpose",
          label: "Education Purpose"
        }];
        this.bookingGroup.GroupProgramPK = this.ProgramPK;
        this.bookingGroup.CreatedBy = this.auth.getUserDetails().UserPK;
      } // Event Handler for checkbox
      // Pass checkbox data to EventEmitter for Parent component
      // type: 'g' - Group Program
      //       'i' - Individual Program
      // data: actual data for the checkbox


      chkbDataChange(event) {
        this.dataChange.emit(this.bookingGroup);
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "430px";
        dialogConfig.data = {
          title: "Update Group Program Details",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.submit();
          } else {
            console.log("stop");
          }
        });
      }

      submit() {
        this.service.updateProgramLayoutDetails('g', this.bookingGroup).subscribe(response => {
          this.router.navigateByUrl("/profile/program-management");
        });
      }

    };

    GProgramComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
    }, {
      type: src_app_services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GProgramComponent.prototype, "ProgramPK", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GProgramComponent.prototype, "formData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GProgramComponent.prototype, "dataChange", void 0);
    GProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'g-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./g-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/g-program/g-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./g-program.component.css */
      "./src/app/components/g-program/g-program.component.css")).default]
    })], GProgramComponent);
    /***/
  },

  /***/
  "./src/app/components/i-program/i-program.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/i-program/i-program.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIProgramIProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options-section {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  align-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n.options-margin {\r\n  margin: 0 10px;\r\n}\r\n\r\n.mat-tooltip\r\n{\r\n    font-size: 8pt;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pLXByb2dyYW0vaS1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztJQUVJLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pLXByb2dyYW0vaS1wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLm9wdGlvbnMtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLm1hdC10b29sdGlwXHJcbntcclxuICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/i-program/i-program.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/i-program/i-program.component.ts ***!
    \*************************************************************/

  /*! exports provided: IProgramComponent */

  /***/
  function srcAppComponentsIProgramIProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IProgramComponent", function () {
      return IProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_program_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let IProgramComponent = class IProgramComponent {
      constructor(auth, service, router, matDialog) {
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.matDialog = matDialog;
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.service.getProgramRequirementByID('i', this.ProgramPK).subscribe(res => {
          this.bookingIndividual = res;
        });
        this.varLabels = [{
          var: "ParticipantName",
          label: "Participant Name",
          tooltip: ""
        }, {
          var: "ParticipantAge",
          label: "Participant Age"
        }, {
          var: "Gender",
          label: "Gender"
        }, {
          var: "MerchSize",
          label: "T-Shirt Size"
        }, {
          var: "AllergyInfo",
          label: "Allergy Information"
        }, {
          var: "SpecialInfo",
          label: "Special Information"
        }, {
          var: "InsureProviderName",
          label: "Insurance Provider Name"
        }, {
          var: "InsureRecipientName",
          label: "Insured Recipient Name"
        }, {
          var: "InsurePolicyNo",
          label: "Insurance Policy Number"
        }, {
          var: "InsurePhoneNo",
          label: "Insurance Phone Number"
        }, {
          var: "AuthorizedPickupName1",
          label: "Authorized Pickup Name 1"
        }, {
          var: "AuthorizedPickupPhone1",
          label: "Authorized Pickup Phone 1"
        }, {
          var: "AuthorizedPickupName2",
          label: "Authorized Pickup Name 2"
        }, {
          var: "AuthorizedPickupPhone2",
          label: "Authorized Pickup Phone 2"
        }, {
          var: "EarlyDropOff",
          label: "Early Drop Off"
        }, {
          var: "LatePickup",
          label: "Late Pick-up"
        }, {
          var: "MediaRelease",
          label: "Media Release"
        }, {
          var: "EmergencyMedicalRelease",
          label: "Emergency Medical Release"
        }, {
          var: "LiabilityAgreement",
          label: "Liability Agreement",
          tooltip: "Require User to sign the Liability Agreement"
        }];
        this.bookingIndividual.IndividualProgramPK = this.ProgramPK;
        this.bookingIndividual.CreatedBy = this.auth.getUserDetails().UserPK;
      }

      chkbDataChange(event) {
        this.dataChange.emit(this.bookingIndividual);
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "430px";
        dialogConfig.data = {
          title: "Update Individual Program Details",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.submit();
          } else {
            console.log("stop");
          }
        });
      }

      submit() {
        this.service.updateProgramLayoutDetails('i', this.bookingIndividual).subscribe(response => {
          this.router.navigateByUrl("/profile/program-management");
        });
      }

    };

    IProgramComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
    }, {
      type: src_app_services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IProgramComponent.prototype, "ProgramPK", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], IProgramComponent.prototype, "formData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], IProgramComponent.prototype, "dataChange", void 0);
    IProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'i-program',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./i-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/i-program/i-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./i-program.component.css */
      "./src/app/components/i-program/i-program.component.css")).default]
    })], IProgramComponent);
    /***/
  },

  /***/
  "./src/app/components/modal-dialog/modal-dialog.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/modal-dialog/modal-dialog.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalDialogModalDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#modal-content-wrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    color: white;\r\n    \r\n}\r\n\r\n#modal-title {\r\n    font-size: 22px;\r\n    color: black;\r\n}\r\n\r\n#modal-footer {\r\n    justify-self: right;\r\n    align-self: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n#modal-body{\r\n    color: black;\r\n    padding-top: 10px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#modal-action-button {\r\n    margin-right: 30px;\r\n    background-color:#3b3b3b;\r\n    color: white;\r\n}\r\n\r\n#modal-cancel-button {\r\n    background-color: #4e4e4e;\r\n    color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9kYWwtY29udGVudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4jbW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbW9kYWwtZm9vdGVyIHtcclxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI21vZGFsLWJvZHl7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4jbW9kYWwtYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjNiM2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtb2RhbC1jYW5jZWwtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/modal-dialog/modal-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/modal-dialog/modal-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalDialogComponent */

  /***/
  function srcAppComponentsModalDialogModalDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function () {
      return ModalDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    let ModalDialogComponent = class ModalDialogComponent {
      constructor(dialogRef, modalData) {
        this.dialogRef = dialogRef;
        this.modalData = modalData;
      }

      ngOnInit() {}

      actionFunction() {
        //this.closeModal();
        this.dialogRef.close("Yes");
      }

      closeModal() {
        this.dialogRef.close("No");
      }

    };

    ModalDialogComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    ModalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modal-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal-dialog/modal-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-dialog.component.css */
      "./src/app/components/modal-dialog/modal-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalDialogComponent);
    /***/
  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: AppConstants */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
      return AppConstants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class AppConstants {
      static get BASE_URL() {
        return "http://localhost:4200/";
      }

      static get SERVER_URL() {
        return "http://localhost:3000";
      }

      static get ERR_USER_NOT_FOUND() {
        return "http://localhost:4200/api";
      }

      static get ERR_EMAIL_NOT_FOUND() {
        return "http://localhost:4200/api";
      }

      static get ERR_EMAIL_DUPLICATE() {
        return "http://localhost:4200/api";
      }

      static get ERR_WRONG_PASSWORD() {
        return "http://localhost:4200/api";
      }

    }
    /***/

  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nh1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  padding-top: 90px;\r\n  color: #08b2b8; \r\n}\r\n\r\n.inputField {\r\n  color: black;\r\n}\r\n\r\n.full-width {\r\n  color: black;\r\n}\r\n\r\n/*change color of label*/\r\n\r\n/* ::ng-deep .mat-focused .mat-form-field-label {\r\n  color: black !important;\r\n }\r\n\r\n\r\n /*change color of underline*/\r\n\r\n/*::ng-deep.mat-form-field-underline {\r\n  background-color: black !important;\r\n}/*\r\n\r\n/*change color of underline when focused*/\r\n\r\n/*::ng-deep.mat-form-field-ripple {\r\n background-color: black !important;;\r\n}*/\r\n\r\nhr {\r\n  margin-top: 4rem;\r\n  margin-bottom: 4rem;\r\n  margin-left: 20rem;\r\n  margin-right: 20rem;\r\n  border: 0;\r\n  border-top: 2px solid rgba(0, 0, 0, 0.123);\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  max-width: 500px;  \r\n  min-height: 130px;\r\n  height: 100%;\r\n}\r\n\r\n.inputField{\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  height: 80px;\r\n  width: 100%;\r\n}\r\n\r\n.confirmMessage {\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsd0JBQXdCOztBQUN4Qjs7Ozs7NkJBSzZCOztBQUM1Qjs7Ozt5Q0FJd0M7O0FBQ3pDOztFQUVFOztBQUdGO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgY29sb3I6ICMwOGIyYjg7IFxyXG59XHJcblxyXG4uaW5wdXRGaWVsZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXHJcbi8qIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuIH1cclxuXHJcblxyXG4gLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuIC8qOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufS8qXHJcblxyXG4vKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuLyo6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7O1xyXG59Ki9cclxuXHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcmVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyMyk7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4OyAgXHJcbiAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXRGaWVsZHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29uZmlybU1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: Contact */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/email.services */
    "./src/app/services/email.services.ts");

    let Contact = class Contact {
      constructor(fb, emailService) {
        this.fb = fb;
        this.emailService = emailService;
        this.loading = false;
        this.modalHeader = "Contact Form";
        this.modalContent = " Thank you for contacting us. Your message has been successfully submitted. We will response to you as soon as possible.";
      }

      ngOnInit() {
        this.myForm = this.fb.group({
          fullName: '',
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
      }

      get email() {
        return this.myForm.get('email');
      }

      get subject() {
        return this.myForm.get('subject');
      }

      get message() {
        return this.myForm.get('message');
      }

      submit() {
        this.loading = true;
        let user = {
          name: this.myForm.value.fullName,
          email: this.myForm.value.email,
          subject: this.myForm.value.subject,
          message: this.myForm.value.message
        };
        this.emailService.sendContactEmail(user).subscribe(data => {
          let res = data;
          console.log("\uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F > \uD83D\uDC4F Email has been sent and the message id is ".concat(res.messageId));
        }, err => {
          console.log(err);
          this.loading = false;
          console.log("submitted");
        }, () => {//this.loading = false;
          //this.buttionText = "Submit";
        });
      }

      reset() {
        this.myForm.reset();
        this.loading = false;
      }

    };

    Contact.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_email_services__WEBPACK_IMPORTED_MODULE_3__["EmailService"]
    }];

    Contact = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css")).default]
    })], Contact);
    /***/
  },

  /***/
  "./src/app/createprogram/createprogram.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/createprogram/createprogram.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateprogramCreateprogramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/* Change height of ckeditor */\r\n:host ::ng-deep .ck-editor__editable_inline {\r\n    min-height: 300px !important;\r\n    border-color: gray;\r\n}\r\nh1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color: #08b2b8; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcHJvZ3JhbS9jcmVhdGVwcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXByb2dyYW0vY3JlYXRlcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBDaGFuZ2UgaGVpZ2h0IG9mIGNrZWRpdG9yICovXHJcbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzA4YjJiODsgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/createprogram/createprogram.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/createprogram/createprogram.component.ts ***!
    \**********************************************************/

  /*! exports provided: CreateProgramComponent */

  /***/
  function srcAppCreateprogramCreateprogramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProgramComponent", function () {
      return CreateProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-decoupled-document */
    "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_5__); //import { AppConstants } from '../constants'


    let CreateProgramComponent = class CreateProgramComponent {
      constructor(services, auth, router) {
        this.services = services;
        this.auth = auth;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_5__;
        this.selectedValue = 0;
        this.selectedSubType = 0;
        this.programData = {
          ProgramPk: 0,
          Name: '',
          Description: '',
          DepositAmount: null,
          PricePerParticipant: null,
          MaximumParticipant: null,
          ImgData: '',
          ProgramType: 0,
          CreatedDate: '',
          CreatedBy: 0,
          IsActive: false,
          SubProgramPk: 0
        }; // Initialize Dropdown List for Program Type

        this.programCategories = [{
          id: 0,
          name: "Group Program"
        }, {
          id: 1,
          name: "Individual Program"
        }]; // Initialize Dropdown List for Sub Type of Group Program

        this.programSubCategories = [{
          id: 0,
          name: "None"
        }, {
          id: 1,
          name: "Scout Program"
        }, {
          id: 2,
          name: "Field Trip"
        }];
      }

      ngOnInit() {
        this.programCategories.forEach(e => {
          $("#programCat").append(new Option(e['name'], e['id']));
        });
        this.programSubCategories.forEach(e => {
          $("#programSubCategories").append(new Option(e['name'], e['id']));
        });
      } // EventHandler for drop down list of Program Type


      selectChangeHandler(event) {
        // Update the variable
        this.selectedValue = event.target.value;
      } // EventHandler for drop down list Sub Type of Group Program


      selectSubTypeChangeHandler(event) {
        // Update the variable
        this.selectedSubType = event.target.value;
      }

      onFileChange(event) {
        if (event.target.files.length > 0) {
          this.file = event.target.files[0];
        }
      }

      createProgram() {
        this.programData.CreatedBy = this.auth.getUserDetails().UserPK;
        this.programData.ImgData = "";
        this.programData.ProgramType = this.selectedValue;
        this.programData.SubProgramPk = this.selectedSubType; // Call Programs Service to send request to server

        this.services.addNewProgram(this.getFormData()).subscribe(response => {
          console.log(response);
          this.router.navigateByUrl("/profile/program-details/" + response + "/edit");
        });
      }

      onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
      }

      getFormData() {
        // Use FormData to pass file data to server.
        // Without FormData, the file data will be empty.
        const formData = new FormData();
        formData.append('file', this.file, this.file.name);

        for (var _i = 0, _Object$keys = Object.keys(this.programData); _i < _Object$keys.length; _i++) {
          const key = _Object$keys[_i];
          const value = this.programData[key];
          formData.append(key, value);
        }

        return formData;
      }

    };

    CreateProgramComponent.ctorParameters = () => [{
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_4__["ProgramServices"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    CreateProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createprogram.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createprogram/createprogram.component.html")).default,
      providers: [_services_program_services__WEBPACK_IMPORTED_MODULE_4__["ProgramServices"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createprogram.component.css */
      "./src/app/createprogram/createprogram.component.css")).default]
    })], CreateProgramComponent);
    /***/
  },

  /***/
  "./src/app/customer-info/customer-info.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/customer-info/customer-info.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomerInfoCustomerInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    max-width: 720px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.submit_btn{\r\n    background-color: #FFC312;\r\n    border: 0px;\r\n}\r\n\r\n.user_info{\r\n    padding-top: 20px;\r\n}\r\n\r\n.page_title{\r\n    color: #08b2b8;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.header_title{\r\n    padding-left: 270px;\r\n}\r\n\r\n.contact_header_title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.address_header_title{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.location_info{\r\n    margin: auto;\r\n}\r\n\r\n.address_info{\r\n    padding-top:15px;\r\n}\r\n\r\n.submit_button{\r\n    margin-right: 15px;\r\n    color: black;\r\n}\r\n\r\n.checkbox{\r\n    padding-top:10px;\r\n    margin-left: auto;\r\n}\r\n\r\n.form-check-label{\r\n    font-size:17px;\r\n  }\r\n\r\nh1 {\r\n    font-family: sans-serif;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color: #0ebbff; \r\n  }\r\n\r\ninput.ng-touched.ng-invalid{ color: red; \r\n    border-color: red;}\r\n\r\n.warning{\r\n    color: red; \r\n}\r\n\r\n.card{\r\n    margin: auto;\r\n    width: 400px;\r\n    background-color: rgba(0, 0, 0, 0.5) !important;\r\n}\r\n\r\n.text_header{\r\n    color:white;\r\n}\r\n\r\n.banner{\r\n    background-image: url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    font-family: 'Numans', sans-serif;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    }\r\n\r\nmat-checkbox{\r\n    background: none;\r\n    border: 0px;\r\n    color: white;\r\n}\r\n\r\n.input-group-prepend span{\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border:0 !important;\r\n    width:50px;\r\n}\r\n\r\n::ng-deep .mat-checkbox-frame {\r\n    border-color: white\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0FBRUYsNkJBQTZCLFVBQVU7SUFDbkMsaUJBQWlCLENBQUM7O0FBRXRCO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrSEFBK0g7SUFDL0gsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckI7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdF9idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi51c2VyX2luZm97XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnBhZ2VfdGl0bGV7XHJcbiAgICBjb2xvcjogIzA4YjJiODtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXJfdGl0bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4O1xyXG59XHJcblxyXG4uY29udGFjdF9oZWFkZXJfdGl0bGV7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmFkZHJlc3NfaGVhZGVyX3RpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sb2NhdGlvbl9pbmZve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYWRkcmVzc19pbmZve1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxufVxyXG5cclxuLnN1Ym1pdF9idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jaGVja2JveHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuICAuZm9ybS1jaGVjay1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gIH1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjMGViYmZmOyBcclxuICB9XHJcblxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWR7IGNvbG9yOiByZWQ7IFxyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7fVxyXG5cclxuLndhcm5pbmd7XHJcbiAgICBjb2xvcjogcmVkOyBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfaGVhZGVye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5iYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzgzL2U4L2xham9sbGFfc3Vuc2V0X2JlYWNoX3NlYWxpb25fc2VhX2xpb25fc2FuZGllZ29fY2xvdWRzLTg3MjQ1MS5qcGchZCcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcblxyXG5tYXQtY2hlY2tib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjUwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lIHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/customer-info/customer-info.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/customer-info/customer-info.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomerRegisterComponent */

  /***/
  function srcAppCustomerInfoCustomerInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerRegisterComponent", function () {
      return CustomerRegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_customer_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/customer.services */
    "./src/app/services/customer.services.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    let CustomerRegisterComponent = class CustomerRegisterComponent {
      constructor(auth, router, route, formBuilder, customerService, matDialog) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.matDialog = matDialog;
        this.submitted = false;
        this.errorMessage = '';
        this.faAddressBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faAddressBook"];
        this.faPhoneSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPhoneSquare"];
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faHome"];
        this.faMapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMapMarker"];
        this.faMapPin = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMapPin"];
        this.faMap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMap"];
        this.credentials = {
          CustomerPK: 0,
          FirstName: '',
          LastName: '',
          PhoneNo: '',
          StreetAddress: '',
          StreetAddress2: '',
          City: '',
          State: '',
          Zipcode: '',
          Subscribe: 0
        };
      }

      ngOnInit() {
        this.customerInfoForm = this.formBuilder.group({
          firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phoneNum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)]],
          address_street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address_unit: [''],
          address_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address_state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
          address_zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
          subscribe: [0]
        });
        this.route.params.subscribe(val => {
          this.credentials.CustomerPK = val.id;
        });
      }

      checkSubmission() {
        this.submitted = true;
        return this.customerInfoForm.status;
      }

      get f() {
        return this.customerInfoForm.controls;
      }

      openModal() {
        //Validate form before open modal dialog
        this.submitted = true; // stop here if form is invalid

        if (this.customerInfoForm.invalid) {
          return;
        } //Configure Modal Dialog


        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Register Confirmation",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        };
        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            this.finishRegister();
          }
        });
      }

      checkBoxClicked() {
        if (this.customerInfoForm.get('subscribe').value == 0) this.customerInfoForm.get('subscribe').setValue(1);else this.customerInfoForm.get('subscribe').setValue(0);
        this.credentials.Subscribe = this.customerInfoForm.get('subscribe').value;
      }

      finishRegister() {
        this.submitted = true;

        if (this.customerInfoForm.invalid) {
          return;
        } // this.customer = new CustomerData()


        this.customerService.finishRegister(this.credentials).subscribe(res => {
          if (res.error) {
            this.errorMessage = "*" + res.error;
            return;
          } else this.router.navigateByUrl("/");
        }, err => {
          console.error(err);
        });
      }

    };

    CustomerRegisterComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_customer_services__WEBPACK_IMPORTED_MODULE_5__["CustomerService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
    }];

    CustomerRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer-info/customer-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer-info.component.css */
      "./src/app/customer-info/customer-info.component.css")).default]
    })], CustomerRegisterComponent); // providers: [
    //   {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
    // ]

    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    let DashboardComponent = class DashboardComponent {
      constructor(auth) {
        this.auth = auth;
      }

      ngOnInit() {
        this.auth.profile().subscribe(user => {
          this.role = user.Role_FK;
        }, err => {
          console.error(err);
        });
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/group-program/group-program.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/group-program/group-program.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGroupProgramGroupProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  color: #08b2b8; \r\n} \r\n\r\nh5 {\r\n  color: #08b2b8 !important;\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n} \r\n\r\nhr{\r\n  margin-top: 2em;\r\n  margin-bottom:-1em;\r\n} \r\n\r\n.mat-button, .mat-raised-button:hover{\r\n  background-color: rgb(6, 3, 189);\r\n} \r\n\r\n.list-group{\r\n  border-width:0px;\r\n} \r\n\r\n.container {\r\n  padding-top: 120px;\r\n} \r\n\r\n.col-lg-12{\r\n  padding-bottom: 25px;\r\n} \r\n\r\n.nav-link{\r\n  color: #252525;\r\n  font-weight: normal;\r\n} \r\n\r\nbody{\r\n  background-image:  -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n  background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n  background-size:100%;\r\n} \r\n\r\na:hover {\r\n  background-color:#a5a5a5 !important;\r\n} \r\n\r\n.filter{\r\n  padding: 20px;\r\n  margin-left: 50px;\r\n  font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAtcHJvZ3JhbS9ncm91cC1wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtT0FBeUw7RUFBekwseUxBQXlMO0VBQ3pMLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAtcHJvZ3JhbS9ncm91cC1wcm9ncmFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgY29sb3I6ICMwOGIyYjg7IFxyXG59IFxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiAjMDhiMmI4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmhye1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOi0xZW07XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDMsIDE4OSk7XHJcbn0gXHJcblxyXG4ubGlzdC1ncm91cHtcclxuICBib3JkZXItd2lkdGg6MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5jb2wtbGctMTJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlua3tcclxuICBjb2xvcjogIzI1MjUyNTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzgzL2U4L2xham9sbGFfc3Vuc2V0X2JlYWNoX3NlYWxpb25fc2VhX2xpb25fc2FuZGllZ29fY2xvdWRzLTg3MjQ1MS5qcGchZCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG59IFxyXG5cclxuYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYTVhNWE1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXJ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/group-program/group-program.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/group-program/group-program.component.ts ***!
    \**********************************************************/

  /*! exports provided: GroupProgramComponent */

  /***/
  function srcAppGroupProgramGroupProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupProgramComponent", function () {
      return GroupProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");

    let GroupProgramComponent = class GroupProgramComponent {
      constructor(programService) {
        this.programService = programService;
        this.searchText = "";
      }

      ngOnInit() {
        this.programService.getActivePrograms().then(result => {
          this.programs = result;
          this.programs.forEach(e => {
            e.ImgData = _constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].SERVER_URL + e.ImgData;
          });
        });
      }

      clearSearch() {
        this.searchText = "";
      }

    };

    GroupProgramComponent.ctorParameters = () => [{
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]
    }];

    GroupProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/group-program/group-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group-program.component.css */
      "./src/app/group-program/group-program.component.css")).default]
    })], GroupProgramComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.container {\r\n    padding: 120px;\r\n  }\r\n\r\n  h1 {\r\n    background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);\r\n    background-size: cover;\r\n    color: transparent;\r\n    -moz-background-clip: text;\r\n    -webkit-background-clip: text;\r\n    text-transform: uppercase;\r\n    font-size: 40px; \r\n    padding-bottom: 10px;\r\n    padding-top: 50px;\r\n    line-height: 50px; \r\n  }\r\n\r\n  h3 {  color:#5077a9;}\r\n\r\n  p { color: #4c4a37; font-size: 16px; line-height: 1.75;; margin: 0 0; }\r\n\r\n  h4{\r\n  color:#08b2b8; font-size: 20px; font-weight: bold; line-height: 1.25; margin: 0; \r\n}\r\n\r\n  .image_div{\r\n  padding: 1.1rem!important;\r\n  padding-top:.25rem!important;\r\n  padding-bottom: 0rem!important;\r\n}\r\n\r\n  h5{\r\n  color:black; font-family: 'Source Sans Pro', sans-serif; font-size: 16px; font-weight: 300; line-height: 32px; margin: 0; \r\n}\r\n\r\n  .banner{\r\n  /* background: url(\"https://wallpaperheart.com/wp-content/uploads/2018/04/windows-beach-of-windowsnatural-dock-free-high-resolution-scenery-landscape-natural-beautiful-scenery-wallpapers.jpg\"); */\r\n  /* background: url(\"http://www.metricenv.com/wp-content/uploads/2016/04/home-page-background.png\"); */\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))),  url(\"https://lajollamom.com/wp-content/uploads/2009/11/la-jolla-cove-seal.jpg\");\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url(\"https://lajollamom.com/wp-content/uploads/2009/11/la-jolla-cove-seal.jpg\");\r\n  background-size: 100% 100%;\r\n  padding: 120px;\r\n}\r\n\r\n  .text {\r\n  color: white; font-size: 60px; margin-top: 20 px; padding-bottom: 15px; text-shadow: 1px 1px 2px #00000080;\r\n\r\n}\r\n\r\n  .col-xs-12{\r\n  padding-bottom: 50px;\r\n}\r\n\r\n  .bottom_info{\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  /* margin-left: 3%; */\r\n  /* margin-bottom: auto; */\r\n  position: absolute;\r\n  bottom: 10px;\r\n}\r\n\r\n  .block-with-text {\r\n  overflow: hidden;\r\n  position: relative;\r\n  line-height: 16px;\r\n  max-height: 98px;\r\n  text-align: justify;\r\n  margin-right: -1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n  .card {\r\n  margin: 5% 0%;\r\n}\r\n\r\n  .card-deck{\r\n  padding: 20px;\r\n}\r\n\r\n  .card-img-top{\r\n  height: 50%;\r\n}\r\n\r\n  .card-title{\r\n  text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdGQUFnRjtJQUNoRixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFRixNQUFNLGFBQWEsQ0FBQzs7RUFFcEIsSUFBSSxjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixHQUFHLFdBQVcsRUFBRTs7RUFFdEU7RUFDRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFNBQVM7QUFDakY7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7RUFHQTtFQUNFLFdBQVcsRUFBRSwwQ0FBMEMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUztBQUMxSDs7RUFFQTtFQUNFLG1NQUFtTTtFQUNuTSxxR0FBcUc7RUFDckcscU1BQTJKO0VBQTNKLDJKQUEySjtFQUMzSiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7RUFFQTtFQUNFLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsa0NBQWtDOztBQUU1Rzs7RUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzI2QlJPclNIbG15enpIZjNpL2dpcGh5LmdpZik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDQwcHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4OyBcclxuICB9XHJcblxyXG5oMyB7ICBjb2xvcjojNTA3N2E5O31cclxuXHJcbnAgeyBjb2xvcjogIzRjNGEzNzsgZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMS43NTs7IG1hcmdpbjogMCAwOyB9XHJcblxyXG5oNHtcclxuICBjb2xvcjojMDhiMmI4OyBmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBsaW5lLWhlaWdodDogMS4yNTsgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuLmltYWdlX2RpdntcclxuICBwYWRkaW5nOiAxLjFyZW0haW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOi4yNXJlbSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDByZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaDV7XHJcbiAgY29sb3I6YmxhY2s7IGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogMzAwOyBsaW5lLWhlaWdodDogMzJweDsgbWFyZ2luOiAwOyBcclxufVxyXG5cclxuLmJhbm5lcntcclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcmhlYXJ0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC93aW5kb3dzLWJlYWNoLW9mLXdpbmRvd3NuYXR1cmFsLWRvY2stZnJlZS1oaWdoLXJlc29sdXRpb24tc2NlbmVyeS1sYW5kc2NhcGUtbmF0dXJhbC1iZWF1dGlmdWwtc2NlbmVyeS13YWxscGFwZXJzLmpwZ1wiKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vd3d3Lm1ldHJpY2Vudi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvaG9tZS1wYWdlLWJhY2tncm91bmQucG5nXCIpOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksICB1cmwoXCJodHRwczovL2xham9sbGFtb20uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDA5LzExL2xhLWpvbGxhLWNvdmUtc2VhbC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgcGFkZGluZzogMTIwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogd2hpdGU7IGZvbnQtc2l6ZTogNjBweDsgbWFyZ2luLXRvcDogMjAgcHg7IHBhZGRpbmctYm90dG9tOiAxNXB4OyB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDgwO1xyXG5cclxufVxyXG5cclxuLmNvbC14cy0xMntcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJvdHRvbV9pbmZve1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAvKiBtYXJnaW4tbGVmdDogMyU7ICovXHJcbiAgLyogbWFyZ2luLWJvdHRvbTogYXV0bzsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY2std2l0aC10ZXh0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtYXgtaGVpZ2h0OiA5OHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogNSUgMCU7XHJcbn1cclxuXHJcbi5jYXJkLWRlY2t7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");

    let HomeComponent = class HomeComponent {
      constructor(programService) {
        this.programService = programService;
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faComment = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComment"];
        this.programs = [];
      }

      ngOnInit() {
        this.programService.getAllPrograms().then(result => {
          for (var i = 0; i < 6; i++) {
            this.programs.push(result[i]);
            this.programs[i].ImgData = _constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + result[i].ImgData;
          }
        });
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_3__["ProgramServices"]
    }];

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      providers: [_services_program_services__WEBPACK_IMPORTED_MODULE_3__["ProgramServices"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/individual-program/individual-program.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/individual-program/individual-program.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndividualProgramIndividualProgramComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  color: #08b2b8; \r\n  /* text-shadow: 1px 1px 2px #00000080; */\r\n\r\n}\r\n\r\nh5 {\r\n  color: #08b2b8 !important;\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n\r\n}\r\n\r\nhr{\r\n  margin-top: 2em;\r\n  margin-bottom:-1em;\r\n}\r\n\r\n.mat-button, .mat-raised-button:hover{\r\n  background-color: rgb(6, 3, 189);\r\n}\r\n\r\n.list-group{\r\n  border-width:0px;\r\n}\r\n\r\n.container {\r\n  padding-top: 120px;\r\n}\r\n\r\n.col-lg-12{\r\n  padding-bottom: 25px;\r\n}\r\n\r\na:hover {\r\n  background-color:#185e61 !important;\r\n}\r\n\r\n.filter{\r\n  padding: 20px;\r\n  margin-left: 50px;\r\n  font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1wcm9ncmFtL2luZGl2aWR1YWwtcHJvZ3JhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx3Q0FBd0M7O0FBRTFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7O0FBRTVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5kaXZpZHVhbC1wcm9ncmFtL2luZGl2aWR1YWwtcHJvZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDhiMmI4OyBcclxuICAvKiB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDgwOyAqL1xyXG5cclxufVxyXG5cclxuaDUge1xyXG4gIGNvbG9yOiAjMDhiMmI4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG59XHJcblxyXG5ocntcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTotMWVtO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCAzLCAxODkpO1xyXG59IFxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgYm9yZGVyLXdpZHRoOjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4uY29sLWxnLTEye1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxODVlNjEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/individual-program/individual-program.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/individual-program/individual-program.component.ts ***!
    \********************************************************************/

  /*! exports provided: IndividualProgramComponent */

  /***/
  function srcAppIndividualProgramIndividualProgramComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualProgramComponent", function () {
      return IndividualProgramComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");

    let IndividualProgramComponent = class IndividualProgramComponent {
      constructor(programService) {
        this.programService = programService;
        this.searchText = "";
      }

      ngOnInit() {
        this.programService.getActivePrograms().then(result => {
          this.programs = result;
          this.programs.forEach(e => {
            e.ImgData = _constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].SERVER_URL + e.ImgData;
          });
        });
      }
      /*   onReady(editor) {
            console.log(editor)
            editor.ui.getEditableElement().parentElement.insertBefore(
                editor.ui.getEditableElement()
            );
        } */


      clearSearch() {
        this.searchText = "";
      }

    };

    IndividualProgramComponent.ctorParameters = () => [{
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]
    }];

    IndividualProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./individual-program.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/individual-program/individual-program.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./individual-program.component.css */
      "./src/app/individual-program/individual-program.component.css")).default]
    })], IndividualProgramComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner{\r\n    background-image: url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    font-family: 'Numans', sans-serif;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    }\r\n    \r\n    .container{\r\n    height: 100%;\r\n    align-content: center;\r\n    }\r\n    \r\n    .card{\r\n    height:430px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 400px;\r\n    background-color: rgba(0, 0, 0, 0.5) !important;\r\n    }\r\n    \r\n    .card-header h3{\r\n    color: white;\r\n    }\r\n    \r\n    .input-group-prepend span{\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border:0 !important;\r\n    }\r\n    \r\n    input:focus{\r\n    outline: 0 0 0 0  !important;\r\n    box-shadow: 0 0 0 0 !important;\r\n    \r\n    }\r\n    \r\n    .remember{\r\n    color: white;\r\n    }\r\n    \r\n    .remember input\r\n    {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    }\r\n    \r\n    .login_btn{\r\n    color: black;\r\n    background-color: #FFC312;\r\n    width: 100px;\r\n    }\r\n    \r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: white;\r\n    }\r\n    \r\n    .links{\r\n    color: white;\r\n    }\r\n    \r\n    .links a{\r\n    margin-left: 4px;\r\n    }\r\n    \r\n    .error{\r\n        color: rgb(211, 23, 23);\r\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n        font-size: 16px;\r\n    }\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtIQUErSDtJQUMvSCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQjs7SUFFQTtJQUNBLFlBQVk7SUFDWixxQkFBcUI7SUFDckI7O0lBRUE7SUFDQSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osK0NBQStDO0lBQy9DOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBO0lBQ0EsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25COztJQUVBO0lBQ0EsNEJBQTRCO0lBQzVCLDhCQUE4Qjs7SUFFOUI7O0lBRUE7SUFDQSxZQUFZO0lBQ1o7O0lBRUE7O0lBRUEsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCOztJQUVBO0lBQ0EsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1o7O0lBRUE7SUFDQSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBO0lBQ0EsZ0JBQWdCO0lBQ2hCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLDZFQUE2RTtRQUM3RSxlQUFlO0lBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzgzL2U4L2xham9sbGFfc3Vuc2V0X2JlYWNoX3NlYWxpb25fc2VhX2xpb25fc2FuZGllZ29fY2xvdWRzLTg3MjQ1MS5qcGchZCcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJke1xyXG4gICAgaGVpZ2h0OjQzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIGgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZW1lbWJlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlbWVtYmVyIGlucHV0XHJcbiAgICB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saW5rc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmtzIGF7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvcntcclxuICAgICAgICBjb2xvcjogcmdiKDIxMSwgMjMsIDIzKTtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    let LoginComponent = class LoginComponent {
      constructor(auth, router, formBuilder) {
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.errorMessage = '';
        this.credentials = {
          UserPK: 0,
          Username: '',
          Password: '',
          Role_FK: '',
          Email: ''
        };
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faKey"];
      }

      ngOnInit() {
        this.loginForm = this.formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        }); // this.auth.profile().subscribe(
        //     user => {
        //         this.router.navigateByUrl('/')
        //     }
        // )
      } // convenience getter for easy access to form fields


      get f() {
        return this.loginForm.controls;
      }

      login() {
        this.submitted = true;

        if (this.loginForm.invalid) {
          return;
        }

        this.auth.login(this.credentials).subscribe(() => {
          this.router.navigateByUrl('/profile');
        }, err => {
          //alert('Username and password do not match')            
          this.errorMessage = '*Username and password do not match';
          console.error(err);
          return;
        });
      }

      MustMatch(controlName, matchingControlName) {
        return formGroup => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/password-service/change-current-password/change-current-password.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/password-service/change-current-password/change-current-password.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordServiceChangeCurrentPasswordChangeCurrentPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group{\r\n    padding: 20px;\r\n}\r\n\r\n.row-header {\r\n    font-weight: bold;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 45px;\r\n  font-weight: bold;\r\n  padding-top: 20px;\r\n  color: #08b2b8; \r\n}\r\n\r\n.text-bold{\r\n    font-weight: bold;\r\n}\r\n\r\n.errorMessage{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtc2VydmljZS9jaGFuZ2UtY3VycmVudC1wYXNzd29yZC9jaGFuZ2UtY3VycmVudC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQtc2VydmljZS9jaGFuZ2UtY3VycmVudC1wYXNzd29yZC9jaGFuZ2UtY3VycmVudC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucm93LWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjMDhiMmI4OyBcclxufVxyXG5cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/password-service/change-current-password/change-current-password.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/password-service/change-current-password/change-current-password.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ChangeCurrentPasswordComponent */

  /***/
  function srcAppPasswordServiceChangeCurrentPasswordChangeCurrentPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeCurrentPasswordComponent", function () {
      return ChangeCurrentPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/email.services */
    "./src/app/services/email.services.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let ChangeCurrentPasswordComponent = class ChangeCurrentPasswordComponent {
      constructor(fb, auth, emailService, route, router, matDialog) {
        this.fb = fb;
        this.auth = auth;
        this.emailService = emailService;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.errorMessage = '';
        this.submitted = false;
        this.userData = {
          UserPK: 0,
          currentPassword: '',
          newPassword: ''
        };
        this.credentials = {
          UserPK: 0,
          Username: '',
          Password: '',
          Role_FK: '',
          Email: ''
        };
      }

      ngOnInit() {
        this.changePasswordForm = this.fb.group({
          oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: this.MustMatch('password', 'confirmPassword')
        });
        this.errorMessage = '';
        this.userData.UserPK = this.auth.getUserDetails().UserPK;
        this.currentUserPK = this.auth.getUserDetails().UserPK;
        this.credentials.UserPK = this.auth.getUserDetails().UserPK;
        this.credentials.Username = this.auth.getUserDetails().Username;
        this.credentials.Email = this.auth.getUserDetails().Email;
      }

      get f() {
        return this.changePasswordForm.controls;
      }

      MustMatch(controlName, matchingControlName) {
        return formGroup => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Change Password",
          description: "Password has been successfully updated. You are now redirecting to Dashboard",
          actionButtonText: "Close",
          numberOfButton: "1"
        };
        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //********************
            //IMPORTANT:
            //********************/
            //Need to log out and log in again to generate new token for this new session
            this.auth.logout(); //Login

            this.auth.login(this.credentials).subscribe(() => {
              this.router.navigateByUrl('/profile');
            }, err => {
              //alert('Username and password do not match')            
              this.errorMessage = '*Error while changing password';
              console.error(err);
              return;
            });
          } else {
            console.log("stop");
          }
        });
      }

      setNewPassword() {
        this.submitted = true; // stop here if form is invalid

        if (this.changePasswordForm.invalid) {
          return;
        } //bind newPassword to credentials and userData object


        this.userData.newPassword = this.newPassword;
        this.credentials.Password = this.newPassword;
        this.auth.changeCurrentPassword(this.userData.UserPK, this.userData).subscribe(data => {
          if (data.error) {
            this.errorMessage = data.error;
            return;
          } else {
            console.log(data);
            this.openModal();
          }
        }, err => {
          console.log(err);
          return;
        }); //Send confirmation email about changing password

        this.emailService.sendPasswordConfirmationEmail(this.credentials).subscribe(res => {
          if (res.error) {
            console.log("fotgot ts file: " + res.error);
          } else {
            console.log("Reset Email has been sent to " + this.credentials.Email);
          }
        }, err => {
          console.log(err);
        });
      }

    };

    ChangeCurrentPasswordComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
    }, {
      type: _services_email_services__WEBPACK_IMPORTED_MODULE_3__["EmailService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
    }];

    ChangeCurrentPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-current-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/change-current-password/change-current-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-current-password.component.css */
      "./src/app/password-service/change-current-password/change-current-password.component.css")).default]
    })], ChangeCurrentPasswordComponent);
    /***/
  },

  /***/
  "./src/app/password-service/forgot-password/forgot-password.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/password-service/forgot-password/forgot-password.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordServiceForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.banner{\r\n  background-image: url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100%;\r\n  font-family: 'Numans', sans-serif;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  }\r\n  \r\n  .container{\r\n  height: 100%;\r\n  align-content: center;\r\n  }\r\n  \r\n  .card{\r\n  height:400px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  width: 400px;\r\n  background-color: rgba(0, 0, 0, 0.5) !important;\r\n  }\r\n  \r\n  .card-header h3{\r\n  color: white;\r\n  }\r\n  \r\n  .input-group-prepend span{\r\n  width: 50px;\r\n  background-color: #FFC312;\r\n  color: black;\r\n  border:0 !important;\r\n  }\r\n  \r\n  input:focus{\r\n  outline: 0 0 0 0  !important;\r\n  box-shadow: 0 0 0 0 !important;\r\n  \r\n  }\r\n  \r\n  .reset-btn{\r\n  color: black;\r\n  background-color: #FFC312;\r\n  width: 100px;\r\n  }\r\n  \r\n  .reset-btn:hover{\r\n  color: black;\r\n  background-color: white;\r\n  }\r\n  \r\n  .links{\r\n  color: white;\r\n  }\r\n  \r\n  .links a{\r\n  margin-left: 4px;\r\n  }\r\n  \r\n  /* .error{\r\n      color: rgb(211, 23, 23);\r\n      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n      font-size: 16px;\r\n  } */\r\n\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtc2VydmljZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsK0hBQStIO0VBQy9ILHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCOztFQUVBO0VBQ0EsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQjs7RUFFQTtFQUNBLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0M7O0VBRUE7RUFDQSxZQUFZO0VBQ1o7O0VBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7O0VBRUE7RUFDQSw0QkFBNEI7RUFDNUIsOEJBQThCOztFQUU5Qjs7RUFHQTtFQUNBLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaOztFQUVBO0VBQ0EsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qjs7RUFFQTtFQUNBLFlBQVk7RUFDWjs7RUFFQTtFQUNBLGdCQUFnQjtFQUNoQjs7RUFFQTs7OztLQUlHIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQtc2VydmljZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJhbm5lcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzgzL2U4L2xham9sbGFfc3Vuc2V0X2JlYWNoX3NlYWxpb25fc2VhX2xpb25fc2FuZGllZ29fY2xvdWRzLTg3MjQ1MS5qcGchZCcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgaGVpZ2h0OjQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciBoM3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgfVxyXG5cclxuICBcclxuICAucmVzZXQtYnRue1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlc2V0LWJ0bjpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5rc3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5rcyBhe1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG5cclxuICAvKiAuZXJyb3J7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjExLCAyMywgMjMpO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH0gKi9cclxuXHJcbiAgXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/password-service/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/password-service/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppPasswordServiceForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/email.services */
    "./src/app/services/email.services.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let ForgotPasswordComponent = class ForgotPasswordComponent {
      constructor(fb, auth, emailService, matDialog, router) {
        this.fb = fb;
        this.auth = auth;
        this.emailService = emailService;
        this.matDialog = matDialog;
        this.router = router;
        this.submitted = false;
        this.userInfo = {
          UserPK: '',
          Username: '',
          Password: '',
          Email: '',
          resetPasswordToken: ''
        };
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
      }

      ngOnInit() {
        this.myForm = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
      }

      get f() {
        return this.myForm.controls;
      }

      resetPassword() {
        this.submitted = true;

        if (this.myForm.invalid) {
          return;
        }

        console.log(this.userInfo);
        this.emailService.sendResetPasswordEmail(this.userInfo).subscribe(res => {
          if (res.error) {
            console.log("fotgot ts file: " + res.error);
          } else {
            console.log("Reset Email has been sent to " + this.userInfo.Email);
          }

          this.openModal();
        }, err => {
          console.log(err);
        });
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Forgot Password",
          description: "Reset Password Email has been sent to " + this.userInfo.Email + ". Please follow instructions in the email to reset your password. You are now redirecting to Login Page.",
          actionButtonText: "Close",
          numberOfButton: "1"
        };
        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //Redirect users to login page
            this.router.navigateByUrl('/login');
          } else {
            console.log("stop");
          }
        });
      }

    };

    ForgotPasswordComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _services_email_services__WEBPACK_IMPORTED_MODULE_5__["EmailService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/password-service/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/password-service/reset-password/reset-password.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/password-service/reset-password/reset-password.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordServiceResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.banner{\r\n  background-image: url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  height: 100%;\r\n  font-family: 'Numans', sans-serif;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n  }\r\n\r\n  p{\r\n    color: red;\r\n  }\r\n\r\n  .error-message{\r\n    color: white;\r\n    padding-bottom: 20px;\r\n\r\n  }\r\n\r\n  .container{\r\n  height: 100%;\r\n  align-content: center;\r\n  }\r\n\r\n  .card{\r\n  height:450px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  width: 400px;\r\n  background-color: rgba(0, 0, 0, 0.5) !important;\r\n  }\r\n\r\n  .card-header h3{\r\n  color: white;\r\n  }\r\n\r\n  .input-group-prepend span{\r\n  width: 50px;\r\n  background-color: #FFC312;\r\n  color: black;\r\n  border:0 !important;\r\n  }\r\n\r\n  input:focus{\r\n  outline: 0 0 0 0  !important;\r\n  box-shadow: 0 0 0 0 !important;\r\n  \r\n  }\r\n\r\n  .remember{\r\n  color: white;\r\n  }\r\n\r\n  .remember input\r\n  {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-left: 15px;\r\n  margin-right: 5px;\r\n  }\r\n\r\n  .update-btn{\r\n  color: black;\r\n  background-color: #FFC312;\r\n  width: 150px;\r\n  }\r\n\r\n  .update-btn:hover{\r\n  color: black;\r\n  background-color: white;\r\n  }\r\n\r\n  .links{\r\n  color: white;\r\n  }\r\n\r\n  .links a{\r\n  margin-left: 4px;\r\n  }\r\n\r\n  /* .error{\r\n      color: rgb(211, 23, 23);\r\n      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n      font-size: 16px;\r\n  } */\r\n\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtc2VydmljZS9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtIQUErSDtFQUMvSCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7O0VBRXRCOztFQUNBO0VBQ0EsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQjs7RUFFQTtFQUNBLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwrQ0FBK0M7RUFDL0M7O0VBRUE7RUFDQSxZQUFZO0VBQ1o7O0VBRUE7RUFDQSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7O0VBRUE7RUFDQSw0QkFBNEI7RUFDNUIsOEJBQThCOztFQUU5Qjs7RUFFQTtFQUNBLFlBQVk7RUFDWjs7RUFFQTs7RUFFQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakI7O0VBRUE7RUFDQSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWjs7RUFFQTtFQUNBLFlBQVk7RUFDWix1QkFBdUI7RUFDdkI7O0VBRUE7RUFDQSxZQUFZO0VBQ1o7O0VBRUE7RUFDQSxnQkFBZ0I7RUFDaEI7O0VBRUE7Ozs7S0FJRyIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXNlcnZpY2UvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmFubmVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jLndhbGxoZXJlLmNvbS9waG90b3MvODMvZTgvbGFqb2xsYV9zdW5zZXRfYmVhY2hfc2VhbGlvbl9zZWFfbGlvbl9zYW5kaWVnb19jbG91ZHMtODcyNDUxLmpwZyFkJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyZHtcclxuICBoZWlnaHQ6NDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyIGgze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQgc3BhbntcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnJlbWVtYmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnJlbWVtYmVyIGlucHV0XHJcbiAge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwZGF0ZS1idG57XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICBcclxuICAudXBkYXRlLWJ0bjpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5rc3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5rcyBhe1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG5cclxuICAvKiAuZXJyb3J7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjExLCAyMywgMjMpO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH0gKi9cclxuXHJcbiAgXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/password-service/reset-password/reset-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/password-service/reset-password/reset-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppPasswordServiceResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/email.services */
    "./src/app/services/email.services.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts"); //import { ConsoleReporter } from 'jasmine';


    let ResetPasswordComponent = class ResetPasswordComponent {
      constructor(fb, auth, emailService, route, router, matDialog) {
        this.fb = fb;
        this.auth = auth;
        this.emailService = emailService;
        this.route = route;
        this.router = router;
        this.matDialog = matDialog;
        this.errorMessage = '';
        this.submitted = false;
        this.resetToken = ''; //Icon for UI

        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faKey"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        this.faCheckDouble = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckDouble"];
      }

      ngOnInit() {
        this.errorMessage = '';
        this.resetPasswordForm = this.fb.group({
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: this.MustMatch('password', 'confirmPassword')
        });
        this.CurrentState = "Wait";
        this.route.params.subscribe(params => {
          this.resetToken = params.token;
          console.log(this.resetToken); //If token is empty, navigate to homepage, else verify the token

          if (!params.token) {
            //Need to research on this
            this.router.navigateByUrl("/");
            console.log("Token is empty");
          } else {
            this.VerifyToken();
          }
        });
      }

      VerifyToken() {
        this.emailService.ValidPasswordToken({
          resettoken: this.resetToken
        }).subscribe(data => {
          console.log("Response data: " + data.message); //Token is expired

          if (data.message == "ExpiredToken") {
            this.CurrentState = "NotVerified";
            this.errorMessage = "Token is invalid or expired";
          } //User is deleted before setting new password
          else if (data.message == "UserNotFound") {
              this.CurrentState = "NotVerified";
              this.errorMessage = "Token is invalid or expired";
            } //The reset password link has been used before, token is invalid
            else if (data.message == "PasswordHasChanged") {
                this.CurrentState = "NotVerified";
                this.errorMessage = "Token is invalid or expired";
              } else {
                this.CurrentState = "TokenValid";
                console.log("Current UserPK: " + data.UserPK);
                this.currentUserPK = data.UserPK; //get userDetails data

                this.auth.getUserDetailsByID(this.currentUserPK).subscribe(user => {
                  this.userDetails = user;
                });
              }

          console.log(this.CurrentState);
        }, err => {
          console.log("No data");
          this.CurrentState = "NotVerified";
          this.errorMessage = "Token is invalid or expired";
        });
      }

      get f() {
        return this.resetPasswordForm.controls;
      }

      MustMatch(controlName, matchingControlName) {
        return formGroup => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }

      setNewPassword() {
        this.submitted = true; // stop here if form is invalid

        if (this.resetPasswordForm.invalid) {
          return;
        }

        this.userDetails.Password = this.newPassword;
        console.log(this.userDetails);
        this.auth.resetUserPassword(this.currentUserPK, this.userDetails).subscribe(response => {
          console.log("Respone: " + response.message);
          this.openModal(); // setTimeout(() =>{
          //     //switch to log in page in 5 sec                
          //     this.router.navigateByUrl('/login')
          // }, 3000)
        });
        this.emailService.sendPasswordConfirmationEmail(this.userDetails).subscribe(res => {
          if (res.error) {
            console.log("fotgot ts file: " + res.error);
          } else {
            console.log("Reset Email has been sent to " + this.userDetails.Email);
          }
        }, err => {
          console.log(err);
        });
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Set New Password",
          description: "Password has been successfully updated. You are now redirecting to Login Page",
          actionButtonText: "Close",
          numberOfButton: "1"
        };
        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //redirect Users to login page
            this.router.navigateByUrl('/login');
          } else {
            console.log("stop");
          }
        });
      }

    };

    ResetPasswordComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _services_email_services__WEBPACK_IMPORTED_MODULE_4__["EmailService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
    }];

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/password-service/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/password-service/reset-password/reset-password.component.css")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/profile-info/profile-info.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/profile-info/profile-info.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileInfoProfileInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #08b2b8; \r\n  }\r\n\r\nh2{\r\n    padding:20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1pbmZvL3Byb2ZpbGUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzA4YjJiODsgXHJcbiAgfVxyXG5cclxuaDJ7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile-info/profile-info.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile-info/profile-info.component.ts ***!
    \********************************************************/

  /*! exports provided: ProfileInfo */

  /***/
  function srcAppProfileInfoProfileInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileInfo", function () {
      return ProfileInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_customer_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/customer.services */
    "./src/app/services/customer.services.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let ProfileInfo = class ProfileInfo {
      constructor(route, router, customer, fb, matDialog) {
        this.route = route;
        this.router = router;
        this.customer = customer;
        this.fb = fb;
        this.matDialog = matDialog;
        this.submitted = false;
      }

      ngOnInit() {
        this.isDisabled = true;
        this.route.params.subscribe(val => {
          this.currentCustomerPK = val.id;
          this.customer.getCustomerInfoByID(this.currentCustomerPK).subscribe(cus => {
            this.customerDetails = cus;
            console.log(this.customerDetails);

            if (cus.Subscribe == 0) {
              this.subscribeChecked = false;
            } else {
              this.subscribeChecked = true;
            }
          });
        });
        this.customerInfoForm = this.fb.group({
          FirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          LastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          PhoneNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          Address2: [],
          City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          State: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(2)]],
          Zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          Subscribe: []
        });
      }

      get f() {
        return this.customerInfoForm.controls;
      } //Configure Modal Dialog


      openModal() {
        //Form validation
        this.submitted = true;

        if (this.customerInfoForm.invalid) {
          return;
        } //Configure Modal Dialog


        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Update Personal Info",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.updateInfo();
          } else {
            console.log("stop");
          }
        });
      }

      updateInfo() {
        if (this.subscribeChecked) {
          this.customerDetails.Subscribe = 1;
        } else {
          this.customerDetails.Subscribe = 0;
        }

        console.log(this.customerDetails); // stop here if form is invalid

        this.customer.updateCustomerInfo(this.currentCustomerPK, this.customerDetails).subscribe(res => {
          console.log(res.message);
          this.router.navigateByUrl('/profile');
        }), error => {
          console.log(error);
        };
      }

    };

    ProfileInfo.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_customer_services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    ProfileInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'profile-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-info/profile-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-info.component.css */
      "./src/app/profile-info/profile-info.component.css")).default]
    })], ProfileInfo);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  .sidenav-container {\r\n    height: 100%;  \r\n  }\r\n  \r\n  .sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  .sidenav .mat-toolbar {\r\n    background: inherit;\r\n  }\r\n  \r\n  .mat-toolbar.mat-primary {\r\n    background: #16222A; \r\n    background: linear-gradient(59deg, #3A6073, #16222A);\r\n    color: white; padding-top:50px; padding-bottom:48px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n \r\n  }\r\n  \r\n  .mat-toolbar{\r\n    padding-left: 30px;\r\n    font-size: 30px;\r\n  }\r\n  \r\n  section{\r\n    padding-left: 8px;\r\n    font-size: 22px;\r\n    font-family: sans-serif;\r\n  }\r\n  \r\n  .icon-color{\r\n  color: black;\r\n}\r\n  \r\n  .mat-list-item{\r\n  color: rgba(65, 64, 64, 0.884);\r\n  padding-right: 20px;\r\n}\r\n  \r\n  .mat-list-item:hover{\r\n  background-color: #bfe6ffa2;\r\n  width: 190px;\r\n  margin: 0 15px 5px 15px;\r\n  border-radius: 15px;\r\n}\r\n  \r\n  .mat-list-item.active{\r\n  color:#1261A0;\r\n  background-color: #bfe6ffa2;\r\n  width: 190px;\r\n  font-weight: bold;\r\n  margin: 0 15px 5px 15px;\r\n  border-radius: 15px;\r\n}\r\n  \r\n  h1{\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n    text-align: center;\r\n    font-size: 30px;\r\n}\r\n  \r\n  .nav-link{\r\n  color:rgba(255, 255, 255, 0.788);\r\n  font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBRW5CLG9EQUFvRDtJQUNwRCxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ25ELHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7O0VBRVo7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVGO0VBQ0UsWUFBWTtBQUNkOztFQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztFQUVBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0VBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTsgIFxyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMxNjIyMkE7IFxyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTlkZWcsICMzQTYwNzMsICMxNjIyMkEpOyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg1OWRlZywgIzNBNjA3MywgIzE2MjIyQSk7XHJcbiAgICBjb2xvcjogd2hpdGU7IHBhZGRpbmctdG9wOjUwcHg7IHBhZGRpbmctYm90dG9tOjQ4cHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuIFxyXG4gIH1cclxuICAubWF0LXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIHNlY3Rpb257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbi5pY29uLWNvbG9ye1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1hdC1saXN0LWl0ZW17XHJcbiAgY29sb3I6IHJnYmEoNjUsIDY0LCA2NCwgMC44ODQpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmU2ZmZhMjtcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgbWFyZ2luOiAwIDE1cHggNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLm1hdC1saXN0LWl0ZW0uYWN0aXZle1xyXG4gIGNvbG9yOiMxMjYxQTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmZTZmZmEyO1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDAgMTVweCA1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4OCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let ProfileComponent = class ProfileComponent {
      constructor(auth, breakpointObserver) {
        this.auth = auth;
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPhone"];
      }

      ngOnInit() {
        this.option = "";
        /* this.hf.hide();  */

        this.auth.profile().subscribe(user => {
          this.details = user;
          this.role = user.Role_FK;
          this.userName = user.Username;
          this.id = user.UserPK;
        }, err => {
          console.error(err);
        });
      }

    };

    ProfileComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
    }];

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/program-details/program-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/program-details/program-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramDetailsProgramDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n/* Change height of ckeditor */\r\n:host ::ng-deep .ck-editor__editable_inline {\r\n    min-height: 300px !important;\r\n    border-color: gray;\r\n}\r\n.form-group{\r\n    padding: 20px;\r\n}\r\nh1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color: #08b2b8; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS1kZXRhaWxzL3Byb2dyYW0tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw4QkFBOEI7QUFDOUI7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0tZGV0YWlscy9wcm9ncmFtLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBDaGFuZ2UgaGVpZ2h0IG9mIGNrZWRpdG9yICovXHJcbjpob3N0IDo6bmctZGVlcCAuY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjMDhiMmI4OyBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/program-details/program-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/program-details/program-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProgramDetailsComponent */

  /***/
  function srcAppProgramDetailsProgramDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramDetailsComponent", function () {
      return ProgramDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-decoupled-document */
    "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _components_g_program_g_program_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/g-program/g-program.component */
    "./src/app/components/g-program/g-program.component.ts");
    /* harmony import */


    var _components_i_program_i_program_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/i-program/i-program.component */
    "./src/app/components/i-program/i-program.component.ts");

    let ProgramDetailsComponent = class ProgramDetailsComponent {
      constructor(matDialog, route, http, services, auth, router) {
        this.matDialog = matDialog;
        this.route = route;
        this.http = http;
        this.services = services;
        this.auth = auth;
        this.router = router;
        this.formData = new FormData();
        this.programData = {
          ProgramPk: 0,
          Name: '',
          Description: '',
          DepositAmount: 0,
          PricePerParticipant: 0,
          MaximumParticipant: 0,
          ImgData: '',
          ProgramType: 0,
          CreatedDate: '',
          CreatedBy: 0,
          IsActive: true,
          SubProgramPk: 0
        };
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_6__; // Option for dropdown list

        this.programCategories = [{
          id: 0,
          name: "Group Program"
        }, {
          id: 1,
          name: "Individual Program"
        }];
      } // EventHandler for file upload


      onFileChange(event) {
        this.files = event.target.files[0];
      }

      ngOnInit() {
        this.programCategories.forEach(e => {
          $("#programCat").append(new Option(e['name'], e['id']));
        });
        this.route.params.subscribe(val => {
          this.ProgramPK = val.id; // Get the Page mode: View/Edit

          this.PageMode = val.mode; // Set isDisable for component

          switch (this.PageMode) {
            case 'view':
              this.isDisabled = true;
              break;

            case 'edit':
              this.isDisabled = false;
              break;
          } // Get program details by ID


          this.services.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program => {
            this.programData = program;
            this.viewImgHref = _constants__WEBPACK_IMPORTED_MODULE_9__["AppConstants"].SERVER_URL + this.programData.ImgData;

            if (this.programData.ProgramType == 0) {
              this.ProgramTypeText = "Group Program";
              this.programTypeShortText = 'g';
            } else {
              this.ProgramTypeText = "Individual Program";
              this.programTypeShortText = 'i';
            }
          });
        });
      } // // EventHandler to capture data change from child component


      dataChangedHandler(data) {
        this.bookingRequirementData = data; // switch (this.programData.ProgramType) {
        //     case 0:
        //         this.bookingGroupData = data
        //         break;
        //     case 1:
        //         this.bookingIndividualData = data
        //         break;
        // }
      }

      upLoad() {
        this.http.post("http://localhost:3000/program/add-image", this.programData).subscribe(program => {});
      }

      onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
      }

      getFormData() {
        this.formData.append('file', this.files, this.files.name);

        for (var _i2 = 0, _Object$keys2 = Object.keys(this.programData); _i2 < _Object$keys2.length; _i2++) {
          const key = _Object$keys2[_i2];
          const value = this.programData[key];
          this.formData.append(key, value);
        }

        return this.formData;
      } //Configure Modal Dialog


      openModal() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "430px";
        dialogConfig.data = {
          title: "Update Group Program Details",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.submit();
          } else {
            console.log("stop");
          }
        });
      }

      submit() {
        // this.services.updateProgramLayoutDetails(this.programTypeShortText, this.bookingRequirementData)
        // .subscribe((response) => {
        //   this.router.navigateByUrl("/profile/program-management")
        // })
        switch (this.programData.ProgramType) {
          case 0:
            this.bookingRequirementData = this.gComponent.bookingGroup;
            break;

          case 1:
            this.bookingRequirementData = this.iComponent.bookingIndividual;
            break;
        } // Update Program Header Data


        this.services.updateProgramHeader(this.programData).subscribe(result => {
          this.services.updateProgramLayoutDetails(this.programTypeShortText, this.bookingRequirementData).subscribe(res => {
            console.log(res);
            this.router.navigateByUrl("/profile/program-management");
          });
        });
        console.log(this.gComponent.bookingGroup);
      }

    };

    ProgramDetailsComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
    }, {
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_4__["ProgramServices"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_g_program_g_program_component__WEBPACK_IMPORTED_MODULE_10__["GProgramComponent"], {
      static: false
    })], ProgramDetailsComponent.prototype, "gComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_i_program_i_program_component__WEBPACK_IMPORTED_MODULE_11__["IProgramComponent"], {
      static: false
    })], ProgramDetailsComponent.prototype, "iComponent", void 0);
    ProgramDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./program-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program-details/program-details.component.html")).default,
      providers: [_services_program_services__WEBPACK_IMPORTED_MODULE_4__["ProgramServices"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./program-details.component.css */
      "./src/app/program-details/program-details.component.css")).default]
    })], ProgramDetailsComponent);
    /***/
  },

  /***/
  "./src/app/program-management/program-management.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/program-management/program-management.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgramManagementProgramManagementComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-button, .mat-raised-button:hover{\r\n  background-color: rgb(6, 3, 189);\r\n} \r\n\r\n.col-lg-12{\r\n    padding-bottom: 25px;\r\n} \r\n\r\nh1 {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color:  #08b2b8;;\r\n} \r\n\r\nthead{\r\n  background-color:  rgba(0, 0, 0, 0.658);\r\n  color: white;\r\n} \r\n\r\nth, td {\r\n  padding: 15px;\r\n  text-align: left;\r\n} \r\n\r\ntd {\r\n  font-size: 18px;\r\n} \r\n\r\ntd.name{\r\n  color:  #08b2b8;\r\n} \r\n\r\nth {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 22px;\r\n  font-weight: bold;\r\n} \r\n\r\n.btn{\r\n  margin-right: 20px;\r\n} \r\n\r\n.filter{\r\n  padding-bottom: 30px;\r\n  padding-left: 30px;\r\n  font-weight: bold;\r\n} \r\n\r\n.errorMessage{\r\n  color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS1tYW5hZ2VtZW50L3Byb2dyYW0tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0UsMENBQTBDO0lBQ3hDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0tbWFuYWdlbWVudC9wcm9ncmFtLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDMsIDE4OSk7XHJcbn0gXHJcblxyXG4uY29sLWxnLTEye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAgIzA4YjJiODs7XHJcbn1cclxuXHJcbnRoZWFke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNjU4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG50ZC5uYW1le1xyXG4gIGNvbG9yOiAgIzA4YjJiODtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2V7XHJcbiAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/program-management/program-management.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/program-management/program-management.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProgramManagementComponent */

  /***/
  function srcAppProgramManagementProgramManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramManagementComponent", function () {
      return ProgramManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_program_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/program.services */
    "./src/app/services/program.services.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let ProgramManagementComponent = class ProgramManagementComponent {
      constructor(programService, // private http: HttpClient,
      // private services: ProgramServices, 
      // private auth: AuthenticationService, 
      // private router: Router,
      matDialog) {
        this.programService = programService;
        this.matDialog = matDialog;
        this.individualProgram = [];
        this.groupProgram = [];
        this.selectedValue = 0;
        this.isDisabled = true; //temporary variabe to hold the value for enable/disable button of program
        // searchCategories: Array<Object> = [
        //     { id: 0, name: "Any" },
        //     { id: 1, name: "Program Name" },
        //     { id: 3, name: "Program Type" }
        // ]
        // Dropdown Meny Option

        this.programCategories = [{
          id: 0,
          name: "All Program"
        }, {
          id: 1,
          name: "Group Program"
        }, {
          id: 2,
          name: "Individual Program"
        }];
      }

      ngOnInit() {
        // Add option for the dropdown menu
        this.programCategories.forEach(e => {
          $("#programCat").append(new Option(e['name'], e['id']));
        }); // Service call to get data from server

        this.programService.getAllPrograms().then(result => {
          this.programs = result;
          this.allPrograms = result; // Filter program into Group and Individual

          this.programs.forEach(e => {
            if (e.ProgramType == 0) {
              this.groupProgram.push(e);
            } else {
              this.individualProgram.push(e);
            }
          });
        });
      }

      clearSearch() {
        this.searchText = "";
      } // Catch the event dropdown menu


      selectChangeHandler(event) {
        let choice = event.target.value; // Update the data of table

        switch (choice) {
          case '0':
            this.programs = this.allPrograms;
            break;

          case '1':
            this.programs = this.groupProgram;
            break;

          case '2':
            this.programs = this.individualProgram;
            break;
        }
      } //open Modal when switching Activate/Deactivate button


      openModalSwitch(programPK, status) {
        this.isDisabled = status; //Configure Modal Dialog

        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";

        if (this.isDisabled) {
          dialogConfig.data = {
            title: "Disable Program",
            description: "This program is not able to be viewed by customers. Are you sure to disable this program?",
            actionButtonText: "Confirm",
            numberOfButton: "2"
          };
        } else {
          dialogConfig.data = {
            title: "Enable Program",
            description: "This program is able to be viewed by customers. Are you sure to enable this program?",
            actionButtonText: "Confirm",
            numberOfButton: "2"
          };
        } // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview


        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //deactivate or activate the program here
            if (this.isDisabled) {
              //disable program here
              this.programService.setProgramActiveStatus(programPK, false).subscribe(res => {
                window.location.reload();
              });
            } else {
              //enable program here
              this.programService.setProgramActiveStatus(programPK, true).subscribe(res => {
                console.log(res.message);
                window.location.reload();
              });
            } //switch the button


            this.isDisabled = !this.isDisabled;
          } else {//otherwise, do nothing               
          }
        });
      }

    };

    ProgramManagementComponent.ctorParameters = () => [{
      type: _services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }];

    ProgramManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./program-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/program-management/program-management.component.html")).default,
      providers: [_services_program_services__WEBPACK_IMPORTED_MODULE_2__["ProgramServices"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./program-management.component.css */
      "./src/app/program-management/program-management.component.css")).default]
    })], ProgramManagementComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.banner{\r\n    background-image: url('https://c.wallhere.com/photos/83/e8/lajolla_sunset_beach_sealion_sea_lion_sandiego_clouds-872451.jpg!d');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    font-family: 'Numans', sans-serif;\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n    }\r\n    \r\n    .container{\r\n    height: 100%;\r\n    align-content: center;\r\n    }\r\n    \r\n    .card{\r\n    height: 600px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    width: 400px;\r\n    background-color: rgba(0, 0, 0, 0.5) !important;\r\n    }\r\n    \r\n    .card-header h3{\r\n    color: white;\r\n    }\r\n    \r\n    .input-group-prepend span{\r\n    width: 50px;\r\n    background-color: #FFC312;\r\n    color: black;\r\n    border:0 !important;\r\n    }\r\n    \r\n    input:focus{\r\n    outline: 0 0 0 0  !important;\r\n    box-shadow: 0 0 0 0 !important;\r\n\r\n    }\r\n    \r\n    .acceptTerms{\r\n    color: white;\r\n    }\r\n    \r\n    .acceptTerms input\r\n    {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 15px;\r\n    margin-right: 5px;\r\n    }\r\n    \r\n    .register_btn{\r\n    color: black;\r\n    background-color: #FFC312;\r\n    width: 100px;\r\n    }\r\n    \r\n    .register_btn:hover{\r\n    color: black;\r\n    background-color: white;\r\n    }\r\n    \r\n    .error{\r\n        color: rgb(211, 23, 23);\r\n        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n        font-size: 16px;\r\n    }\r\n    \r\n    .links{\r\n        color: white;\r\n    }\r\n    \r\n    .links a{\r\n        margin-left: 4px;\r\n    }\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwrSEFBK0g7SUFDL0gsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckI7O0lBRUE7SUFDQSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCOztJQUVBO0lBQ0EsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLCtDQUErQztJQUMvQzs7SUFFQTtJQUNBLFlBQVk7SUFDWjs7SUFFQTtJQUNBLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjs7SUFFQTtJQUNBLDRCQUE0QjtJQUM1Qiw4QkFBOEI7O0lBRTlCOztJQUVBO0lBQ0EsWUFBWTtJQUNaOztJQUVBOztJQUVBLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjs7SUFFQTtJQUNBLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaOztJQUVBO0lBQ0EsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2Qiw2RUFBNkU7UUFDN0UsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYW5uZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vYy53YWxsaGVyZS5jb20vcGhvdG9zLzgzL2U4L2xham9sbGFfc3Vuc2V0X2JlYWNoX3NlYWxpb25fc2VhX2xpb25fc2FuZGllZ29fY2xvdWRzLTg3MjQ1MS5qcGchZCcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJke1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWhlYWRlciBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFjY2VwdFRlcm1ze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWNjZXB0VGVybXMgaW5wdXRcclxuICAgIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlZ2lzdGVyX2J0bntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWdpc3Rlcl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3J7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMTEsIDIzLCAyMyk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rc3tcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAubGlua3MgYXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let RegisterComponent = class RegisterComponent {
      constructor(auth, router, formBuilder, matDialog) {
        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.matDialog = matDialog;
        this.submitted = false;
        this.errorMessage = '';
        this.registered = false;
        this.credentials = {
          UserPK: 0,
          Username: '',
          Password: '',
          Role_FK: '',
          Email: ''
        };
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faKey"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        this.faCheckDouble = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckDouble"];
      }

      ngOnInit() {
        this.registerForm = this.formBuilder.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
          confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]
        }, {
          validator: this.MustMatch('password', 'confirmPassword')
        });
      }

      MustMatch(controlName, matchingControlName) {
        return formGroup => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      } // convenience getter for easy access to form fields


      get f() {
        return this.registerForm.controls;
      } //Configure Modal Dialog


      openModal() {
        //Validate form before open modal dialog
        this.submitted = true; // stop here if form is invalid

        if (this.registerForm.invalid) {
          return;
        } //Configure Modal Dialog


        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Register Confirmation",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.continue_register();
          } else {
            console.log("stop");
          }
        });
      }

      continue_register() {
        this.auth.register(this.credentials).subscribe(res => {
          if (res.error) {
            console.log(res);
            this.errorMessage = "*" + res.error;
            return;
          } else {
            this.currentUserPK = res.UserPK;
            this.auth.registeredPK = this.currentUserPK.toString();
            console.log("Current PK: " + this.currentUserPK);
            this.router.navigateByUrl("/customer-register/" + this.currentUserPK);
          }
        }, err => {
          console.error(err);
          return;
        }); //this.router.navigateByUrl("/customer-register/" + this.currentUserPK);
      }

    };

    RegisterComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
    }];

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/customer.services.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/customer.services.ts ***!
    \***********************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppServicesCustomerServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let CustomerService = class CustomerService {
      constructor(http) {
        this.http = http;
        this.expressBaseUrl = "http://localhost:3000";
      }

      finishRegister(customer) {
        return this.http.post(this.expressBaseUrl + "/customers/customer-register", customer);
      }

      getCustomerInfoByID(CustomerPK) {
        return this.http.get(this.expressBaseUrl + "/customers/profile-info/" + CustomerPK);
      }

      updateCustomerInfo(CustomerPK, customer) {
        return this.http.put(this.expressBaseUrl + "/customers/update-customer-info/" + CustomerPK, customer);
      }

    };

    CustomerService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CustomerService);
    /***/
  },

  /***/
  "./src/app/services/email.services.ts":
  /*!********************************************!*\
    !*** ./src/app/services/email.services.ts ***!
    \********************************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppServicesEmailServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let EmailService = class EmailService {
      constructor(http) {
        this.http = http;
        this.expressBaseUrl = "http://localhost:3000";
      }

      sendContactEmail(data) {
        return this.http.post(this.expressBaseUrl + '/service/send-contact-email', data);
      }

      sendResetPasswordEmail(userInfo) {
        return this.http.post(this.expressBaseUrl + '/service/send-reset-password-email', userInfo);
      }

      ValidPasswordToken(body) {
        return this.http.post(this.expressBaseUrl + '/service/reset-password/' + body.resettoken, body);
      }

      sendPasswordConfirmationEmail(body) {
        return this.http.post(this.expressBaseUrl + '/service/send-password-confirmation-email/', body);
      }

    };

    EmailService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EmailService);
    /***/
  },

  /***/
  "./src/app/services/program.services.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/program.services.ts ***!
    \**********************************************/

  /*! exports provided: ProgramServices */

  /***/
  function srcAppServicesProgramServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgramServices", function () {
      return ProgramServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");

    let ProgramServices = class ProgramServices {
      constructor(http, router) {
        this.http = http;
        this.router = router;
        this.expressBaseUrl = "http://localhost:3000";
      }

      sendRequestToExpress(endpoint) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + endpoint).toPromise();
      }

      getAllPrograms() {
        return this.sendRequestToExpress('/program/get-programs');
      }

      getActivePrograms() {
        return this.sendRequestToExpress('/program/get-active-programs');
      }

      getProgramHeaderDeatailsByID(ProgramPK) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/get-program-header/' + ProgramPK);
      }

      addNewProgram(program) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/add-program', program);
      }

      updateProgramHeader(programHeaderData) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/update-program-header', programHeaderData);
      }

      getProgramRequirementByID(programType, ProgramPK) {
        switch (programType) {
          case 'g':
            return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/get-group-program-requirement/' + ProgramPK);

          case 'i':
            return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/get-individual-program-requirement/' + ProgramPK);
        }
      }

      updateProgramLayoutDetails(programType, programData) {
        switch (programType) {
          case 'g':
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/update-g-program-requirement', programData);
            break;

          case 'i':
            return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/update-i-program-requirement', programData);
            break;
        }
      }

      getProgramRequirementDetails(programType, ProgramPK) {
        switch (programType) {
          case 'g':
            return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/get-group-requirement/' + ProgramPK);

          case 'i':
            return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + '/program/get-individual-requirement/' + ProgramPK);
        }
      }

      setProgramActiveStatus(ProgramPK, IsActive) {
        return this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].SERVER_URL + "/program/set-program-status/" + ProgramPK + "/" + IsActive);
      }

    };

    ProgramServices.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ProgramServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProgramServices);
    /***/
  },

  /***/
  "./src/app/system-admin-dashboard/set-user-role/set-user-role.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/system-admin-dashboard/set-user-role/set-user-role.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSystemAdminDashboardSetUserRoleSetUserRoleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-button, .mat-raised-button:hover{\r\n  background-color: rgb(6, 3, 189);\r\n} \r\n\r\n  .row-header {\r\n      font-weight: bold;\r\n  } \r\n\r\n  .col-lg-2{\r\n  padding-bottom: 25px;\r\n} \r\n\r\n  h1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    /* padding-top: 20px; */\r\n    color: #08b2b8; \r\n} \r\n\r\n  thead{\r\n  background-color:  rgba(0, 0, 0, 0.658);\r\n  color: white;\r\n} \r\n\r\n  th, td {\r\n  padding: 15px;\r\n  text-align: left;\r\n} \r\n\r\n  td {\r\n  font-size: 18px;\r\n} \r\n\r\n  td.name{\r\n  color:  #08b2b8;\r\n} \r\n\r\n  th {\r\n  font-family: 'Source Sans Pro', sans-serif; \r\n  font-size: 22px;\r\n  font-weight: bold;\r\n} \r\n\r\n  .btn{\r\n  margin-right: 20px;\r\n} \r\n\r\n  .filter{\r\n  padding-bottom: 30px;\r\n  padding-left: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtLWFkbWluLWRhc2hib2FyZC9zZXQtdXNlci1yb2xlL3NldC11c2VyLXJvbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQzs7RUFFRTtNQUNJLGlCQUFpQjtFQUNyQjs7RUFFRjtFQUNFLG9CQUFvQjtBQUN0Qjs7RUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztFQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0tYWRtaW4tZGFzaGJvYXJkL3NldC11c2VyLXJvbGUvc2V0LXVzZXItcm9sZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMywgMTg5KTtcclxufSBcclxuXHJcbiAgLnJvdy1oZWFkZXIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4uY29sLWxnLTJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuICBcclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXHJcbiAgICBjb2xvcjogIzA4YjJiODsgXHJcbn1cclxuXHJcbnRoZWFke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuNjU4KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG50ZC5uYW1le1xyXG4gIGNvbG9yOiAgIzA4YjJiODtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjsgXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/system-admin-dashboard/set-user-role/set-user-role.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/system-admin-dashboard/set-user-role/set-user-role.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SetUserRoleComponent */

  /***/
  function srcAppSystemAdminDashboardSetUserRoleSetUserRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetUserRoleComponent", function () {
      return SetUserRoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let SetUserRoleComponent = class SetUserRoleComponent {
      constructor(auth, matDialog) {
        this.auth = auth;
        this.matDialog = matDialog;
      }

      ngOnInit() {
        this.userRoles = ['Customer', 'Manager', 'System Admin'];
        this.auth.getAllUser().subscribe(result => {
          this.listOfUsers = result;
        });
        this.currentUserID = this.auth.getUserDetails().UserPK;
      }

      clearSearch() {
        this.searchText = "";
      } //open Modal when switching Activate/Deactivate button


      openModalSwitch(userPK, status) {
        this.IsActive = status; //Configure Modal Dialog

        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";

        if (!this.IsActive) {
          dialogConfig.data = {
            title: "Activate Account",
            description: "This account is deactivated. Are you sure to activate this account?",
            actionButtonText: "Confirm",
            numberOfButton: "2"
          };
        } else {
          dialogConfig.data = {
            title: "Deactivate Account",
            description: "This account is actived. Are you sure to deactivate this activate?",
            actionButtonText: "Confirm",
            numberOfButton: "2"
          };
        }

        const modalDialog = this.matDialog.open(src_app_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //deactivate or activate the account here
            if (this.IsActive) {
              //deactivate account here
              this.auth.setUserActiveStatus(userPK, false).subscribe(res => {
                window.location.reload();
              });
            } else {
              //activate account here
              this.auth.setUserActiveStatus(userPK, true).subscribe(res => {
                window.location.reload();
              });
            } //switch the button


            this.IsActive = !this.IsActive;
          } else {//otherwise, do nothing            
          }
        });
      }

    };

    SetUserRoleComponent.ctorParameters = () => [{
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }];

    SetUserRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-set-user-role',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./set-user-role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/set-user-role/set-user-role.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./set-user-role.component.css */
      "./src/app/system-admin-dashboard/set-user-role/set-user-role.component.css")).default]
    })], SetUserRoleComponent);
    /***/
  },

  /***/
  "./src/app/system-admin-dashboard/user-details/user-details.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/system-admin-dashboard/user-details/user-details.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSystemAdminDashboardUserDetailsUserDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  .row-header {\r\n      font-weight: bold;\r\n  }\r\n\r\n  h1 {\r\n    font-family: 'Source Sans Pro', sans-serif; \r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    color: #08b2b8; \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtLWFkbWluLWRhc2hib2FyZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7TUFDSSxpQkFBaUI7RUFDckI7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hZG1pbi1kYXNoYm9hcmQvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAucm93LWhlYWRlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmOyBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzA4YjJiODsgXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/system-admin-dashboard/user-details/user-details.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/system-admin-dashboard/user-details/user-details.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppSystemAdminDashboardUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _services_email_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/email.services */
    "./src/app/services/email.services.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");

    let UserDetailsComponent = class UserDetailsComponent {
      constructor(route, auth, router, emailService, matDialog) {
        this.route = route;
        this.auth = auth;
        this.router = router;
        this.emailService = emailService;
        this.matDialog = matDialog;
        this.NewRole = '';
        this.message = '';
      }

      ngOnInit() {
        this.route.params.subscribe(val => {
          this.UserPK = val.id;
          this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
            this.userDetails = user;
            this.editedUserRoleFK = this.userDetails.Role_FK;
            console.log(this.editedUserRoleFK);

            if (this.editedUserRoleFK == "1") {
              this.userRoles = ['Customer', 'Manager', 'System Admin'];
            } else if (this.editedUserRoleFK == "2") this.userRoles = ['Manager', 'System Admin', 'Customer'];else this.userRoles = ['System Admin', 'Customer', 'Manager'];

            this.userRoles.forEach(e => {
              $("#roleSelection").append(new Option(e, e));
            });
          });
        });
      } //Configure Modal Dialog


      openModalUpdateUserDetail() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Update User detail",
          description: "All information is correct?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.updateUserDetail();
          } else {
            console.log("stop");
          }
        });
      }

      updateUserDetail() {
        this.NewRole = $("#roleSelection :selected").text();
        console.log("RoleFK " + this.NewRole);

        if (this.NewRole == "Customer") {
          this.userDetails.Role_FK = "1";
        } else if (this.NewRole == "Manager") {
          this.userDetails.Role_FK = "2";
        } else {
          this.userDetails.Role_FK = "3";
        }

        this.auth.updateUserDetail(this.UserPK, this.userDetails).subscribe(response => {
          console.log(response);
          this.message = "User was updated sucessfully";
          const url = "/profile/set-user-role";
          this.router.navigateByUrl(url);
        }, error => {
          console.log(error);
        });
      } //Configure Modal Dialog


      openModalResetPassword() {
        //Configure Modal Dialog
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"](); // The user can't close the dialog by clicking outside its body

        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
          title: "Reset Password",
          description: "Are you sure to reset the password?",
          actionButtonText: "Confirm",
          numberOfButton: "2"
        }; // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview

        const modalDialog = this.matDialog.open(_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ModalDialogComponent"], dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
          if (result == "Yes") {
            //call register function                
            this.resetUserPassword();
          } else {
            console.log("stop");
          }
        });
      }

      resetUserPassword() {
        this.emailService.sendResetPasswordEmail(this.userDetails).subscribe(res => {
          if (res.error) {
            console.log("user-detail-ts file error: " + res.error);
          } else {
            //this.errorMessage = "*Reset Email has been sent to " + this.userDetails.Email
            console.log("Reset Email has been sent to " + this.userDetails.Email);
          }
        });
      } //TO-DO:


      disableUser() {}

    };

    UserDetailsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_email_services__WEBPACK_IMPORTED_MODULE_4__["EmailService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }];

    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/system-admin-dashboard/user-details/user-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details.component.css */
      "./src/app/system-admin-dashboard/user-details/user-details.component.css")).default]
    })], UserDetailsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\PMMC Project\Education-Programs-and-Reservation-Database\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map