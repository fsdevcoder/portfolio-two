import React from 'react';

import { EDUCATION } from '../../mockData/education';
import { EMPLOYMENT_HISTORY } from '../../mockData/employmentHistory';
import { ABOUT_ME_SECTION } from '../../mockData/sectionHeadings';
import EducationItem from './educationItem';
import EmploymentItem from './employmentItem';

export default function AboutMe() {
  return (
    <section className='section about-me' data-section='section1'>
      <div className='container'>
        <div className='section-heading'>
          <h2>{ABOUT_ME_SECTION.title}</h2>
          <div className='line-dec'></div>
          <span>{ABOUT_ME_SECTION.description}</span>
        </div>

        <div className='right-image-post'>
          <div className='row'>
            <div className='col-md-12'>
              <h4>Education</h4>
              {EDUCATION.map((item) => (
                <EducationItem
                  key={item.id}
                  title={item.title}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='right-image-post'>
          <div className='row'>
            <div className='col-md-12'>
              <h4>Employment History</h4>
              {EMPLOYMENT_HISTORY.map((item) => (
                <EmploymentItem
                  key={item.id}
                  company={item.company}
                  position={item.position}
                  period={item.period}
                  description={item.description}
                  responsibilities={item.responsibilities}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
