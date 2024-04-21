
export function get_auth_token() {
    return localStorage.getItem("auth_token");
}


export function set_auth_token(token) {
    return localStorage.setItem("auth_token", token);
}


export function clear_token() {
    set_auth_token(null);
}

export function get_auth_header() {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${get_auth_token()}`,
            'accept': '*/*' // 'accept' changed to 'Accept' for consistency
        }
    };
    return config
}