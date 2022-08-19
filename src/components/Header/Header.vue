<template>
    <header class="header">
        <HeaderLogo></HeaderLogo>
        <HeaderUser></HeaderUser>
    </header>
</template>

<script>
import HeaderUser from './HeaderUser.vue';
import HeaderLogo from './HeaderLogo.vue';
    export default {
    components: { HeaderUser, HeaderLogo }
}
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #FAFAFA;
        padding: 40px 50px;
        border-bottom: 1px solid #E6E6E6;
    }

    @media (max-width: 768px) {
        .header {
            padding: 30px 15px;
        }
    }
</style>