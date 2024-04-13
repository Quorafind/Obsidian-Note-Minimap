import { Plugin } from 'obsidian';
import { showMinimap } from "./src";

export default class MyPlugin extends Plugin {

	async onload() {
		this.registerEditorExtension([
			showMinimap.compute(['doc'], (state) => {
				let create = () => {
					const dom = createEl('div');
					return {dom};
				};

				return {
					create,
					/* optional */
					displayText: 'blocks',
					showOverlay: 'always',
					gutters: [{1: '#00FF00', 2: '#00FF00'}],
				};
			})
		]);
	}

	onunload() {

	}

}
