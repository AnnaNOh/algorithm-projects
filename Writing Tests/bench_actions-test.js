import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';
import { RECEIVE_BENCH } from '../bench_actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('receiveBenches should create an action to receive benches', () => {
    // refer to https://redux.js.org/docs/recipes/WritingTests.html 
    const bench = { id: 1, description: "best!", lat: 1.2, lng: 3.4 };
    const expectedAction = {
      type: RECEIVE_BENCH, 
      bench 
    }; 

    expect(actions.receiveBench(bench)).toEqual(expectedAction); 

  }); 
});

describe('async actions', () => {

  test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
    // REFER TO REDUX TESTS DOCS
    // Set up expectedActions:
    // Your code here

    // don't care if ApiUtil.fetchBenches actually works (unit test, we don't want outside functions to affect our tests)
    // jest.fn will take the place of ApiUtil.fetchBenches 
    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
    });

    const store = mockStore({ benches: {} });
    const expectedActions = {
      type: actions.RECEIVE_BENCHES,
      benches: testBenches
    }; 

    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions); 
    });
  });
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });