import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID r8r0vjfrs2f_UvY2_M93c0G_ir_ey0ndq8ZJJonbXis',
    },
});