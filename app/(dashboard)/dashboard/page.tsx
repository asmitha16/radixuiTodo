import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"
import { PostCreateButton } from "@/components/post-create-button"



export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const todos = await db.todo.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      title: true,
      complete: true
    },
  })


  return (
    <DashboardShell>
      <DashboardHeader heading="To Do" text="Create and manage your daily activities. ">
      </DashboardHeader>
      <div>
      <main className="grid items-center justify-center p-6">
        <div className="flex h-[400px] w-[450px] flex-col rounded-md py-6 text-slate-800 shadow-lg overflow-auto">
          <h1 className="text-center text-3xl">My to dos</h1>

          <div className="mx-8 mb-6 mt-4">
            <PostCreateButton />
          </div>

          <ul className="px-6">
  {todos?.length ? (
    todos.map((todo) => (
      <li key={todo.id} className="flex px-4">
        <PostItem todo={todo} />
      </li>
    ))
  ) : (
    <EmptyPlaceholder>
      <EmptyPlaceholder.Icon name="post" />
      <EmptyPlaceholder.Title>No tasks added.</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        You don&apos;t have any tasks for today. Start adding them.
      </EmptyPlaceholder.Description>
    </EmptyPlaceholder> 
  )} 
</ul>



          </div>
        </main>
  
       
        
      </div>
    </DashboardShell>
  )
}
