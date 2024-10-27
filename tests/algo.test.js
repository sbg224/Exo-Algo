import * as algos from "../index.js";

describe('Algos Tests', () => {
    const testCases = [
        {
            func: algos.multiply,
            name: 'multiply',
            args: [4, 4],
            expected: 16
        },
        {
            func: algos.add,
            name: 'add',
            args: [2, 3],
            expected: 5
        }
    ];


    testCases.forEach(({ func, name, args, expected }) => {
        
        if (func) {
            const result = func(...args);
            test(`${name} fonction`, () => {
                expect(result).toBe(expected);
            });

            if (result !== expected) {
                throw (`Erreur le test essaye la fonction ${name} avec les arguments de test: ${args.join(', ')}; attendu ${expected}, mais reçu ${result}.`);
            }
        } else {
            test.skip(`${name} est non implémentée, test ignoré`, () => {});
        }
    });
});