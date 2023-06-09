import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { L as LogoSvg } from "../../chunks/LogoSvg.js";
const BurgerMenu_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "ul.svelte-12rzu02.svelte-12rzu02,li.svelte-12rzu02.svelte-12rzu02{margin:0;padding:0}.bar-wrapper.svelte-12rzu02.svelte-12rzu02{width:2.5rem;height:1.9rem;border:0.5px solid var(--primary);display:flex;flex-direction:column;justify-content:space-around;padding:0.25rem;position:relative;box-sizing:border-box;align-items:start}.bar-wrapper.svelte-12rzu02:hover .bar.svelte-12rzu02{border:1px solid var(--primary)}.bar.svelte-12rzu02.svelte-12rzu02{width:2rem;padding:0;border-radius:2px;height:1px;border:1px solid var(--text);transition:all 0.1s ease-in-out;box-sizing:border-box;overflow:hidden}.first.svelte-12rzu02.svelte-12rzu02{transition:all 0.1s ease-in-out;width:1.6rem}.second.svelte-12rzu02.svelte-12rzu02{transition:all 0.2s ease-in-out;width:2rem}.third.svelte-12rzu02.svelte-12rzu02{transition:all 0.3s ease-in-out;width:1.3rem}.open.svelte-12rzu02.svelte-12rzu02{align-items:center;background:var(--white)}.open.svelte-12rzu02 .second.svelte-12rzu02{background:transparent;width:0;height:0;border:1px solid transparent;transition:all 0.1s ease-in-out}.open.svelte-12rzu02 .first.svelte-12rzu02,.open.svelte-12rzu02 .third.svelte-12rzu02{background:var(--primary);position:absolute;transform:rotate(45deg);width:1.4rem;height:1px;border:1px solid var(--primary);transition:all 0.1s ease-in-out}.open.svelte-12rzu02 .third.svelte-12rzu02{transform:rotate(-45deg);transition:all 0.3s ease-in-out}",
  map: null
};
const BurgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css$3);
  return `<ul class="${[
    "bar-wrapper " + escape(className, true) + " svelte-12rzu02",
    open === true ? "open" : ""
  ].join(" ").trim()}"><li class="bar first svelte-12rzu02"></li>
    <li class="bar second svelte-12rzu02"></li>
    <li class="bar third svelte-12rzu02"></li>
</ul>`;
});
const Navigation_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'ul.svelte-1l4m7co.svelte-1l4m7co{margin:0;padding:0}nav.svelte-1l4m7co.svelte-1l4m7co{font-family:var(--font-family, "Segoe UI");width:100%;height:70px;display:flex;justify-content:center}nav.svelte-1l4m7co .burger{border-width:1px !important;display:none !important}nav.svelte-1l4m7co .menu-entries.svelte-1l4m7co{font-size:12px;width:100%;display:flex;justify-content:end;transition:all 1s ease-out}nav.svelte-1l4m7co .menu-entries li.svelte-1l4m7co{position:relative;word-break:keep-all;text-transform:uppercase}nav.svelte-1l4m7co .menu-entries li a.svelte-1l4m7co{outline:none;list-style:none;color:var(--text, #fff);background-color:none}nav.svelte-1l4m7co .menu-entries li a.svelte-1l4m7co::before{content:" ";width:0px;border:2px solid transparent;position:absolute;bottom:0.8rem;border-radius:5px;transition:all 0.2s ease-in-out}nav.svelte-1l4m7co .menu-entries li.svelte-1l4m7co:hover{transition:all 0.2s ease-in-out}nav.svelte-1l4m7co .menu-entries li:hover a.svelte-1l4m7co::before{content:" ";width:45px;border:2px solid var(--primary);position:absolute;border-radius:5px;bottom:0.8rem;transition:all 0.2s ease-in-out}nav.svelte-1l4m7co .menu-entries .active a.svelte-1l4m7co::before{content:" ";width:45px;height:0.15rem;background-color:var(--primary);position:absolute;bottom:0.8rem;border-radius:5px}.scroll.svelte-1l4m7co.svelte-1l4m7co{opacity:1;transition:all 0.5s ease-in-out;transition:all 0.2s ease-in-out}.hide.svelte-1l4m7co.svelte-1l4m7co{opacity:0;transition:all 0.2s ease-in-out}@media screen and (max-width: 680px){nav.svelte-1l4m7co.svelte-1l4m7co{display:flex;justify-content:end;align-items:center;width:100%;margin-top:5px}nav.svelte-1l4m7co .burger{display:flex !important;margin-right:20px !important}nav.svelte-1l4m7co .menu-entries.svelte-1l4m7co{display:none;width:100%;font-size:12px}nav.svelte-1l4m7co .mobile.svelte-1l4m7co{justify-content:center;align-items:center;width:100% !important;position:absolute;top:70px;display:flex;flex-direction:column;background-color:gray;transition:all 1s ease-out}nav.svelte-1l4m7co .mobile li.svelte-1l4m7co{display:block;width:100%;background-color:#fff;height:100%}nav.svelte-1l4m7co .mobile li a.svelte-1l4m7co{display:block;text-align:center;height:100%}}',
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollY;
  let innerWidth;
  let hide;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let open = false;
  let oldScroll = void 0;
  const offset = 50;
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    scrollY = 0;
    innerWidth = 0;
    hide = false;
    {
      if (scrollY) {
        if (oldScroll === void 0) {
          oldScroll = scrollY;
        }
        if (oldScroll < scrollY) {
          hide = true;
        } else {
          hide = false;
        }
        oldScroll = scrollY;
      }
    }
    $$rendered = `

<nav class="${[
      "navigation svelte-1l4m7co",
      (scrollY > offset ? "scroll" : "") + " " + (hide === true ? "hide" : "")
    ].join(" ").trim()}">
        ${validate_component(BurgerMenu, "BurgerMenu").$$render(
      $$result,
      { className: "burger", open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    
    <ul class="${[
      "menu-entries svelte-1l4m7co",
      innerWidth < 680 && open == true ? "mobile" : ""
    ].join(" ").trim()}"><li class="${["svelte-1l4m7co", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/" class="svelte-1l4m7co">Startseite</a></li>
        <li class="${["svelte-1l4m7co", $page.url.pathname === "/leistungen" ? "active" : ""].join(" ").trim()}"><a href="/leistungen" class="svelte-1l4m7co">Leistungen</a></li>
        <li class="${["svelte-1l4m7co", $page.url.pathname === "/ueber-mich" ? "active" : ""].join(" ").trim()}"><a href="/ueber-mich" class="svelte-1l4m7co">Über Mich</a></li>
        <li class="${["svelte-1l4m7co", $page.url.pathname === "/kontakt" ? "active" : ""].join(" ").trim()}"><a href="/kontakt" class="svelte-1l4m7co">Kontakt</a></li></ul>
</nav>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const app = "";
const Logo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#logoSvg{width:auto;z-index:100000;display:flex;vertical-align:center}.logo-wrapper.svelte-aeddur.svelte-aeddur{min-width:220px;display:flex;flex-direction:row;vertical-align:center;align-items:center}.circle.svelte-aeddur.svelte-aeddur{min-width:70px;width:70px;height:70px;min-height:70px;background:#77B6BA;border-radius:50%;display:flex;justify-content:center;align-items:center;border:1px solid white}.brand-name.svelte-aeddur.svelte-aeddur{border:1.5px solid #77B6BA;height:30px;display:flex;justify-content:center;align-items:center;padding:0 5px;background-color:white;margin:0 0 10px 10px}.brand-name.svelte-aeddur h1.svelte-aeddur{font-size:16px;font-family:"Segoe UI";font-weight:400;color:#77B6BA;margin:0;padding:0;line-height:1;letter-spacing:1px}',
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="logo logo-wrapper svelte-aeddur"><div class="circle svelte-aeddur"><div style="display: contents; --leaves-main:#fff; --leaves-overlay:#fff; --tree-color:#fff; --tree-overlay:#fff;">${validate_component(LogoSvg, "LogoSvg").$$render($$result, { height: "50px", animation: true }, {}, {})}</div></div>
    <div class="brand-name svelte-aeddur"><h1 class="svelte-aeddur">Lisa-Marie Loof</h1></div>
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navigation{margin-top:5px}.logo{z-index:999;padding-top:10px}header.svelte-yo64n6.svelte-yo64n6{position:fixed;top:0;z-index:999;width:100%;max-width:var(--content-width);justify-self:center;display:flex;flex-direction:row;justify-content:space-between}.app.svelte-yo64n6.svelte-yo64n6{width:100%;min-height:100vh;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.app.svelte-yo64n6 main.svelte-yo64n6{min-height:100%;height:auto;width:100%}@media screen and (max-width: 680px){.app.svelte-yo64n6 #logoSvg{right:15px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `





    

<div class="app svelte-yo64n6"><header class="svelte-yo64n6">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
            ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</header>
             
             <main class="svelte-yo64n6">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
