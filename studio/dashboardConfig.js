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
                  buildHookId: '6168ef0b4d1446365790630c',
                  title: 'Sanity Studio',
                  name: 'forge-front-studio-rei6644q',
                  apiId: '7067e58b-6606-4880-bb4c-2240fa9de0b4'
                },
                {
                  buildHookId: '6168ef0b48fee445a33a27ec',
                  title: 'Blog Website',
                  name: 'forge-front-web',
                  apiId: '9998d5b5-b16d-4b4e-ba10-e32abd88d763'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issacting93/Forge-front',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://forge-front-web.netlify.app', category: 'apps'}
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
