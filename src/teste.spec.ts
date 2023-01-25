import { test, expect } from 'vitest';

test('Primeiro teste', () => {
    const a = 1;
    const b = 2;
    const soma = a + b;

    expect(soma).toBe(3);
});