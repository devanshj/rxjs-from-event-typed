import { EventEmitter, EventName, ObservedValue } from "./types/";
import { fromEvent as rxjsFromEvent, Observable, from } from "rxjs"
import { DOMEventEmitter, DOMEventListenerOptions } from "./types/dom/";
import { ChildProcess } from "child_process";

function fromEvent<
	E extends DOMEventEmitter,
	N extends  EventName<E>
>(
	eventSource: E,
	eventName: N, 
	options?: DOMEventListenerOptions
): Observable<ObservedValue<E, N>>;

function fromEvent<
	E extends Exclude<EventEmitter, DOMEventEmitter>,
	N extends EventName<E>
>(
	eventSource: E,
	eventName: N
): Observable<ObservedValue<E, N>>;

function fromEvent<
	E extends EventEmitter,
	N extends  EventName<E>
>(
	eventSource: E,
	eventName: N, 
	options?: DOMEventListenerOptions
): Observable<ObservedValue<E, N>> {
	return rxjsFromEvent(eventSource as any, eventName as any, options as any);
};


function fromEventStrict<
	E extends DOMEventEmitter,
	N extends  EventName<E, true>
>(
	eventSource: E,
	eventName: N,
	options?: DOMEventListenerOptions
): Observable<ObservedValue<E, N>>;

function fromEventStrict<
	E extends Exclude<EventEmitter, DOMEventEmitter>,
	N extends EventName<E, true>
>(
	eventSource: E,
	eventName: N
): Observable<ObservedValue<E, N>>;

function fromEventStrict<
	E extends EventEmitter,
	N extends EventName<E, true>
>(
	eventSource: E,
	eventName: N, 
	options?: DOMEventListenerOptions
): Observable<ObservedValue<E, N>> {
	return rxjsFromEvent(eventSource as any, eventName as any, options as any);
};

export { fromEvent, fromEventStrict };
export * from "./types";