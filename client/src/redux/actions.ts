import Actions from "./actions.config";
import { registerService, loginService } from "./services"

export const registerSuccess = (user: any) => {
    return {
        type: Actions.REGISTER,
        payload: { user }
    }
}

export const register = (user: any) => {
    return async (dispatch: any) => {
        const data = await registerService(user)
        dispatch(registerSuccess(data))
    }
}

export const loginSuccess = (user: any) => {
    return {
        type: Actions.LOGIN,
        payload: { user }
    }
}

export const login = (user: any) => {
    return async (dispatch: any) => {
        const data = await loginService(user)
        dispatch(loginSuccess(data))
    }
}

export const logout = () =>{
    return{
        type:Actions.LOGOUT
    }
}