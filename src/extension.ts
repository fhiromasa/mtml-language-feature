// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import MTMLHoverProvider from "./hoverProvider";

const sel: vscode.DocumentSelector = { scheme: "file", language: "mtml" };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {
	// console.log("hello mtml");

	context.subscriptions.push(
		// hover機能の提供開始
		vscode.languages.registerHoverProvider(sel, new MTMLHoverProvider())
	);
}

// this method is called when your extension is deactivated
export function deactivate(): void {}
