import * as prismic from '@prismicio/client'

const repoName = 'lisamarieloof' // Fill in your repository name
// const accessToken = 'https://lisamarieloof.cdn.prismic.io/api/v2' // If your repository is private, add an access token
const accessToken = '';
// This defines how you will structure URL paths in your project.
// Update the types to match the custom types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  }
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

