<template>
    <app-header/>
    <router-view/>
    <app-footer/>
</template>
<script>
    import Header from './header.vue'
    import Footer from './footer.vue'
    export default {
        name: "main",
        components:{
            'app-header':Header,
            'app-footer':Footer,
        }
    }
</script>

<style scoped></style>