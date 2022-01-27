import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Task from './Task';
import reportWebVitals from './reportWebVitals';
import apradipta from './assets/img/apradipta.jpg';
import ferajelita from './assets/img/ferajelita.png';
import punipun from './assets/img/punipun.png';
import charlie from './assets/img/charlie.jpg';

import coverApradipta from './assets/img/cover-apradipta.jpg';
import coverFerajelita from './assets/img/cover-ferajelita.jpg';
import coverPunipun from './assets/img/cover-punipun.jpg';
import coverCharlie from './assets/img/cover-charlie.jpg';

ReactDOM.render(
  <React.StrictMode>
    <Task 
      name="Fera Jelita" 
      username="@FeraJelly" 
      description="Hola! Fera Jelita is here! Let's trakteer kerupuk udang! Thanks love!✨" 
      count="1.3k" 
      job="Cosplay"
      profile={ferajelita}
      banner={coverFerajelita}
    />
    <Task 
      name="Clarissa Punipun" 
      username="@punipun7" 
      description="✨ Klik Follow. International: ko-fi.com/punipun7 ✨ Baca Wajah: Cek 'Post'" 
      count="3.8k" 
      job="Virtual Youtub"
      profile={punipun}
      banner={coverPunipun}
    />
    <Task 
      name="A. Pradipta" 
      username="@APradipta" 
      description="Ada suatu masa ketika sang pencipta merasa tidak akan pernah berhenti berkarya." 
      count="100k" 
      job="Comic Artist"
      profile={apradipta}
      banner={coverApradipta}
    />
    <Task 
      name="Charlie" 
      username="@charlie" 
      description="Pengorbanan, usaha & doa tidak pernah menghianati hasil" 
      count="1.7k" 
      job="Illustrator"
      profile={charlie}
      banner={coverCharlie}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
