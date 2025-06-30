import { MenuIcon, SearchIcon } from "../icons"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"

function SidebarContract() {
  return (
    <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 max-xl:hidden">
      <div className="flex justify-between text-gray-500">
      <span>Contact</span>
      <div className="flex gap-2">
      <SearchIcon />
      ...
      </div>
      </div>
      <MenuItem 
        icon={Avatar}
        text="Win Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/420320/avatar-coffee-cup.svg'
      />
      <MenuItem 
        icon={Avatar}
        text="Gun Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/420331/avatar-lazybones-sloth.svg'
      />
      <MenuItem 
        icon={Avatar}
        text="P'Mark Codecamp20"
        className="w-11 h-11 rounded-full bg-slate-200"
        imgSrc='https://www.svgrepo.com/show/420332/avatar-muslim-paranja.svg'
      />
    </div>
  )
}
export default SidebarContract