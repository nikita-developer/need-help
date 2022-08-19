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
            <ul class="sbor-list" v-for="(list, index) in fullList" :key="index">
                <li class="sbor-list__item" v-for="item in fullList[index]" :key="item.id">
                    <span class="sbor-list__text">{{ item.name }}</span>
                    <span class="sbor-list__icon" :class="{ 'sbor-list__icon_close': item.last, 'sbor-list__icon_arrow': !item.last }">
                    </span>
                </li>
            </ul>
            <div class="sbor-add sbor__add">
                <ul class="sbor-add__list">
                    <li class="sbor-add__item sbor-add__item_icon" v-for="item in thisList" :key="item.id" @click="nextList(item)">
                        {{ item.name }}
                    </li>
                </ul>
                <button class="sbor-add__btn" @click="openList">Выбрать еще</button>
            </div>
        </div>
        <div class="sbor__footer">
            <button class="sbor__btn" @click="success">сохранить и продолжить</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
                group: [],
                thisList: [],
                fullList: [],
                groups: [
                    {
                        id: 1,
                        name: "Дети",
                        groups: [
                            {
                                id: 2,
                                name: "Имеющие редкие заболевания",
                                groups: [
                                    {
                                        id: 3,
                                        name: "Spina Bifida",
                                        groups: [],
                                    },
                                    {
                                        id: 4,
                                        name: "Буллёзный эпидермолиз",
                                        groups: [],
                                    },
                                ],
                            },
                            {
                                id: 5,
                                name: "С инвалидностью",
                                groups: [],
                            },
                        ],
                    },
                    {
                        id: 6,
                        name: "Профессиональные сообщества",
                        groups: [],
                    },
                ],
            };
        },
        methods: {
            openList() {
                this.thisList = [];
                this.groups.forEach(elem => {
                    this.thisList.push(elem);
                });
            },
            nextList(item) {
                if (item.groups.length) {
                    this.thisList = [];
                    item.groups.forEach(elem => {
                        this.thisList.push(elem);
                    });
                    this.group.push({
                        id: item.id,
                        name: item.name,
                        groups: item.groups,
                    });
                }
                else {
                    this.group.push({
                        id: item.id,
                        name: item.name,
                        groups: item.groups,
                        last: true
                    });
                    this.thisList = [];
                    this.fullList.push(this.group);
                    this.group = [];
                }
            },
            success() {
                let groups = [];
                this.fullList.forEach(elem => {
                    let item = [];
                    elem.forEach(el => {
                        item.push(el.id);
                    });
                    groups.push(item);
                });
                console.log(groups);
            }
        },
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

    .label {
        &__text {
            font-size: 20px;
            color: #302F2D;
            margin-bottom: 20px;
        }
    }

    .field {
        width: 100%;
        background-color: #FAFAFA;
        border: 1px solid #E6E6E6;
        padding: 13px 10px;
    }

    @media (max-width: 768px) {
        .section {
            padding-right: 15px;
            padding-left: 15px;

            &__title {
                font-size: 30px;
            }
        }

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

        .sbor-list__text {
            font-size: 14px;
        }
    }
</style>