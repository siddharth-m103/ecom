import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold">Home Page</h1>

      <Link href="/login">
        <button className="bg-black text-white px-5 py-2 rounded-lg">
          Go to Login
        </button>
      </Link>
    </div>
  );
}