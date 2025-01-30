import * as userService from '../service/user.service.js'


export const getUserInfo = (req,res) => {
    try {
        const userDetail = userService.getUserInfo()
        return res.status(200)
                .json(userDetail)
    } catch (error) {
        return res.status(500).json({error: "internal server Error"})
        
    }
}


