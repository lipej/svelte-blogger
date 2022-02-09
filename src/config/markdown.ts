import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { formatCode, formatOutput } from 'src/utils';

export function markdown(slug: string) {
  return new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return formatCode(str, lang);
      } catch (e) {
        throw (e as Error).message
      }
    }
    if (lang === 'output') return formatOutput(str, slug);
  }
});
}