export function FetchData(endPoint, postData, method, headers) {
    let data
    let baseURL = "http://158.69.183.108/"

    return new Promise((resolve, rejects) => {
        fetch(baseURL + endPoint, {
            method: method,
            body: data,
            headers: headers
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            rejects(error)
        })
    })
}