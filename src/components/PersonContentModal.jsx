import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query';
import {getData, imgUnavailable, img_200} from '../util'
import './ContentModal.css'
import { PersonCarousel } from './PersonCarousel';
import { useState } from 'react';
import { LongText } from './LongText';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily: 'Motserrat',
  marginTop:20,
};

export const PersonContentModal=({children, type, id})=> {
  const [open, setOpen] = useState(false);

  const urlDetails =`https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_API_KEY}` 
    const {data, status} = useQuery(['details', urlDetails], getData)

console.log(data);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //const biography = (data.biography ? (data.biography.length>200 ? data.biography.slice(201) : data.biography): "Sorry, no biography available.");

  return (
    <div>
      <Button onClick={handleOpen} >{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           {status=='success' && 
           <div className="content-modal">
            <img src={data.profile_path ? img_200+data.profile_path : imgUnavailable} alt={data?.name || data?.title} className='personimg' />
            <Box sx={{display:'flex', flexDirection:'column'}}>
            <div><b>{data?.name}</b> </div>
            <div className='tagline'><i>{data.known_for_department}</i></div>
            <div className='overview'><LongText text={data.biography}/></div>

           
            </Box>
           </div>
           }

<div>

<PersonCarousel type={type} id={id} />
</div>

           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}