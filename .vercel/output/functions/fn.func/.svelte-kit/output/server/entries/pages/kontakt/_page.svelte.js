import { c as create_ssr_component, e as escape, b as createEventDispatcher, v as validate_component, d as add_attribute } from "../../../chunks/index2.js";
import "devalue";
import "../../../chunks/singletons.js";
import "../../../chunks/bookmarkSchema.js";
const FormError_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "small.svelte-afqu0l{padding:5px 10px;background:#ff324f;border-radius:5px;color:#ebebeb;width:100%;display:flex;justify-content:center;align-items:center}",
  map: null
};
const FormError = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form = null } = $$props;
  let { field = "" } = $$props;
  let { error = "" } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css$2);
  return `${form?.zodError[field]?._errors.length > 0 && error && error.length == 0 ? `<small class="svelte-afqu0l">${escape(form?.zodError[field]?._errors)}</small>` : `${error && error.length > 0 ? `<small class="svelte-afqu0l">${escape(error)}</small>` : ``}`}`;
});
const Form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.form-wrapper.svelte-1pnkdiq.svelte-1pnkdiq{width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.form-wrapper.svelte-1pnkdiq form.svelte-1pnkdiq{min-width:var(--form-min-width, auto);max-width:var(--form-max-width, auto);width:var(--form-width, 80%);height:var(--form-height, auto);display:var(--display, "block");flex-direction:var(--direction, "column")}',
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action: action2 = "" } = $$props;
  createEventDispatcher();
  if ($$props.action === void 0 && $$bindings.action && action2 !== void 0)
    $$bindings.action(action2);
  $$result.css.add(css$1);
  return `<div class="form-wrapper svelte-1pnkdiq"><form method="POST" action="${"?/" + escape(action2, true)}" class="svelte-1pnkdiq">${slots.default ? slots.default({}) : ``}</form>
   
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section.svelte-1l77lze{position:relative;min-height:100vh;height:100%;width:100%;min-width:100%;display:flex;align-items:center;flex-direction:column;box-sizing:border-box;margin:0;padding:0}.decorator.svelte-1l77lze{margin-top:100px}",
  map: null
};
let action = "add";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lastnameError = "";
  let firstnameError = "";
  let emailError = "";
  let phoneError = "";
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-uee4nd_START -->${$$result.title = `<title>Kontakt</title>`, ""}<!-- HEAD_svelte-uee4nd_END -->`, ""}

<section class="section section-one svelte-1l77lze"><h1 class="decorator svelte-1l77lze">Terminvereinbarung</h1>
    ${validate_component(Form, "Form").$$render($$result, { action }, {}, {
    default: () => {
      return `<div class="block"><input id="id"${add_attribute("type", "hidden", 0)} name="id" readonly>
            <label for="url">Nachname
                <input type="text" id="lastname" name="lastname" placeholder="" required>
                ${validate_component(FormError, "FormError").$$render(
        $$result,
        {
          form,
          field: "lastname",
          error: lastnameError
        },
        {},
        {}
      )}</label>
            <label for="name">Vorname
                <input type="text" id="firstname" name="firstname" placeholder="" required>
                ${validate_component(FormError, "FormError").$$render(
        $$result,
        {
          form,
          field: "firstname",
          error: firstnameError
        },
        {},
        {}
      )}</label>
            <label for="name">Email
                <input type="text" id="email" name="email" placeholder="" required>
                ${validate_component(FormError, "FormError").$$render($$result, { form, field: "email", error: emailError }, {}, {})}</label>
            <label for="name">Telefon
                <input type="text" id="phone" name="phone" placeholder="" required>
                ${validate_component(FormError, "FormError").$$render($$result, { form, field: "phone", error: phoneError }, {}, {})}</label></div>
        <button type="submit">Abschicken</button>
        ${form?.prismaError ? `${validate_component(FormError, "FormError").$$render($$result, { error: form?.prismaError }, {}, {})}` : ``}`;
    }
  })}
</section>`;
});
export {
  Page as default
};
