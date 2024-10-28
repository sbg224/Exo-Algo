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
        {
			func: algos.incrementArray,
			name: "incrementArray",
			args: [[5, 6, 7]],
			expected: [6, 7, 8],
		},
        {
			func: algos.getLengths,
			name: "getLengths",
			args: [["Vive","le","poulet"]],
			expected: [4, 2, 6],
		},
        {
			func: algos.getFirstLetters,
			name: "getFirstLetters",
			args: [["Vive","le","poulet"]],
			expected: ["V", "l", "p"],
		},
        {
			func: algos.getLastLetters,
			name: "getLastLetters",
			args: [["Vive","le","poulet"]],
			expected: ["e", "e", "t"],
		},
        {
			func: algos.filterLongStrings,
			name: "filterLongStrings",
			args: [["Vive","le","poulet","et","les","sardines"]],
			expected: ["poulet", "sardines"],
		},
        {
			func: algos.snake_case,
			name: "snake_case",
			args: ["Je_serai_tenté_de_te_donner_un_dé_à_coudre"],
			expected: "Je serai tenté de te donner un dé à coudre",
		},
        {
			func: algos.mergeArrays,
			name: "mergeArrays",
			args: [["Vive","le","poulet"] ,["et","les","sardines"]],
			expected: ["Vive", "le", "poulet", "et", "les", "sardines"],
		},
        {
			func: algos.filterStringsWithE,
			name: "filterStringsWithE",
			args: [["Veau" , "Poussin" , "Ornithorynque", "Loutre"]],
			expected: ["Veau", "Ornithorynque", "Loutre"],
		},
        {
			func: algos.filterAndSortEvenNumbers,
			name: "filterAndSortEvenNumbers",
			args: [[2,7,8,9,4,1,3,7,5,12]],
			expected: [2,4,8,12],
		},
        {
			func: algos.findShort,
			name: "findShort",
			args: ["Ce n'est rien de mourir, c'est affreux de ne pas vivre"],
			expected: 2,
		},
        {
			func: algos.anagram,
			name: "anagram",
			args: ["manoir","romain"],
			expected: true,
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
