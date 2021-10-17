import { TestBed } from '@angular/core/testing';

import { FlightappserviceService } from './flightappservice.service';

describe('FlightappserviceService', () => {
  let service: FlightappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
