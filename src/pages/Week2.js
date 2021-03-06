import React from 'react';
import {
  PageTitle,
  Subtitle,
  SectionGroup,
  SectionList,
  SectionTitle,
  SectionContent,
  Link,
  Image,
} from '../components';
import { SubPage } from '../layout';
import { week2 } from '../context/data/weeksData';
import datasetExample from '../images/dataset-example.png';
import wideData from '../images/wide-data.png';
import tallData from '../images/tall-data.png';
import lineGraph from '../images/line-graph.png';
import areaGraph from '../images/area-graph.png';
import stackedAreaGraph from '../images/stacked-area-graph.png';

const Week2 = () => {
  return (
    <SubPage>
      <PageTitle>Week 2</PageTitle>
      <SectionList title='Datasets & Time Series' lists={week2} />
      <hr />
      <Subtitle>Theory</Subtitle>
      <SectionGroup>
        <SectionTitle id='design-principles-for-color-labeling-shapes-and-sizing'>
          Design principles for color, labeling, shapes, and sizing
        </SectionTitle>
        <SectionContent>
          <p>
            From{' '}
            <Link
              text='Visual Best Practices'
              url='https://help.tableau.com/current/pro/desktop/en-us/visual_best_practices.htm'
            />
          </p>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text:
                      'Color - Too many colors can create visual overload for your users and impede analysis.',
                  },
                  {
                    type: 'text',
                    text:
                      'Labels - Use fonts with data visualizations that are optimized for legibility at small sizes (ex. Tableau typeface)',
                  },
                  {
                    type: 'text',
                    text:
                      'Shapes - Keep the number of shapes lower to improve readability of the visualization',
                  },
                  {
                    type: 'text',
                    text:
                      'Sizing - Balance between visibility and intelligibility of elements on the visualization (ex. use elements - text, chart components, titles - that are big enough to stand out, but not to overlap other elements in the visualization)',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <Subtitle>Data</Subtitle>
      <SectionGroup>
        <SectionTitle id='what-is-a-dataset'>What is a Data Set?</SectionTitle>
        <SectionContent>
          <p>
            A data set is a collection of data. In the case of tabular data, a
            data set corresponds to one or more database tables.
          </p>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={datasetExample}
                alt='Data Set Example'
                captionText='Example of a Data Set'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='data-types'>Data Types</SectionTitle>
        <SectionContent>
          <p>
            Data can be made of several different data types. The following are
            the major data types used in Tableau:
          </p>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text:
                      'String - are typically textual information. Sometimes they can be a combination of text and numbers',
                  },
                  {
                    type: 'text',
                    text: 'Number - can include whole numbers and decimals',
                  },
                  {
                    type: 'text',
                    text:
                      'Date & Time - can appear in several different formats and with different degrees of detail',
                  },
                  {
                    type: 'text',
                    text:
                      'Boolean - or boolean values correspond to the concept of true/false',
                  },
                  {
                    type: 'text',
                    text:
                      'Geographic - corresponds to locations that can be plotted onto a map. Tableau can recognize certain geographic names and concepts',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='categorical-data'>Categorical Data</SectionTitle>
        <SectionContent>
          <p>Represent types of data which may be divided into groups</p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='quantitative-data'>Quantitative Data</SectionTitle>
        <SectionContent>
          <p>
            Expressed in numbers that can have arithmetic operations performed
            on them
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='finding-and-preparing-datasets'>
          Finding and Preparing Datasets
        </SectionTitle>
        <SectionContent>
          <p>
            There are many websites that make data sets available for free,
            including those listed on the{' '}
            <Link text='Resources page' url='/resources' />.
          </p>
          <p>
            A key concept for data preparation in Tableau is that tall is better
            than wide when talking about datasets. Following along the
            information from the{' '}
            <Link
              text='Structure Data for Analysis - Pivot and Unpivot Data'
              url='https://help.tableau.com/current/pro/desktop/en-us/data_structure_for_analysis.htm#pivot-and-unpivot-data'
            />{' '}
            section from the Tableau website.
          </p>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <Image
                src={wideData}
                alt='Wide Data Set'
                captionText='A wide data set, not recommended for Tableau'
              />
            </div>
          </div>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={tallData}
                alt='Tall Data Set'
                captionText='A tall data set, works best in Tableau'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <Subtitle>Tableau</Subtitle>
      <SectionGroup>
        <SectionTitle id='importing-and-reviewing-data'>
          Importing and Reviewing Data
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Importing and Reviewing Data'
                src='https://www.youtube.com/embed/Bl2_IRTReG4'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='joining-data-from-multiple-sheets'>
          Joining Data from Multiple Sheets
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Joining Data from Multiple Sheets'
                src='https://www.youtube.com/embed/FO1ofaz76SM'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='measures-and-dimensions-in-tableau'>
          Measures and Dimensions in Tableau
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Measures and Dimensions in Tableau'
                src='https://www.youtube.com/embed/FYAmviGQ3ps'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='discrete-and-continuous-data-in-tableau'>
          Discrete and Continuous Data in Tableau
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Discrete and Continuous Data in Tableau'
                src='https://www.youtube.com/embed/vIVqKVJOULc'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='working-with-dates-and-time'>
          Working with Dates and Time
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Working with Dates and Time'
                src='https://www.youtube.com/embed/j97N_PseeN4'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>

      <Subtitle>Charts & Graphs</Subtitle>
      <SectionGroup>
        <SectionTitle id='line-chart'>Line Chart</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={lineGraph}
                alt='Line Chart'
                captionText='Line Chart Example'
              />
            </div>
          </div>
          <p>
            Line Charts are used to display quantitative values over a
            continuous interval or time period.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='area-chart'>Area Chart</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={areaGraph}
                alt='Area Chart'
                captionText='Area Chart Example'
              />
            </div>
          </div>
          <p>
            Area Charts are the same as line charts, but with the area below the
            line filled in with a certain colour or texture.
          </p>
        </SectionContent>
      </SectionGroup>

      <SectionGroup>
        <SectionTitle id='stacked-area-chart'>Stacked Area Chart</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={stackedAreaGraph}
                alt='Stacked Area Chart'
                captionText='Stacked Area Chart Example'
              />
            </div>
          </div>
          <p>
            Stacked Area Charts are the same as area charts, but use of multiple
            data series that start each point from the point left by the
            previous data series.
          </p>
        </SectionContent>
      </SectionGroup>
    </SubPage>
  );
};

export default Week2;
