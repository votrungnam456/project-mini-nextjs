export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  console.log(params.slug.length);
  return <h1>Return homepage Docs</h1>;
}
