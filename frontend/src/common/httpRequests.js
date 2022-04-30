export const get = async (url) => {
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then((response) => {
        return response.json()
    })
}

export const post = async (url, body) => {
    return await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body
    }).then((response) => {
        return response.json()
    })
}