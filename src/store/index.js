import {createStore} from 'vuex'

export default createStore({
    state: {
        listsGroup: [],
        groups: [
            {
                id: 1,
                name: "Дети",
                groups: [{
                        id: 2,
                        name: "Имеющие редкие заболевания",
                        groups: [{
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
    },
    mutations: {
        styleListGroup (state, info) {
            state.listsGroup.push(info)
        },
        deleteListsGroup(state, index) {
            state.listsGroup.splice(index, 1)
        }
    },
})