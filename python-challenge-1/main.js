function main() {
	ace.config.set("basePath", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.13/")
	const editor = ace.edit("editor");
	editor.setOptions({
		theme: 'ace/theme/monokai',
		mode: 'ace/mode/python',
	});
}

window.onload = main
