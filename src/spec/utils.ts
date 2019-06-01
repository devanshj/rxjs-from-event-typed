export type AreEqual<A, B> =
	Exclude<A, B> extends never
		? Exclude<B, A> extends never
			? true
			: false
		: false;

export type AssertTrue<T extends true> = T;

export type FailingTests<T> = {
	[K in keyof T] : false | boolean extends T[K] ? K : never
}[keyof T];