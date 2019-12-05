import axios from "axios"

export const registerService = async (user: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/user/register", user)

        return data
    }
    catch (err) {
        console.log(err);
    }
}

export const loginService = async (user: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/user/login", user)
        return data
    }
    catch (err) {
        console.log(err);

    }
}