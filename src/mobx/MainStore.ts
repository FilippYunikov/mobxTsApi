import {makeAutoObservable} from 'mobx';

import {API} from '../services';
import {quotesType} from '../services/apiTypes';

export class MainStore {
  quotes: quotesType = {};
  isFirstLoading: boolean = false;
  isQuotesLoading: boolean = false;
  isError: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchQuotes = () => {
    API.getQuotes()
      .then(response => (this.quotes = response))
      .catch(() => {
        this.isError = true;
        console.error('Error');
      })
      .finally(() => {
        this.isError = false;
      });
  };
}
