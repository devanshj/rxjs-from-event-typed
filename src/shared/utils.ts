type _AreEqual<A, B> =
	Exclude<A, B> extends never
		? Exclude<B, A> extends never
			? true
			: false
		: false

export type AreEqual<A, B> =
	IsAny<A> extends true
		? IsAny<B> extends true
			? true 
			: false :
	IsAny<B> extends true
		? IsAny<A> extends true
			? true
			: false :
	_AreEqual<A, B>;

export type IsAny<T> =
	_AreEqual<
		_AreEqual<T, "foo">,
		boolean
	>;