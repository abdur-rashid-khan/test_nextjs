import Link from 'next/link';

const Index = () => {
   return (
      <div>
         <ul>
            <li>
               <Link className='' href={`products/1`}>
                  <a className="text-sky-700 inline-block">products 1</a>
               </Link>
            </li>
            <li>
               <Link className='' href={`products/2`}>
                  <a className="text-sky-700 inline-block">products 2</a>
               </Link>
            </li>
            <li>
               <Link className='' href={`products/3`}>
                  <a className="text-sky-700 inline-block">products 3</a>
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Index;