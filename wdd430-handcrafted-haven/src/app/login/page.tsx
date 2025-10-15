import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>Login Page</p>
      <Link href="/register">Register (click)</Link>
    </div>
  );
}
  