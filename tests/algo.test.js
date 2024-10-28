import * as algos from "../index.js";

describe("Algos Tests", () => {
	const testCases = [
		{
			func: algos.multiply,
			name: "multiply",
			args: [4, 4],
			expected: 16,
		},
		{
			func: algos.getFirstElement,
			name: "getFirstElement",
			args: [[5, 6, 7]],
			expected: 5,
		},
		{
			func: algos.removeLastElement,
			name: "removeLastElement",
			args: [[5, 6, 7]],
			expected: [5, 6],
		},
		{
			func: algos.sumArray,
			name: "sumArray",
			args: [[5, 6, 7]],
			expected: 18,
		},
		{
			func: algos.reverseString,
			name: "reverseString",
			args: ["Dracula"],
			expected: "alucarD",
		},
		{
			func: algos.getMax,
			name: "getMax",
			args: [[5, 6, 7]],
			expected: 7,
		},
		{
			func: algos.getMin,
			name: "getMax",
			args: [[5, 6, 7]],
			expected: 5,
		},
		{
			func: algos.removeVowels,
			name: "removeVowels",
			args: ["Cerise"],
			expected: "Crs",
		},
		{
			func: algos.sortArray,
			name: "sortArray",
			args: [[6, 5, 7]],
			expected: [5, 6, 7],
		},
		{
			func: algos.getStringRotations,
			name: "getStringRotations",
			args: ["12345"],
			expected: ["23451", "34512", "45123", "51234", "12345"],
		},
	];

	testCases.forEach(({ func, name, args, expected }) => {
		if (func) {
			test(`${name} fonction`, () => {
				const result = func(...args);
				try {
					if (name === "getStringRotations") {
						expect(result.sort()).toEqual(expected.sort());
					} else {
						expect(result).toEqual(expected);
					}
				} catch (error) {
					throw new Error(
						`Erreur dans le test de la fonction ${name} avec les arguments : ${JSON.stringify(args)}; attendu : ${JSON.stringify(expected)}, mais reçu : ${JSON.stringify(result)}.`,
					);
				}
			});
		} else {
			test.skip(`${name} est non implémentée, test ignoré`, () => {});
		}
	});
});
