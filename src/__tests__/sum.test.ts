import { describe, expect, test } from 'vitest';
import { sum } from '../sum';

describe('sum', () => {
	test('should return correct sum value', () => {
		expect(sum(1, 2)).toEqual(3);
	});
});
