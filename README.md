# rxjs-from-event-typed

## Installation

`npm i rxjs-from-event-typed`

## Features / Comparison with original `fromEvent`

### Observable inferences

```typescript
import { fromEvent } from "rxjs-from-event-typed"
import { untypedFromEvent } from "rxjs"

untypedFromEvent(document.body, "click");
// Observable<Event>

fromEvent(document.body, "click");
// Observable<MouseEvent>

class MyCustomEvent { something = true };
const myEventEmitter = new class MyEventEmitter {
    addListener(type: "foo", listener: (a0: string, a1: number) => void): void
    addListener(type: "bar", listener: (a0: MyCustomEvent, a1: number) => void): void
    addListener(type: "baz", listener: (a0: MyCustomEvent) => void): void
    addListener(type: string, listener: (...args: any[]) => void) {}

    removeListener(type: "foo", listener: (a0: string, a1: number) => void): void
    removeListener(type: "bar", listener: (a0: MyCustomEvent, a1: number) => void): void
    removeListener(type: "baz", listener: (a0: MyCustomEvent) => void): void
    removeListener(type: string, listener: (...args: any[]) => void) {}
}

untypedFromEvent(myEventEmitter, "foo");
untypedFromEvent(myEventEmitter, "bar");
untypedFromEvent(myEventEmitter, "baz");
// Observable<{}> from all of them

fromEvent(myEventEmitter, "foo");
// Observable<[string, number]>

untypedFromEvent(myEventEmitter, "bar");
// Observable<[MyCustomEvent, number]>

untypedFromEvent(myEventEmitter, "baz");
// Observable<MyCustomEvent>
```

### Error if event name doesn't exist

```typescript
import { fromEvent } from "rxjs-from-event-typed"
import { untypedFromEvent } from "rxjs"

untypedFromEvent(document.body, "nope");
// no error

fromEvent(document.body, "nope");
// error

untypedFromEvent(myEventEmitter, "nope");
untypedFromEvent(myEventEmitter, "nope");
untypedFromEvent(myEventEmitter, "nope");
// no errors
// (myEventEmitter from above)

fromEvent(myEventEmitter, "nope");
fromEvent(myEventEmitter, "nope");
fromEvent(myEventEmitter, "nope");
// errors
```

Some more minor features will update :sleeping::grimacing:

## Todos

- Add tests
- Support for array-like of event emitters as event source (eg NodeList, etc)