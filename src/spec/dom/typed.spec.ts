import { DOMEventEmitter } from "../../package/types/dom";
import { EventName, AssertedObservedValue, EventEmitter } from "../../package";
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

type Tests<E extends EventEmitter = TypedDOMEmitter> = [
	AreEqual<
		ExpectedEventName,
		EventName<E>
	>,
	AreEqual<
		ExpectedStrictEventName,
		EventName<E, true>
	>,
	AreEqual<
		ExpectedObservedValue<"event-a">,
		AssertedObservedValue<E, "event-a">
	>,
	AreEqual<
		ExpectedObservedValue<"event-b">,
		AssertedObservedValue<E, "event-b">
	>
];

type Works = AssertTrue<Tests[number]>;