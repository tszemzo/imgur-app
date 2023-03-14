import { useState } from 'react';
import { SECTIONS, SORT, WINDOW } from '../../utils/constants';

import {
  Button,
  Checkbox,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';

const GalleryFilters = ({ onSearchClick }) => {
  const [section, setSection] = useState(SECTIONS.HOT);
  const [sort, setSort] = useState(SORT.VIRAL);
  const [window, setWindow] = useState(WINDOW.DAY);
  const [showViral, setShowViral] = useState(true);

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 15 }}>
        <div>
          <InputLabel id="section-label">Section</InputLabel>
          <Select
            id="section-select"
            value={section}
            label="Section"
            onChange={(e) => { setSection(e.target.value) }}
            style={{ width: '300px' }}
          >
            <MenuItem value={SECTIONS.HOT}>hot</MenuItem>
            <MenuItem value={SECTIONS.TOP}>top</MenuItem>
            <MenuItem value={SECTIONS.USER}>user</MenuItem>
          </Select>
        </div>
        <div>
          <InputLabel id="sort-label">Sort</InputLabel>
          <Select
            id="sort-select"
            value={sort}
            label="Sort"
            onChange={(e) => { setSort(e.target.value) }}
            style={{ width: '300px' }}
          >
            <MenuItem value={SORT.VIRAL}>viral</MenuItem>
            <MenuItem value={SORT.TOP}>top</MenuItem>
            <MenuItem value={SORT.TIME}>time</MenuItem>
            <MenuItem disabled={section !== SECTIONS.USER} value={SORT.RISING}>rising</MenuItem>
          </Select>
        </div>
        <div>
          <InputLabel id="window-label">Window</InputLabel>
          <Select
            id="window-select"
            value={window}
            label="Window"
            onChange={(e) => { setWindow(e.target.value) }}
            disabled={section !== SECTIONS.TOP}
            style={{ width: '300px' }}
          >
            <MenuItem value={WINDOW.DAY}>day</MenuItem>
            <MenuItem value={WINDOW.WEEK}>week</MenuItem>
            <MenuItem value={WINDOW.MONTH}>month</MenuItem>
            <MenuItem value={WINDOW.YEAR}>year</MenuItem>
            <MenuItem value={WINDOW.ALL}>all</MenuItem>
          </Select>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {
          section === SECTIONS.USER 
            ? (
              <div style={{ display: 'flex' }}>
                <Checkbox
                  defaultChecked 
                  onChange={(e) => { setShowViral(e.target.checked) }}
                />
                <Typography sx={{ margin: 'auto' }}>
                  Viral images
                </Typography>
              </div>
            )
            : <div></div> // empty div to keep the layout
        }
        <Button
          variant='contained'
          onClick={() => onSearchClick({ section, sort, window, showViral })}
        >
          Search
        </Button>
      </div>
    </Container>
    
  )
}

export default GalleryFilters;
