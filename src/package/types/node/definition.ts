export type NodeEventEmitter<N = any, A extends unknown[] = any> = {
	addListener: (
		name: N,
		listener: (...args: A) => any
	) => any;

	removeListener: (
		name: N,
		listener: (...args: A) => any
	) => any;
}