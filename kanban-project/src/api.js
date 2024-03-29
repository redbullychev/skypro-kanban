//const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

const baseHost = "https://wedev-api.sky.pro/api/kanban";

const userHost = "https://wedev-api.sky.pro/api/user";

export function signIn({ login, password }) {
    return fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Неверный логин или пароль");
        }
        return response.json();
    });
}

export async function getTodos({token}) {
    const response = await fetch (baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
     if (!response.status ===200) {
        throw new Error("Ошибка");
     }
    const data = await response.json();
    return data;
}

export function signUp({ login, name, password }) {
    return fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Такой пользователь уже существует");
        }
        return response.json();
    });
}

// export async function getUsers() {
//     const response = await fetch ('https://wedev-api.sky.pro/api/user', {
//         method: "GET"
//     });
//      if (!response.status ===200) {
//         throw new Error("Ошибка");
//      }
//     const data = await response.json();
//     return data;
// }

