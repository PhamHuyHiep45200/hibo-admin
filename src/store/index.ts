// src/store/index.ts
import { createStore } from "vuex";
import headerModule from "./header";

const store = createStore({
  modules: {
    header: headerModule,
  },
});

export default store;
