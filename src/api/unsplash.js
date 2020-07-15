import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID PXeMl76xxVl5z3fyfCtON6sZKuQS2-T15gRyDG_mZB0",
    },
})

