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
