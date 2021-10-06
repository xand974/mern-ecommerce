import "./category.scss";

export default function Category() {
  return (
    <section className="category">
      <h1>Collections</h1>
      <div className="wrapper">
        <div className="infos">
          <img
            src="https://images.unsplash.com/photo-1600328759671-85927887458d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            alt=""
          />

          <div className="category__options">
            <h4>For the Woman</h4>
            <span>Voir plus</span>
          </div>
        </div>
        <div className="infos">
          <img
            src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <div className="category__options">
            <h4>For the Men</h4>
            <span>Voir plus</span>
          </div>
        </div>
        <div className="infos">
          <img
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="category__options">
            <h4>White Style!</h4>
            <span>Voir plus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
