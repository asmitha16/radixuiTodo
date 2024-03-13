import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default  function DashboardPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  // const posts = await db.post.findMany({
  //   where: {
  //     authorId: user.id,
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     createdAt: true,
  //   },
  //   orderBy: {
  //     updatedAt: "desc",
  //   },
  // })
let post = {
  "id" : 1 ,
  "title" :'sample',
   "checked" :false,
    "createdAt": '01/08/2023'
}
  return (
    <DashboardShell>
      <DashboardHeader heading="To Do" text="Create and manage your daily activities. ">
        {/* <PostCreateButton /> */}
      </DashboardHeader>
      <div>
      <PostItem postId={post.id} postTitle={post.title} postChecked={post.checked}/>
        {/* {posts?.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : ( */}
          {/* <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No tasks added.</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any tasks for today. Start adding them.
            </EmptyPlaceholder.Description>
          </EmptyPlaceholder> */}
        {/* )} */}
      </div>
    </DashboardShell>
  )
}
