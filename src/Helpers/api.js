import axios from 'axios'
const catAPI = axios.create({ baseURL : process.env.API_BASE_URL })

catAPI.defaults.headers['x-api-key'] = process.env.API_KEY

export default catAPI

console.log(process.env.API_BASE_URL)
console.log(process.env.API_KEY)
catAPI.get('images/search').then(console.log).catch(console.error)
// export default async function api(params) {
//   const config = {
//     ...params,
//     url: `${process.env.API_BASE_URL}/${params.url}`,
//     headers: {
      
//     }
//   }

//   try {
//     const response = await axios(config)
//     return response
    
//   } catch (error) {
//     return error
//   }
// } 


