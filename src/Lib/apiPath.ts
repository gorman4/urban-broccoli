//Api endpoint will be stored and structured here

export const API_PATHS ={
        BASE_URL: "http://localhost:8000",
        AUTH:{
            REGISTER:"/api/v1/register",
            LOGIN:"/api/v1/login",
            LOG_OUT:"/api/v1/logout"
        },
        INVENTORY:{
            INSERT: "/api/v1/inventory",
            TRACK:"/api/v1/track",
            UPDATE:"/api/v1/update",
            GETALL:"/api/v1/inventory",
            ACTIVATE:"/api/v1/activate?uuid="


        },
        QUOTE:{
            INSERT:"/api/v1/quote"
        }


}