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

export type AssertedProp<T, K> =
	K extends keyof T
		? T[K]
		: never;

export type Union<A> =
	A extends (infer U)[]
		? U
		: never;