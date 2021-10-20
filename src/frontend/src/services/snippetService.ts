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

const snippetService = {
  async getAllSnippets(): Promise<Snippet[]> {
    return cmsClient.fetch(listAllSnippets);
  },
  async getSnippet(slug: string): Promise<Snippet> {
    return cmsClient.fetch(getSnippet, {
      slug
    })
  }
}
export default snippetService;
