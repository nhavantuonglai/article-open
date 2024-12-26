import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as renderSlot } from './astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from './page_DQk_4Keq.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Markdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Markdown;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-justify mx-auto px-6 prose prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:text-primary prose-h2:font-bold prose-h3:font-bold prose-h3:italic prose-h4:italic prose-a:font-bold prose-a:text-primary prose-a:target-blank dark:prose-a:text-accent prose-img:rounded-md mt-4 prose-headings:scroll-mt-[20px] py-20"> <h1 class="font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter">${frontmatter.title}</h1> <div class="text-justify mx-auto prose prose-xl max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:primary prose-img:rounded-md prose-img:shadow-lg mt-8"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "D:/OneCode/article-open/src/layouts/markdown.astro", void 0);

export { $$Markdown as $ };
