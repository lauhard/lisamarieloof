import {createClient} from '$lib/prismicio'
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (data) => {
   const {fetch, request, route} = data;
  const slug = route.id == '/' ? 'homepage' : route.id; 
    const homepageUID = slug  // Update for the UID of your homepage
    const client = createClient({ fetch, request })
    const document = await client.getFirst()

    if (document) {
        return { document }
    }

    error(404, 'Not found')
};