import { sum, screamify } from '../practice'; 

describe('sum', () => {
  test('adds the two inputs together', () => {
    expect(sum(1, 2)).toEqual(3);
  }); 
}); 


describe('screamify', () => {
  test('changes string to uppercase', () => {
    expect(screamify('cat')).toEqual('CAT'); 
  });
}); 