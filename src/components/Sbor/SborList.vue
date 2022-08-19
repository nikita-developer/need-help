<template>
    <ul class="sbor-list" v-for="(list, index) in $store.state.listsGroup" :key="list">
        <li class="sbor-list__item" v-for="item in list" :key="item.id">
            <span class="sbor-list__text">{{ item.name }}</span>
            <span class="sbor-list__icon" :class="{ 'sbor-list__icon_close': item.last, 'sbor-list__icon_arrow': !item.last }" @click="deleted(item, index)">
            </span>
        </li>
    </ul>
</template>

<script>
    export default {
        methods: {
            deleted(item, index) {
                if (item.last) {
                    this.$store.commit('deleteListsGroup', index)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sbor-list {
        list-style-type: none;
        display: flex;
        overflow: auto;

        &+& {
            margin-top: 10px;
        }

        &__item {
            display: flex;
            align-items: center;
            padding: 8px 10px;
            background-color: #FAFAFA;
            flex-shrink: 0;
            border-radius: 20px;

            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            &+&:not(:last-child) {
                border-radius: 0;
            }

            &:last-child {
                border-radius: 0 20px 20px 0;
            }

            &:first-child {
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }

            &:not(:first-child) {
                padding-left: 0;
            }
        }

        &__icon {
            width: 20px;
            height: 20px;
            background-size: 10px;
            background-repeat: no-repeat;
            background-position: center;
            flex-shrink: 0;
            margin-left: 10px;
            cursor: pointer;

            &_arrow {
                background-image: url("@/assets/media/sbor/arrow.svg");
            }

            &_close {
                background-image: url("@/assets/media/sbor/close.svg");
            }
        }

        &__text {
            font-size: 20px;
            color: #302F2D;
        }
    }

    @media (max-width: 768px) {
        .sbor-list__text {
            font-size: 14px;
        }
    }
</style>