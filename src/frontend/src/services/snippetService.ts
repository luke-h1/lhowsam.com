import { Snippet } from "@lhowsam/cms/types/schema";
import cmsClient from "@src/utils/sanity";
import groq from "groq";



const listAllSnippets = groq`
  *[ _type == "snippet" ] {
    ...,
  }
`

const getSnippet = groq`
  *[ _type == "snippet" && slug.current == $slug ][0] {
    ...,
  }
`

const getSnippetSlugs = groq`
  *[ _type == "snippet" ] {
    slug,
  }
`

const snippetService = {
  async getAllSnippets(): Promise<Snippet[]> {
    return cmsClient.fetch(listAllSnippets);
  },
  async getSnippet(slug: string): Promise<Snippet> {
    return cmsClient.fetch(getSnippet, {
      slug
    })
  },
  async getSnippetSlugs(): Promise<Pick<Snippet, 'slug'>[]> {
    return cmsClient.fetch(getSnippetSlugs)
  }
}
export default snippetService;
