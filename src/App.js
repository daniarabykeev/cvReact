import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: 'https://i.ibb.co/ckM0kjD/photo322.jpg',
      name: 'Данияр Абыкеев',
      profession: 'FrontEnd разработчик ))',
      bio: '❤ Программирование ❤ Front end ❤ Учится',
      address: 'Bishkek, Kyrgyzstan',
      social: [
        {name: 'facebook', url: 'https://facebook.com'},
        {name: 'twitter', url: 'https://twitter.com'},
        {name: 'github', url: 'https://github.com/daniarabykeev'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/daniar-abykeev-b5b9b9234/'}
      ],
      experience: [
        {jobTitle: 'FrontEnd', company: 'Makers', startDate: 'Jan 24 2022', endDate: 'Present', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      education: [
        {degree: 'КНУ', institution: 'ИИМОП ФМО', startDate: 'Sep 2005', endDate: 'may 2010', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Makers', date: 'April 2022', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
      ],
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Skills skills={person.skills} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
