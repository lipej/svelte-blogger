import hljs from 'highlight.js';
import { v4 as uuidv4 } from 'uuid';

export function formatCode(str: string, lang: string) {
	return (
		'<div class="p-3 my-2 mockup-code">' +
		hljs
			.highlight(lang, str)
			.value.split('\n')
			.map((line, index) => {
				if (line === '') return;
				if (!line) return;
				return `<pre data-prefix="${index + 1}">${line}</pre>`;
			})
			.filter(Boolean)
			.join('') +
		'</div>'
	);
}

export function formatOutput(str: string, slug: string) {
	const id = uuidv4();
	return `
  <a href="/posts/${slug}#${id}" class="btn bg-success btn-xs m-0">output</a> 
  <div id="${id}" class="modal ">
      <div class="px-4 mockup-code lg:min-w-[50%] lg:max-w-[90%] min-w-[90%]">  
        <pre data-prefix=">" class="text-success"> 
          ${str}
        </pre> 
        <div class="modal-action">
          <a href="/posts/${slug}#" class="btn bg-info btn-xs">Close</a>
       </div> 
      </div>
    </div>
  `;
}
