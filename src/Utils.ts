import movabletypeItems from "./data/movabletype.json";

const MOVABLETYPE_ITEMS: TItems = movabletypeItems;
const MOVABLETYPE_NET_ITEMS: TItems = movabletypeItems;
const POWERCMS_ITEMS: TItems = movabletypeItems;
const POWERCMS_X_ITEMS: TItems = movabletypeItems;

export const getCmsItems = (cmsName: string): TItems => {
	switch (cmsName) {
		case EnumCmsName.net:
			return MOVABLETYPE_NET_ITEMS;
		case EnumCmsName.pc:
			return POWERCMS_ITEMS;
		case EnumCmsName.pcx:
			return POWERCMS_X_ITEMS;
		default:
			return MOVABLETYPE_ITEMS;
	}
};

export enum EnumCmsName {
	mt = "Movable Type",
	net = "Movable Type.net",
	pc = "PowerCMS",
	pcx = "PowerCMS X",
}

type TItems = {
	[string: string]: TItem;
};
export type TItem = {
	name: string;
	url: string;
	type: string;
	description: string;
	modifiers: TModifiers;
};
type TModifiers = {
	[string: string]: TModifier;
};
export type TModifier = {
	name: string;
	type: string;
	value: string;
	description: string;
	url: string;
};
