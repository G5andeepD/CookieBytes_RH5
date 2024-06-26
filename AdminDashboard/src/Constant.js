export const LOCAL_SERVER = "http://192.168.1.11:5000/";
export const BASE_URL = LOCAL_SERVER
export const MY_URL = "http://127.0.0.1:8000/"
function join_server_and_endpoint(base, endpoint) {
    return `${base}${endpoint}`
}
export const CREATE_DOCTOR = join_server_and_endpoint(BASE_URL, "api/v1/admin/doctor")
export const AUTH_ADMIN = join_server_and_endpoint(BASE_URL, "api/v1/auth/authenticate")
export const GET_DOCTORS = join_server_and_endpoint(BASE_URL, "api/v1/admin/doctor/list")
export const GET_DISEASES = join_server_and_endpoint(BASE_URL, "api/v1/doctor/disease")
export const GET_POINTS = join_server_and_endpoint(MY_URL, "medical_record")
export const GET_CLUSTERS = join_server_and_endpoint(MY_URL, "k_means_cluster")

