/* app imports */
import getJBIcons from "@common/data/get-jb-icons";

/* component */
function MultiFractionalResponsiveLayout(): JSX.Element {
  const IMG_ROOT = import.meta.env.VITE_IMG_SRC;
  const brandsData = getJBIcons().splice(0, 9);
  return (
    <>
      <div className="container multiFractionalResponsiveLayout">
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
          A 3-Column Responsive Grid Layout. The first column takes up two parts of the available space.
          The second column takes up one part. The third column takes up three parts.
        </p>
      </div>
    </>
  );
}

/* exports */
export default MultiFractionalResponsiveLayout;
