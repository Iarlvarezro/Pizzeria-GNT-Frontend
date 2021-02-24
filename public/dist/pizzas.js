import { n, r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './util-ad0fcd98.js';
import { F as Form, I as Input, B as Butt } from './button-4cc14033.js';

var css = "form {\r\n    padding: 1rem;\r\n    display: grid;\r\n    grid-template-columns: 3fr 1fr 1fr;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztBQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyO1xyXG59Il19 */";
var modules_812c1e0e = {};
n(css,{});

function Search() {
  return /*#__PURE__*/react.createElement(Form, {
    className: modules_812c1e0e.form
  }, /*#__PURE__*/react.createElement(Input, {
    placeholder: "Busca tu pizza favorita"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Filtrar"
  }), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Ordenar"
  }));
}

var css$1 = ".card_module_card__19a89b75 {\r\n    padding: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9waXp6YWxpc3QvY2FyZC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn0iXX0= */";
var modules_a0d8d064 = {"card":"card_module_card__19a89b75"};
n(css$1,{});

function PizzaCard({
  name,
  img,
  price
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: modules_a0d8d064.card
  }, /*#__PURE__*/react.createElement("div", null, img), /*#__PURE__*/react.createElement("div", null, name), /*#__PURE__*/react.createElement("div", null, price), /*#__PURE__*/react.createElement(Butt, {
    name: "A\xF1adir al carro"
  }), /*#__PURE__*/react.createElement(Butt, {
    name: "Ver m\xE1s"
  }));
}

var css$2 = ".pizza_module_pizza__43e7432f {\r\n    border-color: black;\r\n    padding: 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9waXp6YXMvY29tcG9uZW50cy9waXp6YWxpc3QvcGl6emEubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztBQUN0QyIsInNvdXJjZXNDb250ZW50IjpbIi5waXp6YSB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG59XHJcbiJdfQ== */";
var modules_327fbf62 = {"pizza":"pizza_module_pizza__43e7432f"};
n(css$2,{});

function PizzaList(props) {
  return /*#__PURE__*/react.createElement("ul", {
    className: modules_327fbf62.pizza
  }, props.pizzas.map(pizza => {
    return /*#__PURE__*/react.createElement("li", {
      key: pizza.id
    }, /*#__PURE__*/react.createElement(PizzaCard, pizza));
  }));
}

function Pizzas({
  pizzas
}) {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement(Search, null), /*#__PURE__*/react.createElement(PizzaList, {
    pizzas: pizzas
  }));
}
Pizzas.route = '/';

Pizzas.getData = async function (params, query) {
  const response = await fetch('http://localhost:3000/pizzas');
  return {
    pizzas: await response.json()
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(Pizzas, window._props_), app);
//# sourceMappingURL=pizzas.js.map
