import Link from 'next/link';

const Header = () => (
  <header className="text-center py-4 bg-primary text-text">
    <h1 className="text-2xl">Haunted Restaurant</h1>
    <nav>
      <Link href="/">Home</Link> | <Link href="/menu">Menu</Link> | <Link href="/checkout">Checkout</Link>
    </nav>
  </header>
);

export default Header;
