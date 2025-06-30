import CreatePost from "./CreatePost"

function PostContainer() {
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col rounded-lg gap-4 bg-blue-200">
      <CreatePost />
    </div>
  )
}
export default PostContainer