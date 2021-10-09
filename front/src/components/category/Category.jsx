import { collectionData } from "mockData";
import { Link } from "react-router-dom";
import "./category.scss";

export default function Category() {
  return (
    <section className="category">
      <h1>Collections</h1>
      <div className="wrapper">
        {collectionData.map((col) => {
          return (
            <div className="infos" key={col.id}>
              <img src={col.img} alt="" />

              <div className="category__options">
                <h4>{col.title}</h4>
                <Link to={`/products/${col.cat}`}>
                  <span>Voir plus</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
