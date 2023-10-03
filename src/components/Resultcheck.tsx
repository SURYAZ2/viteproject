import result from "./result.json";

import React, { useState } from "react";

const Resultcheck = () => {
  const [data, setData] = useState(result);
  return (
    <div>
      {data &&
        data.map((item) =>
          item.results.map((d) =>
            d.parent_platforms.map((item) => item.platform.id)
          )
        )}
      <br />
      RESULT CHECK
    </div>
  );
};

export default Resultcheck;
