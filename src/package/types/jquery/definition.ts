export type JQueryEventEmitter<N = any, A extends unknown[] = any> = {
	on: (
		name: N,
		listener: (...args: A) => any
	) => any;

	off: (
		name: N,
		listener: (...args: A) => any
	) => any;
}