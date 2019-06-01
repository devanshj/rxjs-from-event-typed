import { AreEqual, AssertTrue } from "./utils";
import { ObservedValue, AssertedObservedValue } from "../package/types";

type A = typeof document.body;

class MyCustomEvent { foo = true };
class B {
	addListener(type: "b1", listener: (a0: string, a1: number) => void): void
	addListener(type: "b2", listener: (a0: MyCustomEvent, a1: number) => void): void
	addListener(type: "b3", listener: (a0: MyCustomEvent) => void): void
	addListener(type: string, listener: (...args: any[]) => void) {}

	removeListener(type: "b1", listener: (a0: string, a1: number) => void): void
	removeListener(type: "b2", listener: (a0: MyCustomEvent, a1: number) => void): void
	removeListener(type: "b3", listener: (a0: MyCustomEvent) => void): void
	removeListener(type: string, listener: (...args: any[]) => void) {}
}

type Tests = [
	AreEqual<ObservedValue<A, "click">, MouseEvent>,
	AreEqual<AssertedObservedValue<A, "foobar">, never>,

	AreEqual<ObservedValue<B, "b1">, [string, number]>,
	AreEqual<ObservedValue<B, "b2">, [MyCustomEvent, number]>,
	AreEqual<ObservedValue<B, "b3">, MyCustomEvent>
]

type Works = AssertTrue<Tests[number]>;