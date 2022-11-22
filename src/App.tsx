import './App.css';
import React, {useState} from 'react';
//import DjangoPage from './component/DjangoPage';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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
import Typography from '@mui/material/Typography';

function Header(){
  return (
    <header>
      <h1>Welcome</h1>
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
            REACT
          </AccordionSummary>
          <AccordionDetails>
            Install
          </AccordionDetails>
          <AccordionDetails>
            Run
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'Python'} onChange={handleChange('Python')}>
          <AccordionSummary>
            <li>Python</li>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <li>Java</li>
        </Accordion>
        <Accordion>
          <li>Spring</li>
        </Accordion>
        <Accordion>
          <li>Pattern</li>
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
      <Grid container>
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
