export type IsStringLiteral<T> =
	T extends string
		? string extends T
			? false
			: true
		: false;
	
export type IsSymbolLiteral<T> =
	T extends symbol
		? symbol extends T
			? false
			: true
		: false;

export type AreEqual<A, B> =
	Exclude<A, B> extends never
		? Exclude<B, A> extends never
			? true
			: false
		: false;


export type AssertedProp<T, K> =
	K extends keyof T
		? T[K]
		: never;

export type Union<A> =
	A extends (infer U)[]
		? U
		: never;