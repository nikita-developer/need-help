<template>
    <div class="sbor-add sbor__add">
        <ul class="sbor-add__list" v-if="isOpen">
            <li class="sbor-add__item sbor-add__item_icon" @click="nextItem(item)" v-for="item in dataGroups" :key="item.id">{{ item.name }}</li>
        </ul>
        <button class="sbor-add__btn" @click="showList">Выбрать еще</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: [],
                dataGroups: [],
                isOpen: false,
            }
        },
        methods: {
            nextItem(item) {
                if (item.groups.length) {
                    this.dataGroups = [...item.groups]
                    this.info.push({ id: item.id, name: item.name })
                } else {
                    this.dataGroups = [...this.$store.state.groups]
                    this.info.push({ id: item.id, name: item.name, last: true })
                    this.isOpen = false
                    this.$store.commit('styleListGroup', this.info)
                    this.info = []
                }
            },
            showList() {
                this.isOpen = !this.isOpen
            }
        },
        mounted() {
            this.dataGroups = [...this.$store.state.groups]
        }
    }
</script>

<style lang="scss" scoped>
    .sbor-add {
        position: relative;

        &__btn {
            padding-left: 60px;
            background-image: url("@/assets/media/sbor/add.svg");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 40px;
            background-color: transparent;
            min-height: 40px;
            font-size: 20px;
            color: #302F2D;
            cursor: pointer;
            border: 0;
        }

        &__list {
            list-style-type: none;
            position: absolute;
            bottom: calc(100% + 10px);
            left: 0;
            background-color: #fff;
            border: 1px solid #E6E6E6;
            border-radius: 5px;
        }

        &__item {
            padding: 15px 20px;
            font-size: 17px;
            color: #302F2D;
            cursor: pointer;

            &:hover {
                background-color: #FAFAFA;
            }

            &_icon {
                position: relative;
                padding-right: 60px;

                &::before {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    content: '';
                    background-image: url('@/assets/media/sbor/list-arrow.svg');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 10px;
                }
            }
        }
    }
</style>