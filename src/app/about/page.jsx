import Link from "next/link";


export default function aboutPage(){
  return(
    <div className="text-center items-center justify-between p-24">
    <h1>This is about page</h1>
    <Link href='/'>Home</Link>
    </div>
  );
}