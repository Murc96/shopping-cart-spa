import { Outlet, Link } from "react-router-dom";

export default function RootElement() {
  return (
      <>
      <header className="sticky">
        <div className="header-container">
          <h2>Scamazon</h2>
          <nav>
            <ul>
              <Link className="menu-point" to={`/`}>Home</Link>
              <Link className="menu-point" to={`/shop`}>Shop</Link>
              <Link className="menu-point" to={`/cart`}>Cart</Link>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}
