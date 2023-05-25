import {defineCliConfig} from 'sanity/cli'

//import without using ES6
// const sanityClient = require('@sanity/client')

export default defineCliConfig({
  api: {
    projectId: 'npd35udx',
    dataset: 'production',
  },
})

// const client = sanityClient({
//   projectId: 'npd35udx',
//   dataset: 'production',
//   token:
//     'skeEGzdjNcjpyuisOLqITcpYRV1OAxIzoIClVGsAKI1pgOhFPvsbwkMM4e8SKMhFrBo8Sni40WVfL7l2SYKpsPV8Y3pUBkuFTE6gQywUR6w9YM4YYlrMcYxVsLbDH71Zec18vS7IbcDdPmteWDt7ceTXuMvF7D1GWpzz5QFgWOV2zHTE8pCs', // replace with your write token
//   useCdn: false, // `false` if you want to ensure fresh data
// })

// export async function createComment(commentData) {
//   try {
//     const newComment = {
//       _type: 'comment',
//       ...commentData,
//     }

//     const response = await client.create(newComment)
//     console.log(`Comment was created, document ID is ${response._id}`)
//   } catch (error) {
//     console.error('Oh no, the comment creation failed: ', error.message)
//   }
// }
