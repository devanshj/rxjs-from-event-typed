import { NodeEventEmitter } from "../../package/types/node";
import { EventName, ObservedValue } from "../../package";
import { AssertTrue } from "../utils";
import { AreEqual } from "../../shared/utils";

class SomeType { private _ = "" }
const someSymbol = Symbol("foo");

class PartiallyMixtypedNodeEmitter implements NodeEventEmitter {

	addListener(
		eventName: string | symbol,
		listener: ((a0: number) => void) // it's number instead of ...args: any[]
	): void;

	addListener(
		eventName: "event-a",
		listener: (a0: number, a1: string) => void
	): void;

	addListener(
		eventName: typeof someSymbol,
		listener: (a0: SomeType) => void
	): void;

	addListener(
		eventName:
			| "event-a"
			| typeof someSymbol,
		listener:
			| ((a0: number) => void)
			| ((a0: number, a1: string) => void)
			| ((a0: SomeType) => void)
	) {}

	removeListener(
		eventName: string | symbol,
		listener: ((a0: number) => void)
	): void;

	removeListener(
		eventName: "event-a",
		listener: (a0: number, a1: string) => void
	): void;

	removeListener(
		eventName: typeof someSymbol,
		listener: (a0: SomeType) => void
	): void;

	removeListener(
		eventName:
			| "event-a"
			| typeof someSymbol,
		listener:
			| ((a0: number) => void)
			| ((a0: number, a1: string) => void)
			| ((a0: SomeType) => void)
	) {}

}

type ExpectedEventName =
	| "event-a"
	| typeof someSymbol
	| symbol
	| string;

type ExpectedStrictEventName =
	| "event-a"
	| typeof someSymbol;

type ExpectedObservedValue<T> =
	T extends "event-a" ? [number, string] :
	T extends typeof someSymbol ? SomeType :
	T extends string | symbol ? number :
	never;

type E = PartiallyMixtypedNodeEmitter;
type ActualEventName = EventName<E>;
type ActualStrictEventName = EventName<E, true>;
type ActualObservedValue<N extends EventName<E>> = ObservedValue<E, N>;

type Tests = [
	AreEqual<
		ExpectedEventName,
		ActualEventName
	>,
	AreEqual<
		ExpectedStrictEventName,
		ActualStrictEventName
	>,
	AreEqual<
		ExpectedObservedValue<"event-a">,
		ActualObservedValue<"event-a">
	>,
	AreEqual<
		ExpectedObservedValue<typeof someSymbol>,
		ActualObservedValue<typeof someSymbol>
	>,
	AreEqual<
		ExpectedObservedValue<string>,
		ActualObservedValue<string>
	>,
	AreEqual<
		ExpectedObservedValue<"non-existent-event">,
		ActualObservedValue<"non-existent-event">
	>
];

type Works = AssertTrue<Tests[number]>