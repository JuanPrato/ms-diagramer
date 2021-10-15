import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Graph from "../../common/models/graph";
import {Observable} from "rxjs";
import {Interaction} from "../../common/models/interaction";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private fireStore: AngularFirestore, private auth: AuthService) {}

  getGraphFromUser(userId: string) : Observable<Graph[]> {
    return this.fireStore.collection<Graph>("graphs", ref => ref.where('user', "==", userId)).valueChanges();
  }

  async addGraphToUser(userId: string, graph: string) {
      const graphCreated = await this.fireStore.collection<Graph>("graphs").add({
        name: graph,
        user: userId
      } as Graph);

      return await graphCreated.update({
        id: graphCreated.id
      });
  }

  getGraphData(graphId: string) : Observable<Graph | undefined> {
    return this.fireStore.collection<Graph>("graphs").doc(graphId).valueChanges();
  }

  getInteractionsFromAGraph(graphId: string) {
    return this.fireStore.collection<Graph>("graphs").doc(graphId).collection<Interaction>("interactions").valueChanges();
  }

  async addStepToGraph(graphId: string, stepNumber: number) {
    try {
      const user = await this.auth.getCurrentUser();
      if (!user) return;

      const i = await this.fireStore.collection("graphs").doc(graphId).collection<Interaction>("interactions")
        .add({
          id: "",
          graph: graphId,
          step: stepNumber
        });
      await i.update({
        id: i.id
      });
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }
}
