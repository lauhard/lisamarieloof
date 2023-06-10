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
  code: 'ul.svelte-zmnsx8.svelte-zmnsx8{margin:0;padding:0}nav.svelte-zmnsx8.svelte-zmnsx8{font-family:var(--font-family, "Segoe UI");width:100%;height:70px;display:flex;justify-content:center}nav.svelte-zmnsx8 .burger{border-width:1px !important;display:none !important}nav.svelte-zmnsx8 .menu-entries.svelte-zmnsx8{font-size:12px;width:100%;display:flex;justify-content:end;transition:all 1s ease-out}nav.svelte-zmnsx8 .menu-entries li.svelte-zmnsx8{position:relative;word-break:keep-all;text-transform:uppercase}nav.svelte-zmnsx8 .menu-entries li a.svelte-zmnsx8{outline:none;list-style:none;color:var(--text, #fff);background-color:none}nav.svelte-zmnsx8 .menu-entries li a.svelte-zmnsx8::before{content:" ";width:0px;border:2px solid transparent;position:absolute;bottom:0.8rem;border-radius:5px;transition:all 0.2s ease-in-out}nav.svelte-zmnsx8 .menu-entries li.svelte-zmnsx8:hover{transition:all 0.2s ease-in-out}nav.svelte-zmnsx8 .menu-entries li:hover a.svelte-zmnsx8::before{content:" ";width:45px;border:2px solid var(--primary);position:absolute;border-radius:5px;bottom:0.8rem;transition:all 0.2s ease-in-out}nav.svelte-zmnsx8 .menu-entries .active a.svelte-zmnsx8::before{content:" ";width:45px;height:0.15rem;background-color:var(--primary);position:absolute;bottom:0.8rem;border-radius:5px}.scroll.svelte-zmnsx8.svelte-zmnsx8{opacity:1;transition:all 0.5s ease-in-out;transition:all 0.2s ease-in-out}.hide.svelte-zmnsx8.svelte-zmnsx8{opacity:0;transition:all 0.2s ease-in-out}@media screen and (max-width: 680px){nav.svelte-zmnsx8.svelte-zmnsx8{display:flex;justify-content:end;align-items:center;width:100%;margin-top:5px}nav.svelte-zmnsx8 .burger{display:flex !important;margin-right:20px !important}nav.svelte-zmnsx8 .menu-entries.svelte-zmnsx8{display:none;width:100%;font-size:12px}nav.svelte-zmnsx8 .mobile.svelte-zmnsx8{justify-content:end;align-items:center;width:100% !important;position:absolute;top:80px;display:flex;flex-direction:column;background-color:#fff;transition:all 1s ease-out;height:250px}nav.svelte-zmnsx8 .mobile li.svelte-zmnsx8{display:flex;width:100%;background-color:#fff;height:60px;margin:0;padding:0px;border-bottom:1px solid rgba(194, 193, 193, 0.74);justify-content:center;align-items:center}nav.svelte-zmnsx8 .mobile li a.svelte-zmnsx8{display:block;text-align:center;align-self:center;padding:20px;height:100%;width:100%}}',
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  let hide;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let open = false;
  let oldScroll = void 0;
  const offset = 50;
  let { scrollY = 0 } = $$props;
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.scrollY === void 0 && $$bindings.scrollY && scrollY !== void 0)
    $$bindings.scrollY(scrollY);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
      "navigation svelte-zmnsx8",
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
      "menu-entries svelte-zmnsx8",
      innerWidth < 680 && open == true ? "mobile" : ""
    ].join(" ").trim()}"><li class="${["svelte-zmnsx8", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="/" class="svelte-zmnsx8">Startseite</a></li>
        <li class="${["svelte-zmnsx8", $page.url.pathname === "/leistungen" ? "active" : ""].join(" ").trim()}"><a href="/leistungen" class="svelte-zmnsx8">Leistungen</a></li>
        <li class="${["svelte-zmnsx8", $page.url.pathname === "/ueber-mich" ? "active" : ""].join(" ").trim()}"><a href="/ueber-mich" class="svelte-zmnsx8">Über Mich</a></li>
        <li class="${["svelte-zmnsx8", $page.url.pathname === "/kontakt" ? "active" : ""].join(" ").trim()}"><a href="/kontakt" class="svelte-zmnsx8">Kontakt</a></li></ul>
</nav>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const app = "";
const Logo_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#logoSvg{width:auto;z-index:100000;display:flex;vertical-align:center}.logo-wrapper.svelte-1rao7iy.svelte-1rao7iy{min-width:220px;display:flex;flex-direction:row;vertical-align:center;align-items:center}.circle.svelte-1rao7iy.svelte-1rao7iy{min-width:70px;width:70px;height:70px;min-height:70px;background:#77B6BA;border-radius:50%;display:flex;justify-content:center;align-items:center;border:1px solid white}.brand-wrapper.svelte-1rao7iy.svelte-1rao7iy{display:flex;flex-direction:column;padding:0;margin:0;margin:-5px 0 0 10px}.brand-wrapper.svelte-1rao7iy .brand-name.svelte-1rao7iy{padding:0;margin:0;border:1.5px solid #77B6BA;height:30px;display:flex;justify-content:center;align-items:center;padding:0 5px;background-color:white;margin:2px 0}.brand-wrapper.svelte-1rao7iy .brand-name h1.svelte-1rao7iy{font-size:16px;font-family:"Segoe UI";font-weight:400;color:var(--primary);margin:0;padding:0;line-height:1;letter-spacing:1px}.brand-wrapper.svelte-1rao7iy small.svelte-1rao7iy{padding:0;margin:0;margin-left:2px;font-family:"Segoe UI";line-height:1.4;font-size:8px;letter-spacing:2.5px}',
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="logo logo-wrapper svelte-1rao7iy"><div class="circle svelte-1rao7iy"><div style="display: contents; --leaves-main:#fff; --leaves-overlay:#fff; --tree-color:#fff; --tree-overlay:#fff;">${validate_component(LogoSvg, "LogoSvg").$$render($$result, { height: "50px", animation: true }, {}, {})}</div></div>
    <div class="brand-wrapper svelte-1rao7iy"><small class="svelte-1rao7iy">B.Sc in Psychologie</small>
        <div class="brand-name svelte-1rao7iy"><h1 class="svelte-1rao7iy">Lisa-Marie Loof</h1></div>
        <small class="svelte-1rao7iy">Dipl. Hypnosetrainerin</small></div>
  
</div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navigation{margin-top:5px}.logo{z-index:999;padding-top:10px}.hide.svelte-1qkrsnf.svelte-1qkrsnf{opacity:0;height:0;transition:all 0.2s ease-in-out}.scroll.svelte-1qkrsnf.svelte-1qkrsnf{box-shadow:rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;opacity:1;transition:all 0.5s ease-in-out;transition:all 0.2s ease-in-out;height:85px !important}.content-wrapper.svelte-1qkrsnf.svelte-1qkrsnf{width:100vw;height:80px;display:flex;justify-content:center;align-items:center;background-color:#fff;z-index:999;position:fixed;top:0;transition:all 0.5s ease-in-out}.content-wrapper.svelte-1qkrsnf header.svelte-1qkrsnf{position:absolute;display:flex;justify-content:center;align-items:center;top:0;z-index:999;width:100%;max-width:var(--content-width);justify-self:center;display:flex;flex-direction:row;justify-content:space-between;opacity:1;transition:all 0.5s ease-in-out}.app.svelte-1qkrsnf.svelte-1qkrsnf{width:100%;min-height:100vh;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.app.svelte-1qkrsnf main.svelte-1qkrsnf{min-height:100vh;display:flex;flex-direction:column;height:auto;justify-content:space-between;width:100%}@media screen and (max-width: 680px){.app.svelte-1qkrsnf #logoSvg{right:15px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollY;
  let hide;
  let { data } = $$props;
  let oldScroll = void 0;
  const offset = 50;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  $$result.css.add(css);
  scrollY = 0;
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
  return `








<div class="app svelte-1qkrsnf"><div class="${[
    "content-wrapper svelte-1qkrsnf",
    (scrollY > offset && !hide ? "scroll" : "") + " " + (hide === true ? "hide" : "")
  ].join(" ").trim()}"><header class="svelte-1qkrsnf">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
                ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</header></div>
        
        <main class="svelte-1qkrsnf">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
