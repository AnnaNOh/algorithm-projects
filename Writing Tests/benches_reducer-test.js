import BenchesReducer from '../benches_reducer';
import { testBenches } from '../../testUtil/bench_helper';
import * as BenchActions from '../../actions/bench_actions';

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/

// actions at the end of the day are objects so passing in an empy object is ok
// javascript, undefined means you aren't passing in anything for the state 
describe('BenchesReducer', () => {
  test('should initialize with an empty object as the default state', () => {
    expect(BenchesReducer(undefined, {})).toEqual({}); 
  });

  describe('handling the RECEIVE_BENCHES action', () => {
    let action;

    beforeEach(() => {
      // Set up the action that will be passed into the reducer:
      action = {
        type: BenchActions.RECEIVE_BENCHES,
        benches: testBenches, 
      }; 
    });

    test('should replace the state with the action\'s benches', () => {
      const state = BenchesReducer(undefined, action); 
      expect(state).toEqual(testBenches); 
    });

    test('should not modify the old state', () => {
      let oldState = { 1: 'oldState' };
      BenchesReducer(oldState, action); 
      expect(oldState).toEqual({ 1: 'oldState' });
    });
  });
});
