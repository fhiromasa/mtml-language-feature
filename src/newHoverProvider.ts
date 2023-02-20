import tags from "./tags.json";
import modifiers from "./modifiers.json";
import {
	HoverProvider,
	Hover,
	TextDocument,
	CancellationToken,
	Position,
	MarkdownString,
	DocumentHighlight,
} from "vscode";

export default class NewHoverProvider implements HoverProvider {
	public provideHover(
		document: TextDocument,
		position: Position,
		token: CancellationToken
	): Hover | undefined {
		const tagRegex = /<mt:?[0-9a-zA-Z:_\s=\",]+/i;
		const hoverRegex = /[0-9a-zA-Z:]+/i;

		const hoverRange = document.getWordRangeAtPosition(position, hoverRegex);
		const tagRange = document.getWordRangeAtPosition(position, tagRegex);
		if (!hoverRange || !tagRange) {
			return undefined;
		}

		const hoverText = document.getText(hoverRange);
		const tagText = document.getText(tagRange);
		console.log("hover text is :" + hoverText);
		console.log("tag text is   :" + tagText);

		const tagStructure = tagText.split(/\s+/);
		console.log("tag structure is :" + tagStructure);

		// hoverTextがタグかどうか？
		const isTag = hoverText.match(/^mt/i);
		if (isTag) {
			const tagIdentifier = hoverText.replace(/:/, "").toLowerCase();
			console.log("tag identifier is :" + tagIdentifier);

			const tag = tags[tagIdentifier as keyof typeof tags];
			console.log("tag is :" + tag.name);

			return new Hover(this.makeMarkdownString(tag));
		}

		return undefined;
	}

	private makeMarkdownString(tag: any, modifier?: any) {
		const formattedTagName = tag.name.replace(/^mt/i, "");

		let codeBlock = "<mt:" + formattedTagName + ">";
		if (tag.type === "block") {
			codeBlock += " ~ </mt:" + formattedTagName + ">";
		}

		let markdownString = new MarkdownString();
		markdownString.appendCodeblock(codeBlock);
		markdownString.appendMarkdown(tag.description);

		return markdownString;
	}
}
