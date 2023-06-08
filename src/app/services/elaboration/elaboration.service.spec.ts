import { TestBed } from '@angular/core/testing';

import { ElaborationService } from './elaboration.service';
import { ExternalExpr } from '@angular/compiler';

describe('ElaborationService', () => {
  let service: ElaborationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaborationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fromStringToArrayOfNumbers should create on array of numbers',()=>{
    expect(service.fromStringToArrayOfNumbers('uh 1 h 22 3')).toEqual([1,22,3])
  });

  it('filterAnomalies should create clamp array with top, bottom value',()=>{
    expect(service.filterAnomalies([1,23,100,-100,2,-5],50,-50)).toEqual([1,23,50,-50,2,-5])
  });

  it('keepEven should keep only even numbers', ()=>{
    const testElements = [[1,2,3,4], [2,6,8]]
    expect(testElements.map(a =>service.keepEven(a))).toEqual([[2, 4], [2,6,8]]);
  })

});
