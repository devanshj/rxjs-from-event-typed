import { DOMEventEmitter } from "../../package/types/dom";
import { EventName, AssertedObservedValue, EventEmitter } from "../../package";
import { AssertTrue } from "../utils";
import { AreEqual } from "../../shared/utils";

class CustomEventA { private _ = "" }
class CustomEventB { private _ = "" }

class MixtypedDOMEmitter implements DOMEventEmitter{

	addEventListener(
		eventName: string,
		listener: (...args: any[]) => void
	): void;

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
		eventName: string,
		listener: (...args: any[]) => void
	): void;

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
	| "event-b"
	| string;

type ExpectedStrictEventName =
	| "event-a"
	| "event-b";

type ExpectedObservedValue<T> =
	T extends "event-a" ? CustomEventA :
	T extends "event-b" ? CustomEventB :
	T extends string ? any :
	never;


type Tests<E extends EventEmitter = MixtypedDOMEmitter> = [
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
	>,
	AreEqual<
		ExpectedObservedValue<string>,
		AssertedObservedValue<E, string>
	>
];

type Works = AssertTrue<Tests[number]>
