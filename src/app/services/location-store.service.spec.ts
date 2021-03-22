import { TestBed } from '@angular/core/testing';

import { LocationStoreService } from './location-store.service';
import {LoggerTestingModule} from 'ngx-logger/testing';

describe('LocationStoreService', () => {
  let service: LocationStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggerTestingModule]
    });
    service = TestBed.inject(LocationStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
