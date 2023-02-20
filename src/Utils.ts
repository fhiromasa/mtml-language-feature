export type TItem = {
	codeBlock: string;
	description?: string;
	type?: string;
	url?: string;
	deprecated?: Boolean;
	version?: string;
};
export type TItems = {
	[name: string]: TItem;
};

export enum EnumCmsName {
	mt = "Movable Type",
	net = "Movable Type.net",
	pc = "PowerCMS",
	pcx = "PowerCMS X",
}

type Tag = {
	name: string;
	url: string;
	type: string;
	description: string;
	modifiers: Modifiers;
};
type Modifiers = {
	[name: string]: Modifier;
};
type Modifier = {
	name: string;
	value: string;
	description: string;
};

let tafitem: Tag = {
	name: "name",
	url: "https://example.com",
	type: "function",
	description: "description",
	modifiers: {
		days: {
			name: "name",
			value: "value",
			description: "description",
		},
		sort: {
			name: "sort",
			value: "v",
			description: "",
		},
	},
};
