import path from 'path';
import fs from 'fs/promises';

// second step of prerendering
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

// first step of prerendering
export async function getStaticProps() {
  console.log('(Re-)Generating...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
