import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from './astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { $ as $$Services } from './services_BOpoSTm3.mjs';

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CTA", $$Services, { "title": "Li\xEAn l\u1EA1c trao \u0111\u1ED5i", "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://www.instagram.com/nhavantuonglai"
  }, "items": [
    {
      title: "T\u1EE9c th\u1EDDi",
      description: "B\u1EA1n c\xF3 th\u1EC3 g\u1EEDi v\xE0 nh\u1EADn tin nh\u1EAFn nhanh ch\xF3ng, tr\u1EF1c ti\u1EBFp, gi\xFAp nh\u1EEFng v\u1EA5n \u0111\u1EC1 c\xE1 nh\xE2n c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt t\u1EE9c th\u1EDDi v\xE0 hi\u1EC7u qu\u1EA3 h\u01A1n.",
      icon: "tabler:bell-school"
    },
    {
      title: "Th\xE2n thi\u1EC7n",
      description: "V\xEC t\xEDnh ch\u1EA5t l\xE0 k\xEAnh li\xEAn l\u1EA1c nhanh, n\xEAn b\u1EA1n c\xF3 th\u1EC3 b\u1ECF qua nh\u1EEFng nghi th\u1EE9c giao ti\u1EBFp th\xF4ng th\u01B0\u1EDDng, ch\u1EC9 c\u1EA7n l\u1ECBch s\u1EF1 v\xE0 t\xF4n tr\u1ECDng th\xEC s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 ph\u1EA3n h\u1ED3i \u0111\u1EA7y th\xE2n thi\u1EC7n, tho\u1EA3i m\xE1i t\u1EEB t\xE1c gi\u1EA3.",
      icon: "tabler:brand-codecov"
    }
  ], "image": {
    src: "https://nhavantuonglai.com/image/cover/001-480.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Liên lạc thông qua Instagram</h3>
Thông qua Instagram, bạn có thể trao đổi trực tiếp và tức thời, cũng như cập nhật những thông tin mới nhất từ nhavantuonglai.
` })}` })} ${renderComponent($$result, "CTA", $$Services, { "isReversed": true, "callToAction": {
    text: "G\u1EEDi mail",
    href: "mailto:info@nhavantuonglai.com"
  }, "items": [
    {
      title: "Tin c\u1EADy",
      description: "Trong m\u1ED9t s\u1ED1 tr\u01B0\u1EDDng h\u1EE3p, email \u0111\u01B0\u1EE3c d\xF9ng nh\u01B0 m\u1ED9t t\xE0i li\u1EC7u ph\xE1p l\xFD, ch\xEDnh v\xEC v\u1EADy m\xE0 b\u1EA1n c\xF3 th\u1EC3 an t\xE2m v\xE0 tin c\u1EADy khi trao \u0111\u1ED5i v\u1EDBi t\xE1c gi\u1EA3 th\xF4ng qua email.",
      icon: "tabler:trees"
    },
    {
      title: "Chuy\xEAn nghi\u1EC7p",
      description: "C\u1EA5u tr\xFAc c\u1EE7a email \u0111\u1EB7t t\xEDnh chuy\xEAn nghi\u1EC7p l\xEAn h\xE0ng \u0111\u1EA7u, n\xEAn nh\u1EEFng th\xF4ng tin, n\u1ED9i dung \u0111\u01B0\u1EE3c vi\u1EBFt trong email t\u1EEB t\xE1c gi\u1EA3 s\u1EBD lu\xF4n \u0111\u1EA3m b\u1EA3o \u0111i\u1EC1u n\xE0y \u1EDF m\u1EE9c cao nh\u1EA5t.",
      icon: "tabler:award"
    }
  ], "image": {
    src: "https://nhavantuonglai.com/image/cover/001-431.jpg",
    alt: "viet-mail"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Trao đổi trên email</h3>
Thông qua email cá nhân, bạn có thể trao đổi thỏa thuận hợp tác, kết nối chuyên sâu và mang tính chuyên nghiệp.
` })}` })}`;
}, "D:/Onecode/article-open/src/components/content/call-to-action.astro", void 0);

export { $$CallToAction as $ };
