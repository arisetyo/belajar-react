import {assert} from 'chai';
import utils from './utils';

const {equal} = assert;

describe('utils tests', () => {

	it('should add params', () => {
		const expected = 4
		const result = utils.penjumlahan(2, 2);

		equal(result, expected);
	})

	it('should multiply params', () => {
		const expected = 100
		const result = utils.perkalian(4, 25);

		equal(result, expected);
	})

})