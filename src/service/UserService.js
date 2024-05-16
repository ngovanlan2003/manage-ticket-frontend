import axios from './CustomizeAxios'

const axiosJwt = axios.create()

const getAllUserAdminService =  (page) => {
    return axios.get(`/user/get-all-user?page=${page}`) 
}

const createNewUserAdminService =  (user) => {
    return axios.post(`/user/create-user`, user) 
}

const updateUserAdminService =  (user) => {
    return axios.post(`/user/update-user`, user) 
}

const deleteUserAdminService =  (id) => {
    return axios.delete(`/user/delete-user/${id}`) 
}

const verifyEmailService =  ({email, otp}) => {
    return axios.post(`/user/verify-email`, {email, otp}) 
}

const registerUserService =  (user) => {
    return axios.post(`/user/register-user`, user) 
}

const loginUserService =  (user) => {
    return axios.post(`/user/login-user`, user) 
}

const getDetailUserService = (id, access_token) => {
    return axios.get(`/user/get-detail-user/${id}`
    , 
    {
        headers: {
            token: `Bearer ${access_token}`
        }
    }
    )
}

const logoutUserService =  () => {
    return axios.post(`/user/logout-user`) 
}

const updatePasswordService = (user) => {
    return axios.post(`/user/update-password`, user) 
}

const loginUserSuccess = (id, tokenLogin) => {
    return axios.post(`/auth/login-success`, {id, tokenLogin}) 
}

export {
    getAllUserAdminService,
    createNewUserAdminService,
    updateUserAdminService,
    deleteUserAdminService,
    verifyEmailService,
    registerUserService,
    loginUserService,
    getDetailUserService,
    logoutUserService,
    updatePasswordService,
    loginUserSuccess
}

