import { useRouter } from 'next/router'
const ProductsDetail = () => {
   const router =useRouter();
   const productId = router.query.productId;
   return (
      <div>
         <h1>product number is = {productId}</h1>
      </div>
   );
};

export default ProductsDetail;