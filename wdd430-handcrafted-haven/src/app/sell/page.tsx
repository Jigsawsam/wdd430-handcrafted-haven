import Link from 'next/link';

export default function Page() {
    return (
      <div className="page-center">
        <h1>Sell Page</h1>
        <p>Ready to list your first item?</p>
        <Link href="/register">Create an account</Link>
      </div>
    );
  }
  