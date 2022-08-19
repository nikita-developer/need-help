<template>
    <div class="sbor">
        <div class="sbor__box">
            <div class="sbor__title">Информация о сборе</div>
            <label class="label">
                <p class="label__text">Название сбора</p>
                <input type="text" class="field">
            </label>
        </div>
        <div class="sbor__box">
            <div class="sbor__title">Целевые группы</div>
            <div class="sbor__subtitle">Укажите, кому помогает ваша организация</div>
            <SborList v-if="$store.state.listsGroup.length"></SborList>
            <SborAdd></SborAdd>
        </div>
        <div class="sbor__footer">
            <button class="sbor__btn" @click="result">сохранить и продолжить</button>
        </div>
    </div>
</template>

<script>
import SborList from "./SborList.vue";
import SborAdd from "./SborAdd.vue";
    export default {
    data() {
        return {};
    },
    methods: {
        result() {
            let groups = [];
            this.$store.state.listsGroup.forEach(elem => {
                let item = [];
                elem.forEach(el => {
                    item.push(el.id);
                });
                groups.push(item);
            });
            console.log(groups);
        }
    },
    components: { SborList, SborAdd }
}
</script>

<style lang="scss" scoped>
    .sbor {
        border: 1px solid #E6E6E6;
        border-radius: 10px;
        padding: 50px 60px;

        &__title {
            margin-bottom: 50px;
            font-size: 30px;
        }

        &__subtitle {
            color: #545351;
            font-size: 20px;
            margin-bottom: 60px;
        }

        &__box {
            &+.sbor__box {
                margin-top: 60px;
            }
        }

        &__btn {
            background-color: #E65639;
            padding: 22px 40px 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #fff;
            border-width: 0;
            font-weight: 700;
            cursor: pointer;

            &:hover {
                background-color: #e54120;
            }
        }

        &__add {
            margin-bottom: 45px;
            margin-top: 60px;
        }
    }

    @media (max-width: 768px) {
        .sbor {
            padding-right: 30px;
            padding-left: 30px;

            &__title {
                font-size: 22px;
                margin-bottom: 20px;
            }

            &__btn {
                font-size: 12px;
                padding: 15px 25px;
            }
        }
    }
</style>