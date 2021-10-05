import Shape from "components/Shape/Shape";
import "./newsletter.scss";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <Shape backgroundColor="#1e1e1e" />
      <div className="wrapper">
        <h3>STAY CONNECTED</h3>
        <p>Get reduction for free!</p>
        <form>
          <input type="email" placeholder="VOTRE EMAIL" />
          <button>ENVOYER</button>
        </form>
      </div>
    </div>
  );
}
