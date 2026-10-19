// gatsby-theme-mate still ships a Medium GraphQL query, which fails validation
// unless the Medium types exist in the schema.
exports.createSchemaCustomization =
  require('gatsby-source-medium/gatsby-node').createSchemaCustomization;
