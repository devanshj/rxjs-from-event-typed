export type DOMEventEmitter<N extends any = any, A extends any[] = any[]> =
	| DOMEventEmitterWithOptions<N, A>
	| DOMEventEmitterWithoutOptions<N, A>

export type DOMEventEmitterWithoutOptions<N = any, A extends any[] = any[]> = {
	addEventListener: (
		name: N,
		listener: (...args: A) => any
	) => any;

	removeEventListener: (
		name: N,
		listener: (...args: A) => any
	) => any;
}

export type DOMEventEmitterWithOptions<N = any, A extends any[] = any[]> = {
	addEventListener: (
		name: N,
		listener: (...args: A) => any,
		options: DOMEventListenerOptions
	) => any;

	removeEventListener: (
		name: N,
		listener: (...args: A) => any,
		options: DOMEventListenerOptions
	) => any;
}

export type DOMEventListenerOptions = 
	| boolean
	| {
		capture?: boolean,
		once?: boolean,
		passive?: boolean
	}