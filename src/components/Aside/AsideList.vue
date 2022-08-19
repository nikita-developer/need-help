<template>
    <ul class="aside-list">
        <li class="aside-list__item">
            <a href="" class="aside-list__link"><img src="@/assets/media/aside/panel.svg" alt="">Панель управления</a>
        </li>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .aside-list {
        list-style-type: none;

        &__link {
            display: flex;
            align-items: center;
            color: #302F2D;
            font-size: 17px;
            text-decoration: none;
        }
    }
</style>