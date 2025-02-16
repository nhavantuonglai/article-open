import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from './page_D0LVH7FG.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Markdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Markdown;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto px-6 mt-6 py-20 text-justify prose prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:text-primary prose-h2:font-bold"> <h1>${frontmatter.title}</h1> <div class="text-justify mx-auto prose prose-xl max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:primary prose-img:rounded-md prose-img:shadow-lg mt-8"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "D:/OneCode/article-open/src/layouts/markdown.astro", void 0);

export { $$Markdown as $ };
