import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './util-ad0fcd98.js';

var css = ".index_module_home__c374a31a {\r\n    color: blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9ob21lL2luZGV4Lm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSJdfQ== */";
var modules_c21c94f2 = {"home":"index_module_home__c374a31a"};
n(css,{});

function Home() {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement("h1", {
    className: modules_c21c94f2.home
  }, "Home"), /*#__PURE__*/react.createElement("input", {
    type: "date"
  }));
}
Home.route = '/home';

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Home, window._props_), app);
//# sourceMappingURL=home.js.map
