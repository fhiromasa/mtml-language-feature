import movabletypeItems from "./data/movabletype.json";

const mtItems: TNewItems = movabletypeItems;
const netItems: TNewItems = movabletypeItems;
const pcItems: TNewItems = movabletypeItems;
const pcxItems: TNewItems = movabletypeItems;

export const getCmsItems = (cmsName: string): TNewItems => {
	switch (cmsName) {
		case EnumCmsName.net:
			return netItems;
		case EnumCmsName.pc:
			return pcItems;
		case EnumCmsName.pcx:
			return pcxItems;
		default:
			return mtItems;
	}
};

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

export interface TNewItems {
	[string: string]: TNewItem;
}
export interface TNewItem {
	name: string;
	url: string;
	type: string;
	description: string;
	modifiers: TModifiers;
}
interface TModifiers {
	[string: string]: TModifier;
}
export interface TModifier {
	name: string;
	type: string;
	value: string;
	description: string;
	url: string;
}
