import PostContainer from "../components/PostContainer"
import SidebarContract from "../components/SidebarContract"
import SidebarMenu from "../components/SidebarMenu"

function Home() {
  return (
    <>
    <SidebarMenu />
    <PostContainer />
    <SidebarContract />
    </>
  )
}
export default Home