import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';

var css = ".index_module_test__dbcca493 {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy90ZXN0L2luZGV4Lm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
var modules_c21c94f2 = {"test":"index_module_test__dbcca493"};
n(css,{});

function Test(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_c21c94f2.test
  }, JSON.stringify(props.todos));
}
Test.route = '/test';

Test.getData = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return {
    todos: await res.json()
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Test, window._props_), app);
//# sourceMappingURL=test.js.map
