import { r as react, a as reactDom } from './inject-css-ccfe6d81.js';
import { P as Page } from './util-ad0fcd98.js';
import { F as Form, B as Butt, I as Input } from './button-4cc14033.js';

function DesplIng(props) {
  return /*#__PURE__*/react.createElement("select", null, /*#__PURE__*/react.createElement("option", {
    value: "ingredientes",
    key: "ingredientes"
  }, "Selecciona un ingrediente"), props.ingredients.map(ing => {
    return /*#__PURE__*/react.createElement("option", {
      key: ing.id,
      value: ing.name
    }, ing.name, " ", ing.prize);
  }));
}

function IngCard({
  name,
  prize
}) {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, name, " ", prize));
}

function IngList(props) {
  return /*#__PURE__*/react.createElement("ul", null, props.ingredients.map(ing => {
    return /*#__PURE__*/react.createElement("li", {
      key: ing.id
    }, /*#__PURE__*/react.createElement(IngCard, ing));
  }));
}

function AddPizzas({
  ingredients
}) {
  return /*#__PURE__*/react.createElement(Page, null, /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement("h3", null, "A\xF1ade una imagen"), /*#__PURE__*/react.createElement(Butt, {
    name: "Subir imagen"
  })), /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement("h3", null, "A\xF1ade un nombre"), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Nombre"
  })), /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement("h3", null, "A\xF1ade un precio"), /*#__PURE__*/react.createElement(Input, {
    placeholder: "Precio"
  })), /*#__PURE__*/react.createElement(Form, null, /*#__PURE__*/react.createElement("h3", null, "A\xF1ade los ingredientes"), /*#__PURE__*/react.createElement(DesplIng, {
    ingredients: ingredients
  }), /*#__PURE__*/react.createElement(IngList, {
    ingredients: ingredients
  }), /*#__PURE__*/react.createElement(Butt, {
    name: "A\xF1adir pizza a la carta"
  })));
}
AddPizzas.route = '/AddPizzas';

AddPizzas.getData = async function (params, query) {
  const response = await fetch('http://localhost:3000/ingredients');
  return {
    ingredients: await response.json()
  };
};

const app = document.getElementById('app');
            reactDom.hydrate(react.createElement(AddPizzas, window._props_), app);
//# sourceMappingURL=Addpizza.js.map
