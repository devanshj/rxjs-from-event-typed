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

// from the one and only jcalz B)
// https://stackoverflow.com/a/50375286/9591609

type UnionToIntersection<U> = 
	(U extends any ? (k: U) => void : never) extends
	((k: infer I) => void)
		? I
		: never;

export type Intersection<A> = AssertedProp<
	UnionToIntersection<{
		[K in keyof A]: { group: A[K] }
	}[keyof A]>
	, "group"
>

export type StringToNumber<T> = 
	T extends "0" ? 0 :
	T extends "1" ? 1 :
	T extends "2" ? 2 :
	T extends "3" ? 3 :
	T extends "4" ? 4 :
	T extends "5" ? 5 :
	T extends "6" ? 6 :
	T extends "7" ? 7 :
	T extends "8" ? 8 :
	T extends "9" ? 9 :
	T extends "10" ? 10 :
	T extends "11" ? 11 :
	T extends "12" ? 12 :
	number;