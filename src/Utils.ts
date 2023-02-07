import { MarkdownString } from "vscode";

export type TItem ={
	codeBlock: string;
	description?: string;
	type?: string;
	url?: string;
	deprecated?: Boolean;
	version?: string;
};
export type TItems= {
	[name: string]: TItem;
};

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
export function makeHoverMessage(entry: TItem): MarkdownString {
	let mdMessage = new MarkdownString();
	mdMessage.appendCodeblock(entry.codeBlock);

	if (entry.deprecated) {
		mdMessage.isTrusted=true;
		mdMessage.appendMarkdown(`# <span style="color:#8f2107;">This item is deprecated!!</span>\n\n`);
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
