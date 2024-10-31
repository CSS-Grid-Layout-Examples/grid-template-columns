/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function AutoWidthFractionalLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons();
  return (
    <>
      <div className="container autoWidthFactionalLayout">
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
          The First 3 Columns have an 'Auto' width status while the 4th and 5th columns are based on
          Fractional widths in this layout.
        </p>
      </div>
    </>
  );
}

/* exports */
export default AutoWidthFractionalLayout;
