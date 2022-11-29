import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Sidebar from './Sidebar';

const About = () => {
  const location = useLocation();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={4}>
            <Sidebar/>
        </Grid>
        <Grid xs={8}>
          <h1>소개</h1>
          <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
          <p>쿼리스트링: {location.search}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;