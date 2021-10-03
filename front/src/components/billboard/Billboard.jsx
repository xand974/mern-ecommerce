import "./billboard.scss";

export default function Billboard() {
  return (
    <div className="billboard">
      <img
        src="https://images.unsplash.com/photo-1564859227552-81fde4a1df0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className="billboard__bg"
      />
      <div className="billboard__link">
        <li>VOIR LE DEFILE</li>
      </div>
      <div className="billboard__infos">
        <h2>STAY FOCUS</h2>
        <p>Collection</p>
        <p>2020 - 2021</p>
      </div>
    </div>
  );
}
