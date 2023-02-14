/* eslint-disable @typescript-eslint/naming-convention */
import { TItems } from "./utils";

export const netTags: TItems = {};

export const netModifiers: TItems = {
	count_characters: {
		codeBlock: '<mt:Tag count_characters="" >',
		type: "global",
		description:
			"1 を設定すると、MT タグの値に含まれる文字数 (空白を含む) を表示します。",
		url: "https://movabletype.net/tags/2007/08/count_characters.html",
		version: "",
	},
	decode_html: {
		codeBlock: '<mt:Tag decode_html="" >',
		type: "global",
		description:
			"1 を設定すると、MT タグの値に含まれるすべての HTML エンティティをデコードします。",
		url: "https://movabletype.net/tags/2007/08/decode_html.html",
		version: "",
	},
	decode_xml: {
		codeBlock: '<mt:Tag decode_xml="" >',
		type: "global",
		description:
			"1 を設定すると、MT タグの値に含まれるすべての XML エンティティをデコードします。",
		url: "https://movabletype.net/tags/2007/08/decode_xml.html",
		version: "",
	},
	encode_html: {
		codeBlock: '<mt:Tag encode_html="" >',
		type: "global",
		description: "1 に設定すると、MT タグの値がHTML エンコードされます。",
		url: "https://movabletype.net/tags/2007/08/encode_html.html",
		version: "",
	},
	encode_js: {
		codeBlock: '<mt:Tag encode_js="" >',
		type: "global",
		description:
			"1 に設定すると、MT タグの値が javascript の文字列の値として使えるようにエンコードします。",
		url: "https://movabletype.net/tags/2007/08/encode_js.html",
		version: "",
	},
	encode_php: {
		codeBlock: '<mt:Tag encode_php="" >',
		type: "global",
		description:
			"1 を設定すると、PHP で使う三種類の値、シングルクォーテーション、ダブルクォーテーション、ヒアドキュメントのうち、いずれか一つのフォーマットに合わせて MT タグの値をエンコードします。",
		url: "https://movabletype.net/tags/2007/08/encode_php.html",
		version: "",
	},
	encode_url: {
		codeBlock: '<mt:Tag encode_url="" >',
		type: "global",
		description:
			"1 を設定すると、URL での利用に合わせたフォーマットに、MT タグの値をエンコードします。",
		url: "https://movabletype.net/tags/2007/08/encode_url.html",
		version: "",
	},
	filters: {
		codeBlock: '<mt:Tag filters="" >',
		type: "global",
		description:
			"MT タグの値に対して適用されるテキストフォーマットのフィルターのリストを設定します。",
		url: "https://movabletype.net/tags/2007/08/filters.html",
		version: "",
	},
	lower_case: {
		codeBlock: '<mt:Tag lower_case="" >',
		type: "global",
		description: "1 を設定すると MT タグの値を小文字 (abc...) にします。",
		url: "https://movabletype.net/tags/2007/08/lower_case.html",
		version: "",
	},
	nl2br: {
		codeBlock: '<mt:Tag nl2br="" >',
		type: "global",
		description:
			"設定すると、MT タグの値に含まれる空白行を br 要素に置き換えます。",
		url: "https://movabletype.net/tags/2007/08/nl2br.html",
		version: "",
	},
	numify: {
		codeBlock: '<mt:Tag numify="" >',
		type: "global",
		description:
			"1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる数字を3桁ごとにカンマで区切ります。",
		url: "https://movabletype.net/tags/2017/11/numify.html",
		version: "",
	},
	remove_html: {
		codeBlock: '<mt:Tag remove_html="" >',
		type: "global",
		description:
			"1 を設定すると、MT タグの値に含まれるすべての HTML タグを除去します。",
		url: "https://movabletype.net/tags/2007/08/remove_html.html",
		version: "",
	},
	sanitize: {
		codeBlock: '<mt:Tag sanitize="" >',
		type: "global",
		description: "テキストの除去フィルターを実行します。",
		url: "https://movabletype.net/tags/2007/08/sanitize.html",
		version: "",
	},
	setvar: {
		codeBlock: '<mt:Tag setvar="" >',
		type: "global",
		description:
			"setvar モディファイアを設定したブロックまたはファンクションは展開されず、出力される結果は、モディファイアの設定値が名前の変数に値となります。",
		url: "https://movabletype.net/tags/2007/12/setvar.html",
		version: "",
	},
	space_pad: {
		codeBlock: '<mt:Tag space_pad="" >',
		type: "global",
		description:
			"MT タグの値を、全体で N 文字になるよう、余白を空白で埋めます。",
		url: "https://movabletype.net/tags/2007/08/space_pad.html",
		version: "",
	},
	sprintf: {
		codeBlock: '<mt:Tag sprintf="" >',
		type: "global",
		description: "MT タグの出力結果を printf のフォーマットで変換します。",
		url: "https://movabletype.net/tags/2007/08/sprintf.html",
		version: "",
	},
	strip_linefeeds: {
		codeBlock: '<mt:Tag strip_linefeeds="" >',
		type: "global",
		description: "MT タグの値から改行コードを除きます。",
		url: "https://movabletype.net/tags/2007/08/strip_linefeeds.html",
		version: "",
	},
	trim_to: {
		codeBlock: '<mt:Tag trim_to="" >',
		type: "global",
		description: "先頭から trim_to で指定した文字数の文字を取り出します。",
		url: "https://movabletype.net/tags/2007/08/trim_to.html",
		version: "",
	},
	upper_case: {
		codeBlock: '<mt:Tag upper_case="" >',
		type: "global",
		description: "1 に設定するとタグの値を大文字 (ABC...) にします。",
		url: "https://movabletype.net/tags/2007/08/upper_case.html",
		version: "",
	},
	zero_pad: {
		codeBlock: '<mt:Tag zero_pad="" >',
		type: "global",
		description:
			"タグの値を、全体で  N  文字になるよう、余白を  0  で埋めます。",
		url: "https://movabletype.net/tags/2007/08/zero_pad.html",
		version: "",
	},
};
