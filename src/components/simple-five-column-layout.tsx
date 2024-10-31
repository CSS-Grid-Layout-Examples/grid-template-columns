/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function SimpleFiveColumnLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons();
  return (
    <>
      <div className="container simpleFiveColumnLayout">
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
          A simple 5 column CSS Grid Layout width equal widths and a 15px gap between each of the
          column items.
        </p>
      </div>
    </>
  );
}

/* exports */
export default SimpleFiveColumnLayout;
