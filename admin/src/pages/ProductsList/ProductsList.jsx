import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useHistory } from "react-router-dom";
import "./productsList.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "redux/apiCalls";

export default function Products() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const HandleClick = (id) => {
    deleteProduct(dispatch, id);
    history.push("/products");
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="renderProduct">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "color",
      headerName: "Color",
      width: 160,
    },
    {
      field: "price",
      headername: "Price",
      width: 100,
    },
    {
      field: "size",
      headername: "Size",
      width: 160,
      type: Array,
    },
    {
      field: "quantity",
      headername: "Quantity",
      width: 100,
      type: Number,
    },
    {
      field: "categories",
      headername: "Categories",
      width: 160,
      type: Array,
    },
    {
      field: "inStock",
      headername: "inStock",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productlist">
            <Link
              to={{
                pathname: `/product/${params.row._id}`,
                product: params.row,
              }}
            >
              <button>
                <EditOutlined className="btn__edit" />
              </button>
            </Link>
            <button
              onClick={() => {
                HandleClick(params.row._id);
              }}
            >
              <DeleteOutlined className="btn__delete" />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="products">
      <div className="container__title">
        <h3>Products</h3>
        <Link to="/new/product">
          <span>Create</span>
        </Link>
      </div>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
