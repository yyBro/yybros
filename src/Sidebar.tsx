import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


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

const SIDEBAR_LIST=[
  {
      link: '/contents/React',
      name: 'React',
  },
  {
      link: '/contents/Python',
      name : 'Python',
  },
  {
      link: '/contents/Java',
      name : 'Java',
  },
  {
      link: '/contents/Spring',
      name :'Spring',
  },
];

const SUB_LIST:any = {
  React : {   
      sublist: ['Install', 'TroubleShooting'],
      link: '/contents/React',
  },
  Python: {
      sublist: ['Install', 'TroubleShooting'],
      link: '/contents/Python',
  },
  Java : {
      sublist: ['Install3', 'TroubleShooting'],
      link: '/contents/Java',
  },
  Spring : {
      sublist: ['Install4', 'TroubleShooting'],
      link: '/contents/Spring',
  },
};

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState<string | false>('React');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <h1>Nav Menu</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>

      {SIDEBAR_LIST.map( item => ( 
        <Accordion expanded={expanded === item.name} onChange={handleChange(item.name)}> 
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              {item.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                 <Typography>
                    {/* <Link to={item.link}>{SUB_LIST[item.name].sublist.map( function(item : any) { return <div>{item}</div> })}</Link> */}
                      {SUB_LIST[item.name].sublist.map( function(list : any) { 
                                                
                        return( 
                          
                          <Link to={item.link+'/'+list}>
                           {/* <Link to={item.link}{list}> */}
                          <div>{list}</div> 
                          </Link>
                        ) })}
                 </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
