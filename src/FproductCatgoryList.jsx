import FProducts from "./FProducts"

const FproductCatgoryList = ({fpc}) => {
  return (
    <div className="FproductCatgoryList">
        <h2>{fpc}</h2>
        <FProducts/>
    </div>
  )
}

export default FproductCatgoryList