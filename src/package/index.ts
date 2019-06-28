import { EventName, ObservedValue, EventEmitterWithoutOptions, EventEmitterWithOptions } from "./types/";
import { fromEvent, Observable } from "rxjs"
import { DOMEventListenerOptions } from "./types/dom/";

type FromEmitter = {
	<E extends EventEmitterWithoutOptions>
		(emitter: E):
			{
				event
					<N extends EventName<E>>
					(eventName: N):
						Observable<ObservedValue<E, N>>

				eventStrict
					<N extends EventName<E, true>>
					(eventName: N):
						Observable<ObservedValue<E, N>>
			}

	<E extends EventEmitterWithOptions>
		(emitter: E):
			{
				event
					<N extends EventName<E>>
					(eventName: N, options?: DOMEventListenerOptions):
						Observable<ObservedValue<E, N>>

				eventStrict
					<N extends EventName<E, true>>
					(eventName: N, options?: DOMEventListenerOptions):
						Observable<ObservedValue<E, N>>
			}
}

export const fromEmitter =
	((emitter: any) =>
		(eventName: any, options?: any) =>
			fromEvent(emitter, eventName, options)
	) as unknown as FromEmitter;

export * from "./types";