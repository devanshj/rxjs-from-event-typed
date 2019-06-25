import { DOMEventEmitter } from "../../package/types/dom";
import { EventName, ObservedValue } from "../../package";
import { AssertTrue } from "../utils";
import { AreEqual } from "../../shared/utils";

class CustomEventA { private _ = "" }
class CustomEventB { private _ = "" }

class TypedDOMEmitter implements DOMEventEmitter{

	addEventListener(
		eventName: "event-a",
		listener: (event: CustomEventA) => void
	): void;

	addEventListener(
		eventName: "event-b",
		listener: (event: CustomEventB) => void
	): void;

	addEventListener(
		eventName:
			| "event-a"
			| "event-b",
		listener:
			| ((event: CustomEventA) => void)
			| ((event: CustomEventB) => void)
	) {}

	removeEventListener(
		eventName: "event-a",
		listener: (event: CustomEventA) => void
	): void;

	removeEventListener(
		eventName: "event-b",
		listener: (event: CustomEventB) => void
	): void;

	removeEventListener(
		eventName:
			| "event-a"
			| "event-b",
		listener:
			| ((event: CustomEventA) => void)
			| ((event: CustomEventB) => void)
	) {}
}

type ExpectedEventName =
	| "event-a"
	| "event-b";

type ExpectedStrictEventName =
	| "event-a"
	| "event-b";

type ExpectedObservedValue<T> =
	T extends "event-a" ? CustomEventA :
	T extends "event-b" ? CustomEventB :
	never;

type E = TypedDOMEmitter;
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
		ExpectedObservedValue<"event-b">,
		ActualObservedValue<"event-b">
	>
];

type Works = AssertTrue<Tests[number]>;