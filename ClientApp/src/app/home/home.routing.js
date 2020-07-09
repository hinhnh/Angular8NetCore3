"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var sub_home_component_1 = require("./sub-home/sub-home.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'sub-home',
        component: sub_home_component_1.SubHomeComponent
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=home.routing.js.map