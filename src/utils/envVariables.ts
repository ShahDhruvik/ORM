// All the environment variables are destructed and exported from here for easy access.
enum ConstVariables {
    CONST_API_URL = "https://jsonplaceholder.typicode.com",
    CONST_FRONTEND_URL = "http://localhost:5173"
}

export const {
    CONST_API_URL,
    CONST_FRONTEND_URL
} = ConstVariables
export const {
    VITE_APP_API_URL,
    VITE_APP_FRONTEND_URL,
} = import.meta.env;