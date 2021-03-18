export const USER = 'USER';

export function addUsertoLocalStorage(user) { 
    localStorage.setItem(USER, JSON.stringify(user));

};

export function getUserFromLocalStorage() { 
    let user = localStorage.getItem(USER);

    user = JSON.parse(user);

    if (user && user.token) { 
        return user;
    } else { 
        return { 
            email: '',
            password: '',
            token: ''
        }
    }
}