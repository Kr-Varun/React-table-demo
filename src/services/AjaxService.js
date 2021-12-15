export const AjaxService =  {
    getData: (url) => {
        return fetch(url).then(data => data.json()).catch(err => err)
    }
}