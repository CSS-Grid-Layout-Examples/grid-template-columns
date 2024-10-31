/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function FixedWidthColumnLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons();
  return (
    <>
      <div className="container fixedWidthColumnLayout">
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
          A 5 Column Layout with 15px gap that has the 1st, 2nd and the 5th Columns having fixed widths.
          The balance space available is split with the remaning columns.
        </p>
      </div>
    </>
  );
}

/* exports */
export default FixedWidthColumnLayout;
