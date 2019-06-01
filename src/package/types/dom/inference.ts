import { DOMEventEmitterGeneric } from "./generic";

export type DOMEventEmitterInferences<T> = 
	T extends
		DOMEventEmitterGeneric<
			infer N0, infer E0,
			infer N1, infer E1,
			infer N2, infer E2,
			infer N3, infer E3,
			infer N4, infer E4,
			infer N5, infer E5,
			infer N6, infer E6,
			infer N7, infer E7,
			infer N8, infer E8,
			infer N9, infer E9,
			infer N10, infer E10,
			infer N11, infer E11>
				? [
					{ "name": N0, "args": [E0] },
					{ "name": N1, "args": [E1] },
					{ "name": N2, "args": [E2] },
					{ "name": N3, "args": [E3] },
					{ "name": N4, "args": [E4] },
					{ "name": N5, "args": [E5] },
					{ "name": N6, "args": [E6] },
					{ "name": N7, "args": [E7] },
					{ "name": N8, "args": [E8] },
					{ "name": N9, "args": [E9] },
					{ "name": N10, "args": [E10] },
					{ "name": N11, "args": [E11] }
				]
				: never;