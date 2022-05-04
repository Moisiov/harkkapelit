export const get = async (url) => {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then((response) => {
        return response.json()
    })
}

export const post = async (url, body) => {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body
    }).then((response) => {
        return response.json()
    })
}