export const LOCAL_SERVER = "http://192.168.1.11:5000/";
export const BASE_URL = LOCAL_SERVER
function join_server_and_endpoint(base, endpoint) {
    return `${base}${endpoint}`
}
export const CREATE_DOCTOR = join_server_and_endpoint(BASE_URL, "api/v1/admin/doctor")
export const AUTH_ADMIN = join_server_and_endpoint(BASE_URL, "api/v1/auth/authenticate")

