import { reactive } from "vue";
import { createStore } from "vuex";

interface Cell {
    name: string;
    count: number;
    image: string,
    category: string
}

interface State {
    cells: Cell[];
    total: number;
}
const intialState: State = {
    cells: [
        { name: "Monocyte", count: 0, image: "src/assets/mono.d68cc6a2447145ddd102.png", category: "s" },
        { name: "Lymphocyte", count: 0, image: "src/assets/lym.a6faba81cc207c2c4c03.png", category: "s" },
        { name: "Eosinophile", count: 0, image: "src/assets/eo.8485a4172b6aeec1d24a.png", category: "s" },
        { name: "Promyelocyte", count: 0, image: "src/assets/Promyelocyte.png", category: "" },
        { name: "Pnn", count: 0, image: "src/assets/neutro.ebe38859a5a5925aaaea.png", category: "s" },
        { name: "Monoblaste", count: 0, image: "src/assets/monoblast.8a75e20bdecfcf879b64.png", category: "" },
        { name: "Blaste", count: 0, image: "src/assets/lym.a6faba81cc207c2c4c03.png", category: "" },
        { name: "Myelocyte", count: 0, image: "src/assets/myelocyte.f1bffcb411231cd7c51a.png", category: "" },
        { name: "Basophile", count: 0, image: "src/assets/baso.360d8e71d467a31ffbdb.png", category: "s" },
        { name: "Promonocyte", count: 0, image: "src/assets/promonocyte.d4ba100be6fe7dbb4d9b.png", category: "" },
        { name: "Myeloblaste", count: 0, image: "src/assets/myelo.0f8332a8c05c0ffc8f5d.png", category: "" },
        { name: "Erythroblaste", count: 0, image: "src/assets/ery.33b1c69d28c98ec68036.png", category: "" },
        { name: "reticulocyte", count: 0, image: "src/assets/reticulocyte.f53c4ff19ac690cb89e8.png", category: "" },
        { name: "hematie", count: 0, image: "src/assets/hematie.png", category: "" },
    ],
    total: 0
}

const state: State = reactive(intialState);
const storedState = localStorage.getItem("vuex-store")
if (storedState) {
    state.total = JSON.parse(storedState).total
    state.cells = JSON.parse(storedState).cells
}

const mutations = {
    increment(state: State, cell: Cell) {
        cell.count++;
        state.total++;
        saveState();
    },
    decrement(state: State, cell: Cell) {
        if (cell.count > 0) {
            cell.count--;
            state.total--;
            saveState();
        }
    },
    reset(state: State) {
        state.cells.forEach((cell) => {
            cell.count = 0;
        });
        state.total = 0;
        saveState();
    }
};
function saveState() {
    localStorage.setItem("vuex-store", JSON.stringify(state))
}


export default createStore<State>({
    state,
    mutations
});
