import { NodeEventEmitter } from "../../package/types/node";
import { EventName, ObservedValue } from "../../package";
import { AssertTrue } from "../utils";
import { AreEqual } from "../../shared/utils";

class SomeType { private _ = "" }
const someSymbol = Symbol("foo");

class TypedNodeEmitter implements NodeEventEmitter {

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
			| ((a0: number, a1: string) => void)
			| ((a0: SomeType) => void)
	) {}

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
			| ((a0: number, a1: string) => void)
			| ((a0: SomeType) => void)
	) {}

}

type ExpectedEventName =
	| "event-a"
	| typeof someSymbol;

type ExpectedStrictEventName =
	| "event-a"
	| typeof someSymbol;

type ExpectedObservedValue<T> =
	T extends "event-a" ? [number, string] :
	T extends typeof someSymbol ? SomeType :
	never;

type E = TypedNodeEmitter;
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
	>
];

type Works = AssertTrue<Tests[number]>