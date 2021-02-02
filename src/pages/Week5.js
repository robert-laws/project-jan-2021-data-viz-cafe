import React from 'react';
import {
  PageTitle,
  Subtitle,
  SectionGroup,
  SectionList,
  SectionTitle,
  SectionContent,
  Image,
} from '../components';
import { SubPage } from '../layout';
import { week5 } from '../context/data/weeksData';
import componentsOfADashboard from '../images/components-of-a-dashboard.png';

export const Week5 = () => {
  return (
    <SubPage>
      <PageTitle>Week 5</PageTitle>
      <SectionList title='Dashboards & Storytelling' lists={week5} />
      <hr />
      <Subtitle>Theory</Subtitle>
      <SectionGroup>
        <SectionTitle id='storytelling-with-data'>
          Storytelling with data
        </SectionTitle>
        <SectionContent>
          <p>
            Data by itself doesn't convey compelling stories. It's up to the
            data analyst and designer to extract the meaningful information from
            the data and put together data in a sequence that tells a story to
            an audience.
          </p>
          <p>
            As you explore your data, think about the story that lies within the
            data that can be told through dashboards and visualizations. Also,
            think about the purpose of the story you want to tell. Is it meant
            to be persuasive, a narrative, a call to action, or something else?
          </p>
          <p>
            Think about how your audience will consume the story. Will they
            experience it hands-on through a computer screen. Will they sit
            through a presentation while hearing commentary from a presenter?
            The way you structure your story will depend on how your audience
            will experience it.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='components-of-a-dashboard'>
          Components of a Dashboard
        </SectionTitle>
        <SectionContent>
          <p>
            Dashboards can vary greatly, but some common components between them
            include:
          </p>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text:
                      'Textual information - used to provide context, give instructions to a user, or add insights to the data being presented.',
                  },
                  {
                    type: 'text',
                    text:
                      'Filters and controls - allow users to change the display of the data to gain different insights.',
                  },
                  {
                    type: 'text',
                    text:
                      'Visualizations - are the core of the dashboard and communicate insight through a single or combination of visualizations.',
                  },
                ],
              },
            ]}
          />
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <Image
                src={componentsOfADashboard}
                alt='Components of a Dashboard'
                captionText='Components of a Dashboard'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <Subtitle>Tableau</Subtitle>
      <SectionGroup>
        <SectionTitle id='building-dashboards'>
          Building Dashboards
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Building Dashboards'
                src='https://www.youtube.com/embed/Wm3VKaPFttM'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='building-stories'>Building Stories</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Building Stories'
                src='https://www.youtube.com/embed/7DugMN9gd-U'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <Subtitle>Useful Links</Subtitle>
      <SectionGroup>
        <SectionTitle id='tableau-help-for-dashboards-and-stories'>
          Tableau Help for Dashboards and Stories
        </SectionTitle>
        <SectionContent>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'link',
                    url:
                      'https://help.tableau.com/current/pro/desktop/en-us/dashboards.htm',
                    text: 'Dashboards in Tableau',
                  },
                  {
                    type: 'link',
                    url:
                      'https://help.tableau.com/current/pro/desktop/en-us/stories.htm',
                    text: 'Stories in Tableau',
                  },
                  {
                    type: 'link',
                    url:
                      'https://help.tableau.com/current/pro/desktop/en-us/story_best_practices.htm',
                    text: 'Best Practices for Telling Great Stories in Tableau',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
    </SubPage>
  );
};
