import HttpService from '../services/HttpService';


export interface CandidatesActionState {
  fetchingCandidatesState: boolean;
  candidates: Array<any>;
  candidatesMap: Map<string, any>;
  lastUpdated: number | null;
}

export interface CandidatesActionEvent {
  type: string;
  candidates: Array<any> | null;
  recievedAt: number | null;

}

export class CandidatesAction {
  static readonly REQUEST_CANDIDATES: string = 'REQUEST_CANDIDATES';
  static readonly RECEIVE_CANDIDATES: string = 'RECEIVE_CANDIDATES';

  requestCandidates(): CandidatesActionEvent {

    return {
      type: CandidatesAction.REQUEST_CANDIDATES,
      candidates: null,
      recievedAt: null
    }
  }

  receiveCandidates(resultsResponseCandidateList: Array<any>): CandidatesActionEvent {
    return {
      type: CandidatesAction.RECEIVE_CANDIDATES,
      candidates: resultsResponseCandidateList,
      recievedAt: Date.now()
    };
  }

  fetchCandidates(dispatch: any) {
    console.log('fetchSupplyChains dispatched')
    dispatch(this.requestCandidates())
    return HttpService.get(`https://my-json-server.typicode.com/workstep/react-challenge-data/candidates`,
      (resp: any) => {
        dispatch(this.receiveCandidates(resp));
      },
      (err: Error) => { console.log(err.message) });
  }
}
