import { r as react } from './inject-css-ccfe6d81.js';

function Form(props) {
  const {
    children,
    ...restProp
  } = props;
  return /*#__PURE__*/react.createElement("form", restProp, children);
}

function Input(props) {
  const {
    label,
    ...restProp
  } = props;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("label", null, label), /*#__PURE__*/react.createElement("input", restProp));
}

function Butt(props) {
  const {
    name,
    ...restProps
  } = props;
  return /*#__PURE__*/react.createElement("button", restProps, name);
}

export { Butt as B, Form as F, Input as I };
//# sourceMappingURL=button-4cc14033.js.map
