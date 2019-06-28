import { DOMEventEmitterInferences, DOMEventEmitterWithOptions, DOMEventEmitterWithoutOptions } from "./dom";
import { Union, AssertedProp, IsLiteral } from "./utils";
import { AreEqual, IsAny } from "../../shared/utils";
import { NodeEventEmitter, NodeEventEmitterInferences } from "./node";
import { JQueryEventEmitter, JQueryEventEmitterInferences } from "./jquery";

export type EventEmitterWithoutOptions = 
	| DOMEventEmitterWithoutOptions
	| JQueryEventEmitter
	| NodeEventEmitter;

export type EventEmitterWithOptions = 
	| DOMEventEmitterWithOptions;

export type EventEmitter = 
	| EventEmitterWithoutOptions
	| EventEmitterWithOptions;

export type EventEmitterInferences<E> = 
	| DOMEventEmitterInferences<E>
	| JQueryEventEmitterInferences<E>
	| NodeEventEmitterInferences<E>;

export type EventName<
	E extends EventEmitter,
	S extends boolean = false,
	G extends EventEmitterInferences<E> = EventEmitterInferences<E>
> = 
	| Union<{
		[I in keyof G]: TransformEventName<
			AssertedProp<G[I], "name">,
			S
		>
	}>
	| (E extends HTMLElement
		? keyof HTMLElementEventMap
		: never);

type TransformEventName<N, S extends boolean> = 
	S extends true
		? IsLiteral<N> extends true
			? N
			: never
		: unknown extends N
			? never
			: N;



export type ObservedValue<
	E extends EventEmitter,
	N extends EventName<E, boolean>,
	G extends EventEmitterInferences<E> = EventEmitterInferences<E>
> = 
	| Union<{
		[I in keyof G]:
			AreEqual<N, AssertedProp<G[I], "name">> extends true
				? TransformListenerArgs<
					AssertedProp<G[I], "args">
				>
				: never
	}>
	| (N extends EventName<E, true>
		? never
		: Union<{
			[I in keyof G]:
				{} extends AssertedProp<G[I], "name">
					? never
					: N extends AssertedProp<G[I], "name">
						? TransformListenerArgs<
							AssertedProp<G[I], "args">
						>
						: never
		}>
	)
	| (E extends HTMLElement
		? AssertedProp<HTMLElementEventMap, N>
		: never);

type TransformListenerArgs<A> = 
	A extends any[]
		? A["length"] extends 0
			? never
			: A["length"] extends 1
				? {} extends A[0]
					? IsAny<A[0]> extends true
						? any
						: unknown
					: A[0]
				: A
		: never;

export type AssertedObservedValue<E, N> = 
	E extends EventEmitter
		? N extends EventName<E>
			? ObservedValue<E, N>
			: never
		: never;