import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/data-fetching">Data Fetching (Static generation)</Link>
        </li>
        <li>
          <Link href="/api-forms">API Forms</Link>
        </li>
      </ul>
    </div>
  );
}
