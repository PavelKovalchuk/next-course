import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

// second step of prerendering
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
      <li>
        <Link href={'/last-sales'}>client side data fetching</Link>
      </li>
    </ul>
  );
}

// first step of prerendering
export async function getStaticProps(context) {
  console.log('(Re-)Generating...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    // revalidate is for Incremental static generation (update data on each request after the build)
    // for production only
    revalidate: 10,
    // page will return 404 error if true
    notFound: false,
    // for redirects
    /* redirect: {
      destination: '/',
    }, */
  };
}

export default HomePage;
