import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useClass: {signInWithEmailAndPassword: (user: string, password: string) => {}}
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ("auth should return correctly", async () => {
    expect(await service.auth("user", "password")).not.toThrow();
  })
});
