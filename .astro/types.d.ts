declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
"aldo-leopold-nien-lich-mien-gio-cat-chuong-01.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-01.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-01";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-02.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-02.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-02";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-03.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-03.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-03";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-04.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-04.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-04";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-05.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-05.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-05";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-06.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-06.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-06";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-07.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-07.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-07";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-08.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-08.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-08";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-09.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-09.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-09";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-10.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-10.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-10";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-11.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-11.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-11";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-12.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-12.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-12";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-13.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-13.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-13";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-14.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-14.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-14";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-15.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-15.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-15";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-16.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-16.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-16";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-17.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-17.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-17";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-18.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-18.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-18";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-19.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-19.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-19";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-20.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-20.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-20";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-21.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-21.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-21";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"aldo-leopold-nien-lich-mien-gio-cat-chuong-22.md": {
	id: "aldo-leopold-nien-lich-mien-gio-cat-chuong-22.md";
  slug: "aldo-leopold-nien-lich-mien-gio-cat-chuong-22";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
