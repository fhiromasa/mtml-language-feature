import { MarkdownString } from "vscode";

export interface IItem {
	codeBlock: string;
	description?: string;
	type?: string;
	url?: string;
	deprecated?: Boolean;
	version?: string;
}
export interface IItems {
	[name: string]: IItem;
}

export enum CmsType {
	mt = "Movable Type",
	net = "Movable Type.net",
	pc = "PowerCMS",
	pcx = "PowerCMS X",
}

/**
 * Return hover message that type is vscode.MarkdownString
 * @param entry
 * @returns
 */
export function makeHoverMessage(entry: IItem): MarkdownString {
	let mdMessage = new MarkdownString();
	mdMessage.appendCodeblock(entry.codeBlock);

	if (entry.deprecated) {
		mdMessage.appendMarkdown(`# This item is deprecated!!\n\n`);
	}

	if (entry.description && entry.description !== "") {
		mdMessage.appendMarkdown(`${entry.description}\n\n`);
	}
	if (entry.type && entry.type !== "") {
		mdMessage.appendMarkdown(`type : ${entry.type}\n\n`);
	}
	if (entry.version && entry.version !== "") {
		mdMessage.appendMarkdown(`version : ${entry.version}\n\n`);
	}
	if (entry.url && entry.url !== "") {
		mdMessage.appendMarkdown(`[MovableType.jp Reference](${entry.url})`);
	}
	return mdMessage;
}