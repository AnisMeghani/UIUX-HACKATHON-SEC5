import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: "sk3Da6ub3bv9oqkYa5Tdjf2SFeGfhmiRWhpvMb0W0Vu36SSK8SFlV3Vv8RMM3daoxC7A0T9aaplKNX8WfzXIMdpBZ1ThC1Zc2b6Z1nvrURI3rjCe4fNuVPZLvxaWgLxXq6NAYcaNyeCGKLY7xnNZMxZpyF1vMFOZsXysZ6o2t3codXkDy5HL"


})
