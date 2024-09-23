import { TestBed } from '@angular/core/testing';

import { ShowEntityService } from './show-entity.service';

describe('ShowEntityService', () => {
  let service: ShowEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
