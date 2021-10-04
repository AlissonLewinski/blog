import { TestBed } from '@angular/core/testing';

import { PageTitleGuard } from './page-title.guard';

describe('PageTitleGuard', () => {
  let service: PageTitleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTitleGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
