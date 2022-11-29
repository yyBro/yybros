import { useParams } from 'react-router-dom';
import Sidebar from "../Sidebar";
import Grid from '@mui/material/Unstable_Grid2';
import { ReactInstall,PythonInstall } from "./Pages";

const CONTENT_LIST={
    'React' : {
        name: 'React',
    },
    'Python' : {
        name : 'Python',
    },
    'Java' : {
        name : 'Java',
    },
    'Spring' : {
        name :'Spring',
    },
};

const page_components={
    ReactInstall: ReactInstall,
    PythonInstall: PythonInstall,
};

function CreateComp(name){ 
    const PageComponent = page_components[name]; 
    return <PageComponent/>;
}

const Contents=() => {
    const param = useParams();
    const contentName = param.contentName;
    const pageName = param.pageName;
    console.log('Contents : '+contentName);
    console.log('Page : '+ pageName);
    return(
        <div>
            <Grid container spacing={4}>
                <Grid xs={4}>
                    <Sidebar/>
                </Grid>
                <Grid xs={8}>
                    {CONTENT_LIST[contentName] ? ( 
                        <h2>{CONTENT_LIST[contentName].name}</h2>
                    ) : ( 
                        <h2>UnKnown</h2>
                    )}
                    {CreateComp(contentName+pageName)}
                </Grid>
            </Grid>
        </div>
    );
};

export default Contents;
