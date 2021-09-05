import Services from ".."

class PullService{
     mainService:Services;

     constructor() {
        this.mainService = new Services()
    }

     post = ( data) => {
        return new Promise ( (resolve, reject) =>{

            this.mainService.post("/pulls.json",data)
            .then(
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
     getAll = () => {
        return new Promise ( (resolve, reject) =>{

            this.mainService.get("/pulls.json")
            .then(
                data => resolve(data) 
            ).catch(
                err => reject(err)
            )
        })
    }
}

export default PullService