import { DOMEventEmitter, DOMEventEmitterInferences } from "./dom";
import { Union, IsStringLiteral, AssertedProp, IsSymbolLiteral } from "./utils";
import { AreEqual, IsAny } from "../../shared/utils";
import { NodeEventEmitter, NodeEventEmitterInferences } from "./node";
import { JQueryEventEmitter, JQueryEventEmitterInferences } from "./jquery";

export type EventEmitter = 
	| DOMEventEmitter
	| JQueryEventEmitter
	| NodeEventEmitter;

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
			E,
			S
		>
	}>

	| (E extends HTMLElement
		? keyof HTMLElementEventMap
		: never);

type TransformEventName<N, E extends EventEmitter, S extends boolean> = 
	S extends true
		? (
			| IsStringLiteral<N>
			| (E extends NodeEventEmitter ? IsSymbolLiteral<N> : never)
		) extends true
			? N
			: never
		: Extract<N, 
			| string
			| (E extends NodeEventEmitter ? symbol : never)
		>;



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