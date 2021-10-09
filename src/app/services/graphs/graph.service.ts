import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Graph from "../../common/models/graph";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private fireStore: AngularFirestore) { }

  getGraphFromUser(userId: string) : Observable<Graph[]> {
    return this.fireStore.collection<Graph>("graphs", ref => ref.where('user', "==", userId)).valueChanges();
  }

}
