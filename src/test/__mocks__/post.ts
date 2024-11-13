import { Post, Tag } from '@frontend/types/sanity';

const mockTags: Tag[] = [
  {
    _id: '1',
    _type: 'tag',
    key: 'tag1',
    title: 'Tag 1',
    slug: {
      current: 'tag-1',
      _type: 'slug',
    },
  },
  {
    _id: '2',
    _type: 'tag',
    key: 'tag2',
    title: 'Tag 2',
    slug: {
      current: 'tag-2',
      _type: 'slug',
    },
  },
];

export const posts: Post[] = [
  {
    _key: '123',
    image: {
      _type: 'image',
      alt: 'eslint + prettier',
      asset: {
        _ref: 'image-9171f0f3be491209389bb28a3469c12faab7a68e-1024x285-png',
        _type: 'reference',
      },
    },
    tags: mockTags,
    publishedAt: '2024-11-04',
    intro: "What's the role of a code linter and formatter in our projects?",
    _type: 'post',
    _id: '04cf7c81-7686-4f68-a64e-9bf9449d82a9',
    content:
      'TL;DR\nLinters flag bugs and bad practices\nFormatters fix your code to match style guides\n\n\n\n## Linting \n\nCode linters perform static analysis on code to identify programming errors, detect bugs, point out stylistic issues, and highlight suspicious constructs using the abstract syntax tree (AST). By ensuring your code adheres to a style guide, code linting promotes and enforces best practices.\n\nA linter typically alerts you to functions that are overly complex, suggests syntax improvements, and flags coding practices that deviate from established conventions or configurations. \n\nFor example, ESLint is a popular linter for JavaScript, while SonarLint is an IDE extension that provides linting support for code in VSCode. Popular configs such as Airbnb make it easy to start adopting strict practices in your projects\n\n\n## Formatters\n\n\nCode formatters manage style elements like spacing, line breaks, and comments, helping to enforce programming and formatting rules that can be easily automated. This reduces future code diffs by allowing an automatic tool to handle formatting instead of relying on individual developers.\n\nFor example, Prettier is a popular code formatter that automatically formats code to ensure a consistent style across various languages.\n\n',
    slug: {
      _type: 'slug',
      current: 'code-linters-and-formatters',
    },
    title: 'Code linters and formatters',
  },
  {
    _key: '456',
    _type: 'post',
    content:
      "When creating lambda functions with HTTP API gateways, it's very common to not want to use the default function URL provided out the box by AWS. To achieve this, we are going to go over how to connect your domain in cloudflare to an endpoint exposed via AWS API gateway. \n\n\nSteps:\n\n* Generate an origin server certificate on cloudflare\n* Import the cloudflare certificate in AWS certificate manager\n* Create the custom domain name in AWS API gateway\n* Create a record in cloudflare to point the record to the API gateway\n\n\n## Generate a certificate on cloudflare\nNavigate to the cloudflare dashboard, select the site of interest, navigate to the SSL/TLS menu and click 'Overview'. Ensure the SSL/TLS encryption mode is set to full otherwise we will get 521 errors from cloudflare. \n\n\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/29492f9fec4269c780050e26dbbbc215f0b61a80-1922x1084.png?w=450)\n\nNavigate to origin server, click 'create certificate' and enter the domain you want. This must match what you enter in 'custom domain name' in AWS API gateway. \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/c617e70d6ec48cc56c687e76e762370a8b4d42ee-1922x1542.png?w=450) \n\n\nClick create and save the origin certificate and private key somewhere safe. Ideally you should also provide AWS API gateway with the certificate chain. You can find cloudflare's certificate chain [here](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/#cloudflare-origin-ca-root-certificate)\n\n\n## Import the cloudflare certificate into AWS certificate manager\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/6d9b1abac26c8efb56cbfaeea5c8b6be6642630b-2012x1298.png?w=450)\n\nFill out the required info and click Next. Enter any tags you want and click 'review and import'. Now that we've got our certificate imported we can move on to adding the domain to the API gateway.\n\n## Create the domain name in AWS API gateway \n\nGo to AWS API gateway and navigate to the custom domain names section and click 'create' \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/5696580948b3300d084c9c1e84510dc4777753d9-572x1298.png?w=450) \n\n\nFill in the domain name with the domain you entered when creating the certificate in cloudflare and then for the ACM certificate choose the certificate you just imported. \n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/cddb15f9a8db27b9297623036c5ac615593ff66c-1818x2118.png?w=450)\n\nAt this point select the created domain and go to API mappings and click the Configure API mappings.\n\nAdd a new mapping selecting the API Gateway route and relevant stage.\n\n## Point the cloudflare DNS to the API gateway \n\nNow that everything is imported in AWS, we can go back to the cloudflare dashboard and enter our new DNS records for the gateway. Navigate to DNS and records. Click 'Add record', choose CNAME, ensure cloudflare is proxying the traffic and then enter your values. You can get the gateway domain name by navigating to API gateway > custom domain names > configurations > 'API Gateway domain name'\n\n![](https://cdn.sanity.io/images/wdj6ou2i/production/f2ff9d86c29931392bb6b043c0aa7a24e39ef7e8-1414x928.png?w=450)\n\n\n## Resources\n\nView https://github.com/luke-h1/lho-lambda for an example on how to automate this infrastructure with Terraform\n\nIt's worth nothing that Cloudflare origin certificates only support one level of sub domains. So you can't have a domain such as `myapi.staging.mysite.com`",
    slug: {
      current: 'how-to-connect-a-custom-domain-to-aws-api-gateway',
      _type: 'slug',
    },
    image: {
      _type: 'image',
      alt: 'aws api gateway',
      asset: {
        _ref: 'image-ac10eed3e232949959f69e0decbd593b10dfb0ea-972x611-png',
        _type: 'reference',
      },
    },
    title: 'How to connect a custom domain to AWS API gateway',
    tags: mockTags,
    publishedAt: '2024-03-25',
    intro:
      'How to connect a custom domain (cloudflare) to AWS API gateway and generate free SSL certificates',
    _id: 'abd0e41b-300d-4e79-962b-9e499b819e41',
  },
  {
    _key: '789',
    title: 'Getting started with aws-vault',
    content:
      "## Why aws-vault?\n\n\nWhen we are configuring the AWS CLI on our machines, it will save access key and secrets in plain text format in your home directory  `~/.aws/credentials`. As you can imagine, this becomes a big security concern as everyone knows where to look for your credentials, they're in plain text and anyone can scan/look for those keys. If you're unlucky, you've just given someone easy access to your account.  \n\n\nIn order to prevent situations like this from happening, aws-vault comes to the rescue! aws-vault is an open source tool developed by [99Designs](https://github.com/99designs) which is widely used to secure our AWS keys in an encrypted format.\n\nMoreover, aws-vault maximizes security through transient credentials obtained from Amazon's STS service. These are procured via `GetSessionToken` and `AssumeRole` API calls and have a limited timespan. Since these credentials are temporary, the danger of becoming compromised is significantly reduced. \n\n\n\n## Getting started\n\nHere's a quick starter on how you can get up and running with aws-vault\n\n\n### Setting up the tool\n\nOn mac OS, we can install aws-vault with one command:\n\n```bash\nbrew install --cask aws-vault\n\n```\n\n### Transfer any existing credentials \n\n\nMove existing credentials to aws-vault: \n\n```bash\ncat ~/.aws/credentials\naws-vault add profile_1\naws-vault add profile_2\n```\n\n### Pick an account to launch \n\nTo review all your available accounts run: \n\n```bash \n\naws-vault list\n\n```\n\nTo assume an account role: \n\n```bash\n\naws-vault exec my_profile\n\n```\n\n## Passwordless AWS console access \n\nAnother advantage of using aws-vault is that you can perform safe sign-in to the aws console. This saves the hassle of having to use your browser to navigate to aws. This command utilises your MacOS keychain and 2FA to authenticate you with your profile: \n\n```\naws-vault login my-profile --duration 2h\n```\n\n## Ending the session \n\nTo Safeguard against your account becoming comprimised you can terminate the vault session by pressing `ctrl+d`. In addition to this you can set short session durations to avoid being authenticated longer than necessary ",
    intro:
      'AWS vault is a handy tool I use every day to manage my AWS credentials when developing locally',
    _id: 'b21d981c-ada1-4db8-aeca-c5c928bb8d71',
    _type: 'post',
    tags: mockTags,
    publishedAt: '2024-03-06',
    slug: {
      current: 'getting-started-with-aws-vault',
      _type: 'slug',
    },
    image: {
      _type: 'image',
      alt: 'aws vault github card',
      asset: {
        _ref: 'image-bbf409c3d66ac0b9ce20bfe4aebb9678e7eb2cab-1200x600-png',
        _type: 'reference',
      },
    },
  },
];
