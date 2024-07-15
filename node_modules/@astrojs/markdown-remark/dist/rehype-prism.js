import { runHighlighterWithAstro } from "@astrojs/prism/dist/highlighter";
import { highlightCodeBlocks } from "./highlight.js";
const rehypePrism = () => {
  return async (tree) => {
    await highlightCodeBlocks(tree, (code, language) => {
      let { html, classLanguage } = runHighlighterWithAstro(language, code);
      return Promise.resolve(
        `<pre class="${classLanguage}"><code is:raw class="${classLanguage}">${html}</code></pre>`
      );
    });
  };
};
export {
  rehypePrism
};
