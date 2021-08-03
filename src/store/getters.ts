import { GetterTree } from "vuex";
import { State } from "@/store/state";

export type Getters<S = State> = {
  // name(state: S): string;
  // socketUserId(state: S): string;
  // users(state: S): User[] | [];
  // id(state: S): string;
  // roomSettingsViewBalance(state: S): boolean;
};

export const getters: GetterTree<State, State> & Getters = {};
