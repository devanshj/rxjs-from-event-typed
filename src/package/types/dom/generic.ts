import { DOMEventListenerOptions } from "./definition";

export type DOMEventEmitterGeneric<
	N0 = any, E0 = any,
	N1 = any, E1 = any,
	N2 = any, E2 = any,
	N3 = any, E3 = any,
	N4 = any, E4 = any,
	N5 = any, E5 = any,
	N6 = any, E6 = any,
	N7 = any, E7 = any,
	N8 = any, E8 = any,
	N9 = any, E9 = any,
	N10 = any, E10 = any,
	N11 = any, E11 = any
> = {

	addEventListener(
		name: N0,
		listener: (event: E0) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N0,
		listener: (event: E0) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N1,
		listener: (event: E1) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N1,
		listener: (event: E1) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N2,
		listener: (event: E2) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N2,
		listener: (event: E2) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N3,
		listener: (event: E3) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N3,
		listener: (event: E3) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N4,
		listener: (event: E4) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N4,
		listener: (event: E4) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N5,
		listener: (event: E5) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N5,
		listener: (event: E5) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N6,
		listener: (event: E6) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N6,
		listener: (event: E6) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N7,
		listener: (event: E7) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N7,
		listener: (event: E7) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N8,
		listener: (event: E8) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N8,
		listener: (event: E8) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N9,
		listener: (event: E9) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N9,
		listener: (event: E9) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N10,
		listener: (event: E10) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N10,
		listener: (event: E10) => any,
		options?: DOMEventListenerOptions
	): any;


	addEventListener(
		name: N11,
		listener: (event: E11) => any,
		options?: DOMEventListenerOptions
	): any;

	removeEventListener(
		name: N11,
		listener: (event: E11) => any,
		options?: DOMEventListenerOptions
	): any;

}