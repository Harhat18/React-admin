import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "No", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Başlık",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Renk",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Ücret",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Üretici",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Kayıt Tarihi",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "Stok",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Ürünler</h1>
        <button onClick={() => setOpen(true)}>Yeni Ürün Ekle</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
