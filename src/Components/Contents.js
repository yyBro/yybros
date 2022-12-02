import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactInstall, PythonInstall, ReactTroubleShooting } from "./Pages";

const CONTENT_LIST = {
  React: {
    name: "React",
  },
  Python: {
    name: "Python",
  },
  Java: {
    name: "Java",
  },
  Spring: {
    name: "Spring",
  },
};
/* 신규 페이지 추가 시,
   1. Components/Pages에 Component 추가
   2. Components/Pages/index.js에 Component추가
   3. Components/Contents.js의 page_components에 add */
const page_components = {
  ReactInstall: ReactInstall,
  ReactTroubleShooting: ReactTroubleShooting,
  PythonInstall: PythonInstall,
};

function CreateComp(name) {
  const PageComponent = page_components[name];
  return <PageComponent />;
}

const Contents = () => {
  const param = useParams();
  const contentName = param.contentName;
  const pageName = param.pageName;
  console.log("Contents : " + contentName);
  console.log("Page : " + pageName);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={4}>
          <Sidebar />
        </Grid>
        <Grid xs={8}>
          {CONTENT_LIST[contentName] ? (
            <h2>{CONTENT_LIST[contentName].name}</h2>
          ) : (
            <h2>UnKnown</h2>
          )}
          {CreateComp(contentName + pageName)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contents;
