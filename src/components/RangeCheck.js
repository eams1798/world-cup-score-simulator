import './styles/RangeCheck.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function RangeCheck ({label, state, changeState}) {
  const [t, ] = useTranslation('title');
  const [tTZ, ] = useTranslation('tz');

  const labelState = (label === 'Language') ?
    (state === 'en'? 'Cambiar a Español': (state === 'es'? 'Change to English': `Change to ${state}`))
    : `${tTZ(label)}: ${state}`;
  
  useEffect(() => {
    /* Translates the title of the app */
    document.title = t('title');
   });
  return (
    <div className="setting">
      <input type="checkbox" id={label.toLowerCase()} onChange={changeState} />
      <label htmlFor={label.toLowerCase()}>{labelState}</label>
    </div>
  );
}