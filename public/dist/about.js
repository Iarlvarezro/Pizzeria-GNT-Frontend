import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './util-ad0fcd98.js';

var css = ".index_module_about__1fd7148c {\r\n    color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9hYm91dC9pbmRleC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */";
var modules_c21c94f2 = {"about":"index_module_about__1fd7148c"};
n(css,{});

function Clock(props) {
  const [date, setDate] = react.useState(new Date());
  react.useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), props.interval);
    return () => clearInterval(interval);
  }, [props.interval]); // React.useEffect(()=> {
  //     // connectedCallback
  //     return function(){ // disconnectedCallback }
  // }, [])
  // Todos los datos de los que dependa el efecto, sean de props o de useState,
  // tiene que ir como dependencia

  return /*#__PURE__*/react.createElement("div", null, date.toUTCString());
} // quiero un contandor que empiece en 2 de 3 en 3
// y otro que empiece en 5 de 4 en 4


function Counter(props) {
  const [count, setCount] = react.useState(props.initialValue);

  function increment() {
    setCount(count + props.step);
  }

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", null, count), /*#__PURE__*/react.createElement("button", {
    onClick: increment
  }, "click"));
}

function Item(props) {
  return /*#__PURE__*/react.createElement("li", null, props.children);
}

function About({
  foo
}) {
  const elValorDelId = 'foo';

  function onClick(ev) {
    alert(`hello ${ev.type}`);
  }

  function renderItem(count) {
    if (count > 1) {
      return /*#__PURE__*/react.createElement("span", null, count, " items");
    }

    return /*#__PURE__*/react.createElement("span", null, count, " item");
  }

  function renderCondicional(condicion) {
    if (condicion) {
      return /*#__PURE__*/react.createElement("span", null, "hola");
    }

    return null;
  }

  const count = 1;
  const items = [1, 2, 3, 4, 5];
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement("main", null, /*#__PURE__*/react.createElement("h1", {
    onClick: onClick,
    id: elValorDelId,
    className: modules_c21c94f2.about
  }, "About ", foo), renderItem(count), renderCondicional(false), /*#__PURE__*/react.createElement("ul", null, items.map((item, i) => {
    return /*#__PURE__*/react.createElement(Item, {
      key: i
    }, /*#__PURE__*/react.createElement("span", null, item));
  })), /*#__PURE__*/react.createElement(Counter, {
    initialValue: 2,
    step: 3
  }), /*#__PURE__*/react.createElement(Counter, {
    initialValue: 4,
    step: 8
  }), /*#__PURE__*/react.createElement(Clock, {
    interval: 5000
  })));
}
About.route = '/about';

About.getData = async function () {
  return {
    foo: 12
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(About, window._props_), app);
//# sourceMappingURL=about.js.map
