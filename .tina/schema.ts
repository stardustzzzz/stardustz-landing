import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },

      ],
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          label: "Sections",
          name: "sections",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "title",
              type: "string"
            }, {
              label: "Price",
              name: "price",
              type: "string"
            }, {
              label: "Right Column",
              name: "right",
              type: "string",
              ui: {
                component: 'textarea',
              },
            }, {
              label: "Left Column",
              name: "left",
              type: "string",
              ui: {
                component: 'textarea',
              },
            },
            {
              label: "Image",
              name: "image",
              type: "image"
            },
            {
              label: "Color",
              name: "color",
              type: "string"
            },
          ]
        },
        {
          name: 'doge',
          type: 'image',
          label: 'doge',
        },
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Top marquee",
          name: "top",
        },
        {
          type: "string",
          label: "Bottom marquee",
          name: "bottom",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },

  ]
});


export default schema;

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
    // Load media store dynamically so it only loads in edit mode
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  schema,
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document._sys.filename === "home") {
            return "/";
          }
        }

        if (["post"].includes(collection.name)) {
          return `/posts/${document._sys.filename}`;
        }
        if (["presentations"].includes(collection.name)) {
          return `/presentations/${document._sys.filename}`;
        }

        return undefined;
      });
      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
