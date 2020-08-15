import React from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import health from '../../Data/health.json';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions({data, i}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let healthInfo = health.data.filter(data => data.name==data.name);
  console.log(healthInfo);
  console.log(data);
  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel'+i} onChange={handleChange('panel'+i)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{data.name}</Typography>
          <Typography className={classes.secondaryHeading}>Number : {data.number} Data : {data.entryTime}</Typography>
        </AccordionSummary>
        <AccordionDetails id="DetailDisplay">
          <Typography >
            {data.name} 's description!<br />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
