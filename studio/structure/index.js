import {type StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio CMS')
    .items([
      // Profile (singleton)
      S.listItem()
        .title('Profile')
        .id('profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
        ),
     
      S.divider(),
      
      // Projects
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .filter('_type == "project"')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('project')
            )
        ),
      
      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .schemaType('blogPost')
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
            .filter('_type == "blogPost"')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('blogPost')
            )
        ),
      
      S.divider(),
      
      // Featured Content
      S.listItem()
        .title('Featured Content')
        .child(
          S.list()
            .title('Featured Content')
            .items([
              S.listItem()
                .title('Featured Projects')
                .child(
                  S.documentTypeList('project')
                    .title('Featured Projects')
                    .filter('_type == "project" && featured == true')
                ),
              S.listItem()
                .title('Featured Blog Posts')
                .child(
                  S.documentTypeList('blogPost')
                    .title('Featured Blog Posts')
                    .filter('_type == "blogPost" && featured == true')
                ),
            ])
        ),
    ])