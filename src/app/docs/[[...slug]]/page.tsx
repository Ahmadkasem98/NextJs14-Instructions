//catch all segments (in url above /test/test1)

type Props = {
  params: { slug: string[] };
};

const Docs = ({ params }: Props) => {
  if (params.slug?.length == 2) {
    return (
      <div>
        Viewing Docs for Feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  } else if (params.slug?.length == 1) {
    return <div>Viewing Docs for Feature {params.slug[0]}</div>;
  }

  return <div>Docs Home Page</div>;
};

export default Docs;
