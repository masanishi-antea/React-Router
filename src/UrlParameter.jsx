import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // useParam
  const { id } = useParams();
  // Query Parameter
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
