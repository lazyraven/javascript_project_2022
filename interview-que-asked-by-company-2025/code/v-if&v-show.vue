<template>
    <div>
        <!-- v-if: element is created/destroyed -->
        <p v-if="isLoggedIn">Welcome back!</p>
        <p v-else>Please log in</p>

        <!-- v-show: element always in DOM, just hidden -->
        <p v-show="showTips">Here are some helpful tips...</p>

        <button @click="toggle">Toggle</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: false,
            showTips: true
        }
    },
    methods: {
        toggle() {
            this.isLoggedIn = !this.isLoggedIn;
            this.showTips = !this.showTips;
        }
    }
}
</script>
