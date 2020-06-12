<template>
    <app-main></app-main>
</template>
<script>
    import Main from '@components/main'
    import './common.less'
    export default {
        name:'app',
        components: {
            'app-main':Main,
        },
    }
</script>