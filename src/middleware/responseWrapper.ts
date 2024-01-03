import { ResponseStatus } from '@/utils/constants'
import { CommonMessage } from '@/utils/message'
import { AxiosError } from 'axios'

export const checkStatus = (status: number) => {
    console.log(status, '--------Status')
    if (status >= ResponseStatus.RS200 && status < ResponseStatus.RS400) {
        console.log('validation message')
    } else if (status >= ResponseStatus.RS400 && status <= ResponseStatus.RS500) {
        switch (status) {
            case ResponseStatus.RS401:
                console.log(CommonMessage.UnAuthorized)
                break
            case ResponseStatus.RS404:
                console.log(CommonMessage.NotFound)
                break
            case ResponseStatus.RS500:
                console.log(CommonMessage.InternalServerError)
                break
            default:
                console.log('Login')
                break
        }
    } else {
        console.log('login')
    }
}

export const responseWrapper = (error: AxiosError | any) => {
    if (error.response) {
        console.log(error, '--------Response Catch Error')
        checkStatus(error.response.status)
    } else if (error.request) {
        console.log(error.request, '--------Request Catch Error')
        console.log('login')
    } else {
        console.log(error.message, '--------Other Catch Error')
        console.log('login')
    }
}