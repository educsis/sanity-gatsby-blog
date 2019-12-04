export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de71a3469bd7c2e0f508f99',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wmqwa88g',
                  apiId: '26457e31-852a-4344-9946-2521f2a09ad7'
                },
                {
                  buildHookId: '5de71a34cf67fb51aac59452',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z1vacw8e',
                  apiId: 'a2d3437a-5cad-47d9-9180-87100adf6213'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/educsis/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z1vacw8e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
