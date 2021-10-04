import "./product.scss";

export default function Product() {
  return (
    <div className="product">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>T-Shirt imprimé tomate Ser≠Hacer</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            est deserunt. Quae culpa adipisci blanditiis, officiis laborum
            assumenda ab sed dolores. Optio assumenda libero ad iure quam
            perspiciatis sapiente ullam. Ducimus officia quam temporibus
            placeat, assumenda veniam ut qui veritatis cupiditate laborum.
            Provident delectus ipsum doloribus odit facere culpa est?
          </p>
          <p className="prix">$20</p>
          <div className="options__container">
            <div className="colors">
              <span>Color</span>
              <div className="color blue"></div>
              <div className="color black"></div>
              <div className="color gold"></div>
            </div>
            <form>
              <label htmlFor="size">Size</label>
              <select name="size" id="size">
                <option>Select size</option>
                <option value="s">S</option>
                <option value="xs">XS</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </form>
          </div>
          <div className="cart__container">
            <div className="quantity">
              <button className="moins">-</button>
              <span className="quantity__text">1</span>
              <button className="plus">+</button>
            </div>
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
