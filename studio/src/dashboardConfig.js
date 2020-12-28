export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fea00c969f90d8fdf7cd85a',
                  title: 'Sanity Studio',
                  name: 'aha-digital-sanity-gatsby-studio',
                  apiId: 'd4b5180c-c5ba-40e4-bea3-2b1c7c83dba6'
                },
                {
                  buildHookId: '5fea00ca605fe19655a2b423',
                  title: 'Blog Website',
                  name: 'aha-digital-sanity-gatsby',
                  apiId: 'cdf8eb87-e21e-4fe4-9ec7-0d6afdadf393'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AhaDigital/aha-digital-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://aha-digital-sanity-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
