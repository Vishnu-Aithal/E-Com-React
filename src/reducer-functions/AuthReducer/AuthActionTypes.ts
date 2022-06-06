interface Login {
    type: "LOGIN";
    payload: {
        userId: string;
        token: string;
    };
}
interface Logout {
    type: "LOGOUT";
    payload?: undefined;
}

export type AuthActionTypes = Login | Logout;
