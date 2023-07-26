import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import check from '../../assets/check.svg'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import File from '../File/File';
import { Link } from 'react-router-dom';

export default function BasicAccordion() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className=' pb-[20px]'>
      <Accordion sx={{boxShadow:"2px 2px 7px gray"}} className='my-[20px] '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"18px",fontWeight:"700"}} className='text-[#D74C20] text-[18px] font-[700]' >Менеджер по продажам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Должностные обязанности:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Продажи компьютерного оборудования</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Проведение переговоров и подготовка коммерческих предложений</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Выполнение плана по продажам</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Требования:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Честность, порядочность, пунктуальность, активность, коммуникабельность, бесконфликтность</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Умение работать с большим количеством позиций</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Умение составлять спецификации и коммерческие предложения для клиентов</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Активное ведение сделок и полное участие в проектах</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]  py-[10px]'> <img src={check} alt="" />Умение вести переговоры</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Условия:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Полный рабочий день</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Испытательный срок два месяца</p>
          </AccordionDetails>
          <Button  onClick={handleClickOpen} variant='contained' sx={{backgroundColor:"#D74C20",margin:"0px 0px 30px 0px"}}>Отправить Резюме</Button>
      </Accordion>
      <Accordion  sx={{boxShadow:"2px 2px 7px gray"}}  className='my-[20px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"18px",fontWeight:"700"}} className='text-[#D74C20] text-[18px] font-[700]' >Менеджер по продажам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Должностные обязанности:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Продажи компьютерного оборудования</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Проведение переговоров и подготовка коммерческих предложений</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Выполнение плана по продажам</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Требования:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Честность, порядочность, пунктуальность, активность, коммуникабельность, бесконфликтность</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Умение работать с большим количеством позиций</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Умение составлять спецификации и коммерческие предложения для клиентов</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Активное ведение сделок и полное участие в проектах</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]  py-[10px]'> <img src={check} alt="" />Умение вести переговоры</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Условия:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Полный рабочий день</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Испытательный срок два месяца</p>
          </AccordionDetails>
          <Button onClick={handleClickOpen} variant='contained' sx={{backgroundColor:"#D74C20",margin:"0px 0px 30px 0px"}}>Отправить Резюме</Button>
      </Accordion>
      <Accordion  sx={{boxShadow:"2px 2px 7px gray "}}  className='my-[20px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize:"18px",fontWeight:"700"}} className='text-[#D74C20] text-[18px] font-[700]' >Менеджер по продажам</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Должностные обязанности:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Продажи компьютерного оборудования</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Развитие, поддержание отношений с новыми и существующими клиентами компании</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Проведение переговоров и подготовка коммерческих предложений</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Выполнение плана по продажам</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Требования:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Честность, порядочность, пунктуальность, активность, коммуникабельность, бесконфликтность</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Умение работать с большим количеством позиций</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Умение составлять спецификации и коммерческие предложения для клиентов</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Активное ведение сделок и полное участие в проектах</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]  py-[10px]'> <img src={check} alt="" />Умение вести переговоры</p>
        </AccordionDetails>
        <AccordionDetails>
          <Typography sx={{fontWeight:"700",fontSize:"18px"}} className=' text-[#333]'>
          Условия:
          </Typography>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686] py-[10px]'> <img src={check} alt="" /> Полный рабочий день</p>
          <p className='text-[16px] flex items-center gap-1 font-[400] text-[#868686]'> <img src={check} alt="" /> Испытательный срок два месяца</p>
          </AccordionDetails>
          <Button  onClick={handleClickOpen} variant='contained' sx={{backgroundColor:"#D74C20",margin:"0px 0px 30px 0px"}}>Отправить Резюме</Button>
      </Accordion>
      <div>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{fontWeight:"700"}} className='text-center text-[#0D4373]'>Рeзюме</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:"700",fontSize:"18px"}} className='text-center text-[#333]'>
          Пожалуйста, заполните форму ниже
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ваше имя"
            type="email"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Контактный телефон"
            type="email"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="E-mail (обязательно)"
            type="email"
            fullWidth
            variant="outlined"
          />
          <FormControl sx={{ m: 1, minWidth: 220 }} size="medium">
      <InputLabel id="demo-select-medium-label">Вакансия</InputLabel>
      <Select
        labelId="demo-select-medium-label"
        id="demo-select-medium"
        value={age}
        label="Age"
        fullWidth
        onChange={handleChange}
        variant='filled'
      >
        <MenuItem value="">
          <em>Менеджер по продажам</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <File/>
    <TextField
            autoFocus
            margin="dense"
            id="text"
            label="Сообщение"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Link to={"/vakansiy"}>
          <Button onClick={handleClose}>Subscribe</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}