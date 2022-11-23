import './App.css';
import React, {useState} from 'react';
//import DjangoPage from './component/DjangoPage';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { 
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ReactInstall from './component/ReactInstall';

function Header(){
  return (
    <header>
      <h1>yyBros Cheat Sheet</h1>
    </header>
  );
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none', 
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const [ArticlePage, setArticlePage] = useState({});

function ChangeArticle(page){
  page === "install" ? setArticlePage(ReactInstall) : {};
};

function Nav(){
  const [expanded, setExpanded] = useState<string|false>('React');
  const handleChange= 
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean ) => {
      setExpanded( newExpanded ? panel : false);
    };

  return(
    <nav>
      <ul>
        <Accordion expanded={expanded === 'React'} onChange={handleChange('React')}>
          <AccordionSummary>
            React
          </AccordionSummary>
            <AccordionDetails>
              <Button varient="text" onClick={ChangeArticle("install")}>Install</Button>
            </AccordionDetails>
            <AccordionDetails>
            <Button varient="text">Run</Button>
            </AccordionDetails>
            <AccordionDetails>
              Run2
            </AccordionDetails>
            <AccordionDetails>
              Run3
            </AccordionDetails>
            <AccordionDetails>
              Run4
            </AccordionDetails>
            <AccordionDetails>
              Run5
            </AccordionDetails>
            <AccordionDetails>
              Run6
            </AccordionDetails>
            <AccordionDetails>
              Run7
            </AccordionDetails>
            <AccordionDetails>
              Run8
            </AccordionDetails>
            <AccordionDetails>
              Run9
            </AccordionDetails>
            <AccordionDetails>
              Run10
            </AccordionDetails>
            <AccordionDetails>
              Run11
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'Python'} onChange={handleChange('Python')}>
          <AccordionSummary>
            Python
          </AccordionSummary>
            <AccordionDetails>
              Install
            </AccordionDetails>
            <AccordionDetails>
              Cheat Sheet
            </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Java
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Spring
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            Design Pattern
          </AccordionSummary>
        </Accordion>
      </ul>
    </nav>
  );
};

function Article(){
  const [open, setOpen] = useState(false);
  const onToggleOpenState = () => {
    setOpen( !open );
  };

  return(
    <article>
      <div>
        <h2>Article page</h2>
        What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        {ArticlePage}

      </div>
      <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button variant="outlined" onClick={onToggleOpenState}>Create</Button>
          <Button variant="outlined">Update</Button>
        </ButtonGroup>
        <Button variant="outlined">Delete</Button>
      </div>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Create Contents!</DialogContentText>
          <DialogActions>
            <Button variant="outlined">Create</Button>
            <Button variant="outlined" onClick={onToggleOpenState}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </article>
  )
};

function App() {
  return (

    <Container fixed>
      <Header></Header>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={8}>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
