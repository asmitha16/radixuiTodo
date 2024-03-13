import Link from "next/link"
import { Post } from "@prisma/client"
import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { PostOperations } from "@/components/post-operations"
import { Checkbox } from "@/components/ui/checkbox"
import { PostCreateButton } from "./post-create-button"
import { Icons } from "@/components/icons"

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">
}
interface PostItemPropsNew {
  postId : Number,
  postTitle : String, 
  postChecked : Boolean, 
}
export function PostItem({ postTitle, postChecked, postId }: PostItemPropsNew) {
  return (
    // <div className="flex items-center justify-between p-4">
    //   <div className="grid gap-1 border">
    //        Hello
    //   </div>
    //   {/* <PostOperations post={{ id: post.id, title: post.title }} /> */}
    // </div>



// <div className="container">
// <div className="mx-auto grid w-full justify-center">
//   <div className="relative w-full overflow-hidden rounded-lg border bg-background p-6 shadow-md xl:grid xl:grid-cols-[500px]">
//     <div className="m-3 flex items-center justify-between space-y-2 bg-slate-50 p-4 xl:grid xl:grid-cols-[auto,1fr] xl:p-3">
//       <Checkbox /> 
//       <p className="text-lg font-semibold"> {postTitle} </p>
//     </div>
//     <PostCreateButton />
//   </div>
 
// </div>

// </div>

<>
  <main className="grid items-center justify-center p-6">
    <div className="flex h-[400px] w-[450px] flex-col rounded-md py-6 text-slate-800 shadow-lg">
      {/* Increased shadow and added rounded-md */}
      <h1 className="text-center text-3xl">My to dos</h1>
      
      <div className="mx-8 mb-6 mt-4">
          <form className="flex items-center gap-3">
            <input
              type="text"
              name="title"
              placeholder="New todo"
              className=" flex-1 rounded-full border-slate-400  bg-slate-50 px-2 py-1 outline-none placeholder:text-slate-300 focus-within:border-slate-100 focus-within:bg-slate-100"
              required
            />
           <PostCreateButton />
          </form>
        </div>

      <ul className="px-6">
        <li className="flex px-4">
          <span className="flex flex-1 gap-2 p-6">
            <Checkbox /> {postTitle}
          </span>
          <button className="mr-3 text-slate-500 hover:text-slate-800">
          <Icons.trash className="mr-2 h-4 w-4" />
          </button>
        </li>
      </ul>
    </div>
    {/* <div className="flex items-center justify-center p-2 ">
      <PostCreateButton />
    </div> */}
  </main>
</>


  )
}

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
