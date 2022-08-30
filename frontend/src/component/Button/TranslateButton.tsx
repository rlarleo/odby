import { Button, ButtonGroup } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import i18n from "i18next";
import '../../i18n/index.js'

type TranslateButtonProps = {
  language: 'ko' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<"ko" | "en">>;
};


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  borderColor: 'white',
  backgroundColor: 'black',  textTransform: 'none',
  '&:root': {
    minWidth: '80px',
  },
  '&:hover': {
    backgroundColor: 'grey',
    borderColor: 'white',
  },
  '&:disabled': {
    backgroundColor: 'white',
    borderColor: 'white',
    color: 'black',
  },
}));


const TranslateButton: React.FC<TranslateButtonProps> = ({language , setLanguage}) => {
  const onChangeLang = (test: 'ko' | 'en') => {
    i18n.changeLanguage(test)
    setLanguage(test)
  }
  return (
    <ButtonGroup
      disableElevation
      variant="outlined"
      sx={{ color: 'white', borderColor: 'white' }}
    >
      <ColorButton
        disabled={language === 'ko'}
        onClick={(e) => onChangeLang('ko')}
      >
        Korean
      </ColorButton>
      <ColorButton
        disabled={language === 'en'}
        onClick={(e) => onChangeLang('en')}
      >
        English
      </ColorButton>
    </ButtonGroup>
  );
};

export default TranslateButton;