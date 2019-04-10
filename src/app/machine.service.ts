import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Machine } from './DTO/Machine';
import { MACHINES } from '../assets/mocks/mock-machines';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor() { }

  getMachines(): Observable<Machine[]> {
    return of(MACHINES);
  }
}
