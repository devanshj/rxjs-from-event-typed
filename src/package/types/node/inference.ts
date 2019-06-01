import { NodeEventEmitterGeneric } from "./generic";

export type NodeEventEmitterInferences<T> = 
	T extends
		NodeEventEmitterGeneric<
			infer N0, infer A0,
			infer N1, infer A1,
			infer N2, infer A2,
			infer N3, infer A3,
			infer N4, infer A4,
			infer N5, infer A5,
			infer N6, infer A6,
			infer N7, infer A7,
			infer N8, infer A8,
			infer N9, infer A9,
			infer N10, infer A10,
			infer N11, infer A11>
				? [
					{ "name": N0, "args": A0 },
					{ "name": N1, "args": A1 },
					{ "name": N2, "args": A2 },
					{ "name": N3, "args": A3 },
					{ "name": N4, "args": A4 },
					{ "name": N5, "args": A5 },
					{ "name": N6, "args": A6 },
					{ "name": N7, "args": A7 },
					{ "name": N8, "args": A8 },
					{ "name": N9, "args": A9 },
					{ "name": N10, "args": A10 },
					{ "name": N11, "args": A11 }
				]
				: never