import MarkdownIt from "markdown-it/lib";

export default async function markdownToHtml(markdown) {
  const md = new MarkdownIt().use(require("markdown-it-highlightjs"));
  return md.render(markdown);
}
