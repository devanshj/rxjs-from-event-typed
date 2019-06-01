export type DOMEventEmitter<N = any, E = any> = {
	addEventListener: (
		name: N,
		listener: (event: E) => any,
		options?: DOMEventListenerOptions
	) => any;

	removeEventListener: (
		name: N,
		listener: (event: E) => any,
		options?: DOMEventListenerOptions
	) => any;
}

export type DOMEventListenerOptions = 
	| boolean
	| {
		capture?: boolean,
		once?: boolean,
		passive?: boolean
	}