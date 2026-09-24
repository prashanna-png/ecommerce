
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const {id}=useParams();
  return <div>ProductDetailPage {id}</div>
}

export default ProductDetailPage;
