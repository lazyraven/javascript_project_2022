<!-- 2. Example Code: Counter Component -->
<template>
    <div>
        <p>Count : {{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// reactive state
const count = ref(0)

// method
const increment = () => {
    count.value++
}

</script>

<!-- We use ref(0) to make count reactive.
Access value with .value.
The setup() (or <script setup>) is the entry point for Composition API. -->