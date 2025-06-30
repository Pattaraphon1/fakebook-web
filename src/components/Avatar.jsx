import DefaultImg from '../assets/default-avatar.png'
import { DropdownIcon } from '../icons'

function Avatar(props) {
  const {imgSrc, menu, right, bottom, ...resProps} = props
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...resProps}>
        <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu && 
        <DropdownIcon className="absolute w-3.5" style={{ right : right, bottom: bottom}}/>
      }
    </div>
  )
}
export default Avatar