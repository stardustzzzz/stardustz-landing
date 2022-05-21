/* eslint-disable @next/next/no-img-element */
import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';

const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    body
    image
    sections{
      title
      price
      image
      left
      right
    }
  }
}
`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });
  console.log(data);
  return (
    <Layout>
      <div className="flex h-screen flex-col">
        <div className="marquee-top fixed top-0 left-0 right-0 h-16 bg-red-200">top marquee</div>

        <div className="main flex-grow overflow-y-auto   py-16">
          {data.post.sections.map((section) => (
            <div key={section.title}>
              <div className="flex py-4 w-full flex-col xl:flex-row  ">
                <div className="flex h-full xl:w-2/3 items-center   p-2">
                  <img
                    src={section.image}
                    alt="Landscape picture"

                    objectFit="contain"
                  />

                </div>
                <div className="flex h-full xl:w-1/3 flex-col items-end ">
                  <div className="flex flex-col items-end justify-end">
                    <span className="bg-black text-right text-4xl text-white font-bold uppercase"> {section.title} </span>
                    <span className="text-right text-4xl text-green-400  font-bold uppercase"> {section.price}</span>
                    <div className="flex flex-row">
                      <div>
                        {section.left}
                      </div>
                      <div>
                        {section.right}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="marquee-bottom fixed bottom-0 left-0 right-0 h-16 bg-green-200">Bottom marquee</div>
      </div>
      {/* <code>
        <pre
          style={{
            backgroundColor: "lightgray",
          }}
        >
          {JSON.stringify(data.post, null, 2)}
        </pre>
      </code> */}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
        postConnection {
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });
  const paths = postsResponse.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".md",
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
