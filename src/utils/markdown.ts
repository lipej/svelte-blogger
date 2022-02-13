import hljs from 'highlight.js';
import { v4 as uuidv4 } from 'uuid';

export function formatCode(str: string, language: string) {
	return (
		'<div class="p-3 my-2 mockup-code m-0">' +
		hljs
			.highlight(str, { language })
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

export function formatOutput(str: string) {
	const id = uuidv4();
	return `<div class="flex justify-end mb-3 mt-1 p-1"><label for="${id}" class="btn btn-xs btn-primary modal-button">output</label></div>
	<input type="checkbox" id="${id}" class="modal-toggle"> 
	<div class="modal">
		<div class="mockup-code px-4 lg:min-w-[50%] min-w-[90%] lg:max-w-[90%]">
		<pre data-prefix=">" class="text-success">${str}</pre>
			<div class="modal-action">
				<label for="${id}" class="btn bg-info btn-xs">Close</label>
			</div>
		</div>
	</div>`.replace(/\n/gm, '');
}
