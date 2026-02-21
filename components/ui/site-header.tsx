import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { UnderGuidanceOf } from "./UnderGuidanceOf"
import { ShoppingCartIcon } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) sticky top-0 bg-background z-999">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        
        <div className="ml-auto flex items-center gap-8 sm:hidden"  >
          
        </div>
        <div className="ml-auto flex items-center gap-2">

          <UnderGuidanceOf />
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/Shazeb1234-spec/word-counter.git"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>

        </div>

      </div>
    </header>
  )
}
