// import mtItems from "./tags.json";
// import modifiers from "./modifiers.json";
import { TModifier, TNewItem, mtItems } from "./utils";
import {
	HoverProvider,
	Hover,
	TextDocument,
	CancellationToken,
	Position,
	MarkdownString,
} from "vscode";

export default class NewHoverProvider implements HoverProvider {
	public provideHover(
		document: TextDocument,
		position: Position,
		token: CancellationToken
	): Hover | undefined {
		const tagRegex = /<\$?mt:?[0-9a-zA-Z:_\s=\",]+/i;
		const hoverRegex = /[0-9a-zA-Z:_]+=?/i;

		const hoverRange = document.getWordRangeAtPosition(position, hoverRegex);
		const tagRange = document.getWordRangeAtPosition(position, tagRegex);
		if (!hoverRange || !tagRange) {
			//どちらかがundefinedだった時点で終了
			return undefined;
		}

		// mtタグの中で何かしらの要素にホバーしている
		const hoverText = document.getText(hoverRange);
		const tagText = document.getText(tagRange);
		const tagStructure = tagText.split(/\s+/);
		console.log("1.1. hover text is :" + hoverText);
		console.log("1.2. tag text is   :" + tagText);
		console.log("1.3. tag structure is :" + tagStructure.join(", "));

		const tagItemId = tagStructure[0].replace(/[<:]/g, "").toLowerCase();
		console.log("1.4. tag item id is :" + tagItemId);
		let tagItem: TNewItem = mtItems[tagItemId];
		if (!tagItem) {
			tagItem = {
				name: tagStructure[0].replace(/[<:]/g, ""),
				description: "This tag is not included in the reference.",
				type: "",
				url: "",
				modifiers: {},
			};
		}
		console.log("1.5. tagItem is :", tagItem.name);

		let modifierItem: TNewItem | TModifier | undefined;
		if (hoverText.match(/=$/)) {
			const modifierItemId = hoverText.replace(/(:\w+)?=$/, "").toLowerCase();
			console.log("1.6. modifier item id is :" + modifierItemId);
			modifierItem =
				mtItems[modifierItemId] || tagItem.modifiers[modifierItemId];
			console.log("1.7. modifierItem is :", modifierItem.name);
		}

		return new Hover(this.makeMarkdownString(tagItem, modifierItem));
	}

	private makeMarkdownString(
		tagItem: TNewItem,
		modifierItem: TNewItem | TModifier | undefined
	): MarkdownString {
		const markdownString = new MarkdownString();
		const tagName = tagItem.name.replace(/^mt/i, "").replace(/:/, "");
		const tagModifiers = Object.values(tagItem.modifiers);

		let codeBlock = "<mt:" + tagName + ">";
		if (modifierItem) {
			codeBlock = codeBlock.replace(/>$/, ` ${modifierItem.name}="">`);
		}
		if (tagItem.type === "block") {
			codeBlock += " ~ </mt:" + tagName + ">";
		}

		markdownString.appendCodeblock(codeBlock);
		if (modifierItem?.type === "global") {
			markdownString.appendMarkdown(
				`\n\nglobal modifier : ${modifierItem.name}` +
					`\n\n${modifierItem.description}` +
					`\n\ntemplate tag : ${tagItem.name}`
			);
		}
		markdownString.appendMarkdown(`\n\n${tagItem.description}`);

		if (tagModifiers.length > 0) {
			markdownString.appendMarkdown(`\n\nmodifiers`);
			tagModifiers.map((modifier) => {
				markdownString.appendMarkdown(
					`\n- ${modifier.name}=${modifier.value}\n\t- ${modifier.description}`
				);
			});
		}

		markdownString.appendMarkdown(`\n\n[Reference](${tagItem.url})`);
		console.log("makeMarkdownString :" + markdownString.value);

		return markdownString;
	}
}
