import { AxiosInstance } from "axios";
import instance from "./axios-instance";


class Services {
    axiosInstance:AxiosInstance = instance

    post = (endpoint:string, data) => {
        return new Promise ( (resolve, reject) =>{

            this.axiosInstance.post(endpoint,data)
            .then(
                res => res.data
            ).then(
                
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
    get = (endpoint:string) => {
        return new Promise ( (resolve, reject) =>{

            this.axiosInstance.get(endpoint)
            .then(
                res => res.data
            ).then(
                
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
}

export default Services