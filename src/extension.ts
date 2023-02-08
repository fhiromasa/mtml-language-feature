// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
	workspace,
	DocumentSelector,
	ExtensionContext,
	languages,
} from "vscode";
import MTMLHoverProvider from "./hoverProvider";

const SEL: DocumentSelector = { scheme: "file", language: "mtml" };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext): void {
	// hover機能の提供開始
	if (workspace.getConfiguration("mtml").get<boolean>("hover.enable")) {
		console.log("settings of mtml.hover.enable is true");
		context.subscriptions.push(
			languages.registerHoverProvider(SEL, new MTMLHoverProvider())
		);
	}
}

// this method is called when your extension is deactivated
export function deactivate(): void {}
