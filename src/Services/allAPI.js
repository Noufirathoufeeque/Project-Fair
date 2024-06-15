import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

export const registerAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
export const loginAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/project/add`,reqBody,reqHeader)
}
export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/get-home-projects`,"")
}
export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}
export const allProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects`,"",reqHeader)
}
