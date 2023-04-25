const axios = require('axios')

export const NewsletterClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://3whopuevyg.execute-api.us-east-1.amazonaws.com/dev",
});

export const getAllArticles = async () => {
    return await NewsletterClient.get(`/posts`);
}

export const addSubscriber = async (body) => {
    return await NewsletterClient.post(`/subscribers`, body);
}

export const createNewArticle = async (body) => {
    return await NewsletterClient.post(`/posts`, body);
}

