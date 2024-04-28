import Link from "next/link";

export default function Header() {
    return (
        <div>
            <header className="flex items-center justify-between">
                <Link className="text-red-600 font-semibold text-3xl" href="/">PIZZA WORLD</Link>
                <nav className="flex gap-8 text-gray-500 font-semibold">
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <nav className="flex items-center gap-4 justify-between">
                    <Link href="/register">Register</Link>
                    <Link href="/login" className="bg-primary item-center rounded-full text-white px-2">Login</Link>
                </nav>
            </header>
        </div>
    );
}
