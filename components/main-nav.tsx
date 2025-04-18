import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Trophy } from "lucide-react"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
        <Trophy className="h-6 w-6" />
        <span>SportsFix</span>
      </Link>
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/leagues" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Leagues
      </Link>
      <Link href="/teams" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Teams
      </Link>
      <Link href="/news" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        News
      </Link>
    </nav>
  )
}
