import request from "../../utils/request";

const API = {
    BLOG_URL: '/blog',
}

export const reqBlogInfo = () => request.get(API.BLOG_URL);
export const reqBlogStore = (data) => request.post(API.BLOG_URL, data);