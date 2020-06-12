<template>
    <div class="main">
        <app-header/>
        <router-view/>
        <app-footer/>
    </div>
</template>
<script>
    import Header from '@components/header'
    import Footer from '@components/footer'
    export default {
        name: "main",
        components:{
            'app-header':Header,
            'app-footer':Footer,
        }
    }
</script>

<style scoped></style>