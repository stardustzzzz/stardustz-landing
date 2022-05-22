/* eslint-disable @next/next/no-img-element */
import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import NFTDonate from "../../components/NFTDonate";
import Donate from "../../components/Donate";
import { useTina } from "tinacms/dist/edit-state";
import Marquee from "react-fast-marquee";
const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    body
    doge
    top
    bottom
    sections{
      title
      price
      image
      color
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

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <div className="fixed top-0 left-0 right-0 h-20 bg-white marquee-top b ">

          <Marquee gradient={false}>
            <span className="flex items-center justify-center h-20 px-8 text-5xl font-bold text-red-500">
              {data.post.top}
            </span>

          </Marquee>
        </div>

        <div className="flex-grow py-20 overflow-y-auto main">
          {data.post.sections.map((section) => (
            <div key={section.title} className="px-2">
              <div className="flex flex-col w-full py-4 xl:flex-row ">
                <div className="flex items-center h-full p-2 xl:w-2/3">
                  <img
                    src={section.image}
                    alt="Landscape picture"
                  />
                </div>
                <div className="flex flex-col items-end h-full xl:w-1/3 ">
                  <div className="flex flex-col items-end justify-end">
                    <h2 className="pt-4 text-right"> <span className="text-4xl font-bold text-right text-white uppercase bg-black"> {section.title} </span></h2>

                    {/* <span className="my-4 text-4xl font-bold text-right text-green-400 uppercase"> {section.price}</span> */}
                    {section.price === "1" ? <Donate /> : null}
                    {section.price === "2" ? <NFTDonate /> : null}

                    <div className="flex flex-row my-4 font-semibold text-right">
                      <div className="px-2">
                        {section.left}
                      </div>
                      <div className="px-2">
                        {section.right}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white marquee-bottom ">
          <Marquee gradient={false} direction="right">
            <span className="flex items-center justify-center h-20 px-8 text-5xl font-bold text-black" >
              {data.post.bottom}
            </span>
          </Marquee>
        </div>
      </div>

      <div className="fixed bottom-0 flex justify-end left-8">
        <div className="absolute max-w-xs px-8 py-4 -mt-20 -mr-40 font-semibold text-right bg-white rounded-full">
          <span className="text-lg" > {data.post.body}</span>
        </div>

        <img
          className="w-80"
          src={data.post.doge}
          alt="Landscape picture"
        />
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
