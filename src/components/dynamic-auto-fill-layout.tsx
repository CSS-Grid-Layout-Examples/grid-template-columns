/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function DynamicAutoFillLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons();
  return (
    <>
      <div className="container dynamicAutoFillColumnLayout">
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
          Layout automatically adds as many columns as will fit, with each column being at least 150px wide
          and taking up 1fr of the remaining space.
        </p>
      </div>
    </>
  );
}

/* exports */
export default DynamicAutoFillLayout;
