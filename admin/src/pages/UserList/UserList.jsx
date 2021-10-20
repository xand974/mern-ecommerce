import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "redux/apiCalls";
import { useDispatch } from "react-redux";

export default function UserList() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandleClick = (id) => {
    deleteUser(dispatch, id);
    history.push("/users");
  };

  useEffect(() => {
    fetchUsers(dispatch, false);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="renderUser">
            <img src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "address", headerName: "Address", width: 130 },
    { field: "genre", headerName: "Genre", width: 130 },
    { field: "job", headerName: "Job", width: 130 },
    {
      field: "isAdmin",
      headerName: "Admin",
      type: "boolean",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userlist">
            <Link
              to={{ pathname: `/user/${params.row._id}`, user: params.row }}
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
    <div className="userlist">
      <div className="container__title">
        <h3>Users</h3>
        <Link to="/new/user">
          <span>Create</span>
        </Link>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
