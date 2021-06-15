const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // eslint-disable-next-line
  const createBlogsPosts = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          datoCmsMandate {
            mandat {
              slug
            }
          }
        }
      `).then((res) => {
        const posts = res.data.datoCmsMandate.mandat;
        console.log(posts);
        posts.map((post) => {
          const { slug } = post;
          createPage({
            path: `/mandate/${slug}`,
            component: path.resolve("./src/templates/MandatPost.js"),
            context: {
              slug,
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  // eslint-disable-next-line
  return Promise.all([createBlogsPosts]);
};
