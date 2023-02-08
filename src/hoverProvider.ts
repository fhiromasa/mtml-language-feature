import { mtTags, mtModifiers } from "./mtHoverItems";
import { EnumCmsName, TItem } from "./utils";
import {
	HoverProvider,
	Hover,
	TextDocument,
	CancellationToken,
	Position,
	workspace,
	MarkdownString,
} from "vscode";

export default class MTMLHoverProvider implements HoverProvider {
	public provideHover(
		document: TextDocument,
		position: Position,
		token: CancellationToken
	): Hover | undefined {
		console.log("start provideHover()");

		// 設定を使うのならここで読んで設定処理
		const CMS_NAME =
			workspace.getConfiguration("mtml").get<string>("cms.name") ||
			EnumCmsName.mt;
		console.log(`now using ${CMS_NAME}`);

		// ポインターの居場所に文字列があるかどうか確認する。なければリターン
		// この時取得可能文字列はcamelCase, PascalCase, snake_case, kebab-caseと数字
		const WORD_RANGE = document.getWordRangeAtPosition(position);
		if (!WORD_RANGE) {
			console.log("there are no words");
			return undefined;
		}

		const RAW_NAME = document.getText(WORD_RANGE);
		const LOWER_NAME = RAW_NAME.toLowerCase();
		const NAME = LOWER_NAME.replace(/^(mt)/, "");
		let entry;
		switch (CMS_NAME) {
			default:
				entry = mtTags[NAME] || mtModifiers[NAME] || mtTags["app" + NAME];
				break;
		}

		if (!entry) {
			console.log(`${NAME} is not found.`);
			return undefined;
		}

		return new Hover(this.makeHoverMessage(entry, CMS_NAME));
	}

	/**
	 * Return vscode.MarkdownString from TItem
	 * @param entry
	 * @param cmsName Must be defined in EnumCmsName
	 * @returns
	 */
	protected makeHoverMessage(entry: TItem, cmsName: string): MarkdownString {
		let mdMessage = new MarkdownString();
		mdMessage.appendCodeblock(entry.codeBlock);

		if (entry.deprecated) {
			mdMessage.isTrusted = true;
			mdMessage.appendMarkdown(
				`# <span style="color:#8f2107;">This item is deprecated!!</span>\n\n`
			);
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
			mdMessage.appendMarkdown(`[${cmsName} Reference](${entry.url})`);
		}
		return mdMessage;
	}
}
