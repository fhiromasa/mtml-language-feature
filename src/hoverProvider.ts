import { mtTags, mtModifiers } from "./mtHoverItems";
import { makeHoverMessage, CmsType } from "./Utils";
import {
	HoverProvider,
	Hover,
	TextDocument,
	CancellationToken,
	Position,
	workspace,
} from "vscode";

export default class MTMLHoverProvider implements HoverProvider {
	public provideHover(
		document: TextDocument,
		position: Position,
		token: CancellationToken
	): Hover | undefined {
		console.log("start provideHover()");

		// 設定を使うのならここで読んで設定処理
		const enable = workspace
			.getConfiguration("mtml")
			.get<boolean>("suggest.basic", true);
		if (!enable) {
			console.log("settings of mtml.suggest.basic is false");
			return undefined;
		}
		const cmsType = workspace.getConfiguration("mtml").get<string>("cms.type");
		console.log("cmsType = " + cmsType);

		// ポインターの居場所に文字列があるかどうか確認する。なければリターン
		// この時取得可能文字列はcamelCase, snake_case, kebab-caseと数字
		const wordRange = document.getWordRangeAtPosition(position);
		if (!wordRange) {
			console.log("there are no words");
			return undefined;
		}

		const rawName = document.getText(wordRange);
		const lowerName = rawName.toLowerCase();
		const name = lowerName.replace(/^(mt)/, "");
		let entry;
		switch (cmsType) {
			default:
				entry = mtTags[name] || mtModifiers[name] || mtTags["app"+name];
				break;
		}

		if (!entry) {
			console.log(`${name} is not found.`);
			return undefined;
		}

		return new Hover(makeHoverMessage(entry));
	}
}
