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

export type IsNumberLiteral<T> =
	T extends symbol
		? symbol extends T
			? false
			: true
		: false;

export type IsLiteral<T> =
	Or<[
		IsStringLiteral<T>,
		IsNumberLiteral<T>,
		IsSymbolLiteral<T>
	]>

export type AssertedProp<T, K> =
	K extends keyof T
		? T[K]
		: never;

export type Union<A> =
	A extends (infer U)[]
		? U
		: never;

/*
// from jcalz :)
// https://stackoverflow.com/a/50375286/9591609

type UnionToIntersection<U> = 
	(U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
		? I
		: never;

export type Intersection<A> = AssertedProp<
	UnionToIntersection<{
		[K in keyof A]: { group: A[K] }
	}[keyof A]>
	, "group"
>
*/

export type Or<T extends any[]> =
	boolean extends T[number] ? true :
	true extends T[number] ? true :
	false;