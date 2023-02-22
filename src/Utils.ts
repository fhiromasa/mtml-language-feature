import movabletypeItems from "./data/movabletype.json";

const mtItems: TItems = movabletypeItems;
const netItems: TItems = movabletypeItems;
const pcItems: TItems = movabletypeItems;
const pcxItems: TItems = movabletypeItems;

export const getCmsItems = (cmsName: string): TItems => {
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
