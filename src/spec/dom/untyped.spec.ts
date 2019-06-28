import { DOMEventEmitterWithoutOptions } from "../../package/types/dom";
import { EventName, ObservedValue } from "../../package";
import { AreEqual } from "../../shared/utils";
import { AssertTrue } from "../utils";

class UntypedDOMEmitter implements DOMEventEmitterWithoutOptions {

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

type E = UntypedDOMEmitter;
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
		ExpectedObservedValue<string>,
		ActualObservedValue<string>
	>
];

type Works = AssertTrue<Tests[number]>;