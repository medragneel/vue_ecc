<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";

interface Cell {
    name: string;
    count: number;
    image: string;
    category: string;
}

interface State {
    cells: Cell[];
    total: number;
}

const store = useStore<State>();

const cells = computed(() => store.state.cells);
const total = computed(() => store.state.total);

const increment = (cell: Cell) => store.commit('increment', cell);
const decrement = (cell: Cell) => store.commit('decrement', cell);
const reset = () => store.commit('reset')


</script>

<template>
    <div class="main container">
        <br>
        <div class="total align-center btn btn-dark-outline">
            <h2>Counter: {{ total }}</h2>
        </div>
        <br />
        <br />
        <div class="grid">
            <div class="card ds-f d-col js-center al-center" v-for="cell in cells" :key="cell.name">
                <div class="card-title">
                    <img v-bind:src="cell.image" alt="" />
                </div>
                <b>{{ cell.name }}</b>
                <br />
                <div class="card-content ds-f js-center al-center g-2">
                    <button class="btn btn-dark-outline" @click="decrement(cell)">
                        -
                    </button>
                    <h1>{{ cell.count }}</h1>
                    <button class="btn btn-dark-outline" @click="increment(cell)">
                        +
                    </button>
                </div>
            </div>
        </div>
        <button class="reset btn btn-dark-outline" @click="reset">reset</button>
    </div>
</template>

<style>
img {
    width: 80px;
}

.reset {
    position: fixed;
    bottom: 20px;
    right: 20px
}
</style>
