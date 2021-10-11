import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationCityOutlined,
  Payment,
  Payments,
  Phone,
} from "@mui/icons-material";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <h3>MALET</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          neque odit architecto et ullam voluptates soluta praesentium ut nulla.
          Expedita pariatur rerum laboriosam minus ab aliquam ipsam corporis
          ipsum fuga?
        </p>
        <div className="icon__container">
          <Instagram className="icon" />
          <GitHub className="icon" />
          <LinkedIn className="icon" />
        </div>
      </div>
      <div className="middle">
        <h3>Useful Links</h3>
        <div className="links__container">
          <span>Home</span>
          <span>Tous les produits</span>
          <span>Cart</span>
          <span>Collections</span>
          <span>Mon Compte</span>
          <span>Home</span>
          <span>Tous les produits</span>
          <span>Cart</span>
          <span>Collections</span>
          <span>Mon Compte</span>
        </div>
      </div>
      <div className="right">
        <h3>Contact</h3>
        <div className="contact__container">
          <span>
            <LocationCityOutlined className="icon" /> 30 Rue des voiliers 34000{" "}
          </span>
          <span>
            <Phone className="icon" /> +33 234 567 987
          </span>
          <span>
            <Email className="icon" /> contactpro@malet.fr
          </span>
        </div>
        <div className="icons">
          <Payment />
          <Payments />
        </div>
      </div>
    </footer>
  );
}
