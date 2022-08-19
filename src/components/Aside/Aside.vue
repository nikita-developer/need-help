<template>
    <aside class="aside" :class="{ 'show': aside }">
        <div class="aside__open" @click="aside = !aside"></div>
        <AsideList></AsideList>
    </aside>
</template>

<script>
import AsideList from './AsideList.vue';
    export default {
    components: { AsideList }
}
</script>

<style lang="scss" scoped>
    .aside {
        flex-shrink: 0;
        width: 360px;
        background-color: #FAFAFA;
        border-right: 1px solid #E6E6E6;
        padding: 50px 40px;

        &__open {
            display: block;
        }
    }

    @media (max-width: 1280px) {
        .aside {
            position: absolute;
            top: 0;
            bottom: 0;
            z-index: 5;
            transition: transform .3s;

            &.show {
                transform: translateX(-100%);
            }

            &__open {
                display: block;
                position: absolute;
                top: 50%;
                left: 100%;
                width: 20px;
                height: 100px;
                border-top: 1px solid #E6E6E6;
                border-right: 1px solid #E6E6E6;
                border-bottom: 1px solid #E6E6E6;
                background-color: #FAFAFA;
                transform: translateY(-50%);
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        .aside {
            width: 240px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }
</style>