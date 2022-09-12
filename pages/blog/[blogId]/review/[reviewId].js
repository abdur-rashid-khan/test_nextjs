import { useRouter } from 'next/router'
const ReviewDetail = () => {
   const router =useRouter();
   const reviewId = router.query.reviewId;
   const blogId = router.query.blogId;
   return (
      <div>
         <h1>product number is nested = {reviewId} , {blogId}</h1>
      </div>
   );
};

export default ReviewDetail;