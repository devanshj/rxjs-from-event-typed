import { DOMEventEmitter } from "../package/types/dom";
import { AssertTrue, FailingTests } from "./utils";
import { AreEqual } from "../shared/utils";
import { EventName, ObservedValue, AssertedObservedValue } from "../package/types";

type Tests = {

	/* ---------------------------- */
	/* EventTarget */

	"EventTarget should extend DOMEventEmitter":
		AreEqual<
			EventTarget extends DOMEventEmitter ? true : false,
			true
		>,

	"If EventEmitter is EventTarget, EventName should be string":
		AreEqual<
			EventName<EventTarget>,
			string
		>,

	"If EventEmitter is EventTarget, EventName should be never in strict mode":
		AreEqual<
			EventName<EventTarget, true>,
			never
		>,

	"If EventEmitter is EventTarget and EventName is string, ObservedValue should be Event":
		AreEqual<
			ObservedValue<EventTarget, string>,
			Event
		>,



	/* ---------------------------- */
	/* HTMLElement */

	"HTMLElement should extend DOMEventEmitter":
		AreEqual<
			HTMLElement extends DOMEventEmitter ? true : false,
			true
		>,

	"If EventEmitter is HTMLElement, 'click' should be an EventName":
		AreEqual<
			"click" extends EventName<HTMLElement> ? true : false,
			true
		>,

	"If EventEmitter is HTMLElement and EventName is 'click', ObservedValue should be MouseEvent":
		AreEqual<
			ObservedValue<HTMLElement, "click">,
			MouseEvent
		>,

	"If EventEmitter is HTMLElement and EventName is string, ObservedValue should be Event":
		AreEqual<
			ObservedValue<HTMLElement, string>,
			Event
		>,


	/* ---------------------------- */
	/* TypedEventEmitter */

	"TypedEventEmitter should extend DOMEventEmitter":
		AreEqual<
			TypedEventEmitter extends DOMEventEmitter ? true : false,
			true
		>,
		
	"If EventEmitter is TypedEventEmitter, 'my-custom-event' should be an EventName":
		AreEqual<
			EventName<TypedEventEmitter>,
			"my-custom-event"
		>,

	"If EventEmitter is TypedEventEmitter and EventName is 'my-custom-event', ObservedValue should be MyCustomEvent":
		AreEqual<
			ObservedValue<TypedEventEmitter, "my-custom-event">,
			MyCustomEvent
		>,

	"If EventEmitter is TypedEventEmitter and EventName is string, ObservedValue should be never":
		AreEqual<
			AssertedObservedValue<TypedEventEmitter, string>,
			never
		>,
		
	/* ---------------------------- */
	/* UntypedEventEmitter */

	"UntypedEventEmitter should extend DOMEventEmitter":
		AreEqual<
			UntypedEventEmitter extends DOMEventEmitter ? true : false,
			true
		>,

	
	"If EventEmitter is UntypedEventEmitter, EventName should be string":
		AreEqual<
			EventName<UntypedEventEmitter>,
			string
		>,
	

	"If EventEmitter is UntypedEventEmitter, EventName should be never in strict mode":
		AreEqual<
			EventName<UntypedEventEmitter, true>,
			never
		>,

	"If EventEmitter is UntypedEventEmitter and EventName is string, ObservedValue should be unknown":
		AreEqual<
			ObservedValue<UntypedEventEmitter, string>,
			unknown
		>,

		
	/* ---------------------------- */
	/* MixTypedEventEmitter */

	"MixTypedEventEmitter should extend DOMEventEmitter":
		AreEqual<
		MixTypedEventEmitter extends DOMEventEmitter ? true : false,
			true
		>,

	"If EventEmitter is MixTypedEventEmitter, 'my-custom-event' should be an EventName":
		AreEqual<
			"my-custom-event" extends EventName<MixTypedEventEmitter> ? true : false,
			true
		>,

	"If EventEmitter is MixTypedEventEmitter, string should be an EventName":
		AreEqual<
			string extends EventName<MixTypedEventEmitter> ? true : false,
			true
		>,

		
	"If EventEmitter is MixTypedEventEmitter, EventName should be 'my-custom-event' in strict mode":
		AreEqual<
			EventName<MixTypedEventEmitter, true>,
			"my-custom-event"
		>,


	"If EventEmitter is MixTypedEventEmitter and EventName is 'my-custom-event', ObservedValue should be MyCustomEvent":
		AreEqual<
			ObservedValue<MixTypedEventEmitter, "my-custom-event">,
			MyCustomEvent
		>,

	"If EventEmitter is MixTypedEventEmitter and EventName is string, ObservedValue should be unknown":
		AreEqual<
			ObservedValue<MixTypedEventEmitter, string>,
			unknown
		>,
}

type Works = AssertTrue<Tests[keyof Tests]>;
type Failing = FailingTests<Tests>;


type MyCustomEvent = {
	foo: true
};

interface TypedEventEmitter {
	addEventListener(
		eventName: "my-custom-event",
		listener: (event: MyCustomEvent) => void
	): void;

	removeEventListener(
		eventName: "my-custom-event",
		listener: (event: MyCustomEvent) => void
	): void;
}

interface UntypedEventEmitter {
	addEventListener(
		eventName: string,
		listener: Function
	): void;

	removeEventListener(
		eventName: string,
		listener: Function
	): void;
}

interface MixTypedEventEmitter {
	addEventListener(
		eventName: string,
		listener: Function
	): void;

	addEventListener(
		eventName: "my-custom-event",
		listener: (event: MyCustomEvent) => void
	): void;

	removeEventListener(
		eventName: string,
		listener: Function
	): void;

	removeEventListener(
		eventName: "my-custom-event",
		listener: (event: MyCustomEvent) => void
	): void;
}