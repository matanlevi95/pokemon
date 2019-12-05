import Actions from "./actions.config";

const initialState = {
    userRegisterDetails: {
        messege: "",
        redirect: false
    },
    userLoginDetails: {
        messege: "",
        username: "",
        redirect: false,
        token: "",
        coins: 0,
        stamina: "",
        exp: "",
        pokemons: []
    }
}

export default function root(state = initialState, action: any) {

    switch (action.type) {
        case Actions.REGISTER: {
            const { user } = action.payload
            console.log(user);

            return {
                ...state,
                userRegisterDetails: user
            }
        }
        case Actions.LOGIN: {
            const { user } = action.payload
            return {
                ...state,
                userLoginDetails: user
            }
        }
        case Actions.LOGOUT: {
            return {
                ...state,
                userLoginDetails: {
                    messege: "",
                    username: "",
                    redirect: false,
                    token: "",
                    coins: 0,
                    pokemons: [],
                    exp: "",
                    stamina: ""
                }
            }
        }
        default: {
            return state
        }
    }
}