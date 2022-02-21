import { xName } from '../src/scripts/example.js';
import { arraySum } from '../src/scripts/arraySum.js';

describe('descripción general del fin de los tests que se vayan a hacer', () => {
    test('Descripción del test en concreto', () =>{
            expect(xName(1)).toBe(2);
    })
});

describe('Suma de arrays', () => {
    test('Suma este array', () =>{
        expect(arraySum([])).toBe(0);
    })
    test('Suma este array', () =>{
        expect(arraySum([1, 5.2, 4, 0, -1])).toBe(9.2);
    })
});