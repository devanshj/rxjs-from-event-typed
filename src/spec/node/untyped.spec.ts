import { NodeEventEmitter } from "../../package/types/node";
import { EventName, ObservedValue } from "../../package";
import { AssertTrue } from "../utils";
import { AreEqual } from "../../shared/utils";

class UntypedNodeEmitter implements NodeEventEmitter {

	addListener(
		eventName: string | symbol,
		listener: (...args: any[]) => void
	) {}

	removeListener(
		eventName: string | symbol,
		listener: (...args: any[]) => void
	) {}

}

type ExpectedEventName =
	| symbol
	| string;

type ExpectedStrictEventName = never;

type ExpectedObservedValue<T> =
	T extends string | symbol ? any[] :
	never;

type E = UntypedNodeEmitter;
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
		ExpectedObservedValue<string | symbol>,
		ActualObservedValue<string | symbol>
	>
];

type Works = AssertTrue<Tests[number]>