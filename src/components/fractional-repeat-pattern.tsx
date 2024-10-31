/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function FractionalRepeatPattern(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 8);
  return (
    <>
      <div className="container fractionalRepeatPattern">
        <ul className="list-unstyled">
          {
            brandsData.map((obj, index) => {
              return (
                <li key={index} className="brandItem text-center positionRelative">
                  <div className="image positionRelative">
                    <img src={`${IMG_ROOT}${obj.src}`}
                    className="img-fluid" alt={obj.alt} title={obj.title}/>
                  </div>
                    <span>{obj.title}</span>
                </li>
              );
            })
          }
        </ul>
        <p className="info text-center">
          Styles for this layouts results in a 4-Column Layout. Alternating between columns of 1fr
          and 2fr, repeating twice.
        </p>
      </div>
    </>
  );
}

/* exports */
export default FractionalRepeatPattern;
