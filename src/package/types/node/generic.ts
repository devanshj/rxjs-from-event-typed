export type NodeEventEmitterGeneric<
	N0, A0 extends any[],
	N1, A1 extends any[],
	N2, A2 extends any[],
	N3, A3 extends any[],
	N4, A4 extends any[],
	N5, A5 extends any[],
	N6, A6 extends any[],
	N7, A7 extends any[],
	N8, A8 extends any[],
	N9, A9 extends any[],
	N10, A10 extends any[],
	N11, A11 extends any[]
> = {

	addListener(
		name: N0,
		listener: (...args: A0) => any
	): any;

	removeListener(
		name: N0,
		listener: (...args: A0) => any
	): any;


	addListener(
		name: N1,
		listener: (...args: A1) => any
	): any;

	removeListener(
		name: N1,
		listener: (...args: A1) => any
	): any;


	addListener(
		name: N2,
		listener: (...args: A2) => any
	): any;

	removeListener(
		name: N2,
		listener: (...args: A2) => any
	): any;


	addListener(
		name: N3,
		listener: (...args: A3) => any
	): any;

	removeListener(
		name: N3,
		listener: (...args: A3) => any
	): any;


	addListener(
		name: N4,
		listener: (...args: A4) => any
	): any;

	removeListener(
		name: N4,
		listener: (...args: A4) => any
	): any;


	addListener(
		name: N5,
		listener: (...args: A5) => any
	): any;

	removeListener(
		name: N5,
		listener: (...args: A5) => any
	): any;


	addListener(
		name: N6,
		listener: (...args: A6) => any
	): any;

	removeListener(
		name: N6,
		listener: (...args: A6) => any
	): any;


	addListener(
		name: N7,
		listener: (...args: A7) => any
	): any;

	removeListener(
		name: N7,
		listener: (...args: A7) => any
	): any;


	addListener(
		name: N8,
		listener: (...args: A8) => any
	): any;

	removeListener(
		name: N8,
		listener: (...args: A8) => any
	): any;


	addListener(
		name: N9,
		listener: (...args: A9) => any
	): any;

	removeListener(
		name: N9,
		listener: (...args: A9) => any
	): any;


	addListener(
		name: N10,
		listener: (...args: A10) => any
	): any;

	removeListener(
		name: N10,
		listener: (...args: A10) => any
	): any;


	addListener(
		name: N11,
		listener: (...args: A11) => any
	): any;

	removeListener(
		name: N11,
		listener: (...args: A11) => any
	): any;

}