/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/tasks.ts
import { Module } from "vuex";
import RootState from "./rootState";

interface VisibleModal {
  visibleFlagModal: boolean;
}

const headerModule: Module<VisibleModal, RootState> = {
  state: {
    visibleFlagModal: false,
  },
  mutations: {
    handleOpenMenuHeader(state: VisibleModal, stateModal: boolean) {
      state.visibleFlagModal = stateModal;
    },
  },
  actions: {
    handleOpenMenuHeader({ commit }, stateModal: boolean) {
      commit("handleOpenMenuHeader", stateModal);
    },
  },
  getters: {
    getVisibleFlagModal(state: VisibleModal) {
      return state.visibleFlagModal;
    },
  },
};

export default headerModule;
