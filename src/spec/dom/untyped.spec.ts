import { DOMEventEmitter } from "../../package/types/dom";
import { EventName, AssertedObservedValue, EventEmitter, EventEmitterInferences } from "../../package";
import { AreEqual } from "../../shared/utils";
import { AssertTrue } from "../utils";

class UntypedDOMEmitter implements DOMEventEmitter{

	addEventListener(
		eventName: string,
		listener: (event: any) => void
	) {}

	removeEventListener(
		eventName: string,
		listener: (event: any) => void
	) {}

}

type ExpectedEventName = string;
type ExpectedStrictEventName = never;
type ExpectedObservedValue<T> = any;

type Tests<E extends EventEmitter = UntypedDOMEmitter> = [
	AreEqual<
		ExpectedEventName,
		EventName<E>
	>,
	AreEqual<
		ExpectedStrictEventName,
		EventName<E, true>
	>,
	AreEqual<
		ExpectedObservedValue<string>,
		AssertedObservedValue<E, string>
	>
];

type Works = AssertTrue<Tests[number]>;