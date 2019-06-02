export type AssertTrue<T extends true> = T;

export type FailingTests<T> = {
	[K in keyof T] : false | boolean extends T[K] ? K : never
}[keyof T];