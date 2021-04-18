import { combineReducers } from 'redux';
import Utils from "../services/utils";

import {
  CandidatesAction,
  CandidatesActionEvent,
  CandidatesActionState
} from './RestActions';




const candidatesReducer = (state: CandidatesActionState = {
  fetchingCandidatesState: false,
  candidates: [],
  candidatesMap: new Map<string, any>(),
  lastUpdated: null
},
  action: CandidatesActionEvent): CandidatesActionState => {

  switch (action.type) {
    case CandidatesAction.REQUEST_CANDIDATES:
      return {
        ...state,
        fetchingCandidatesState: true,
        candidates: [],
        candidatesMap: new Map<string, any>()
      }
    case CandidatesAction.RECEIVE_CANDIDATES:
      return {
        ...state,
        fetchingCandidatesState: false,
        candidates: (action.candidates) ? action.candidates : [],
        candidatesMap: Utils.arrayToObject((action.candidates) ? action.candidates : []),
        lastUpdated: action.recievedAt
      }

    default:
      return state
  }
}


export default combineReducers({
  candidatesReducer,
  steps: (state = []) => state,
})
