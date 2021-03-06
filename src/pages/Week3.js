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
import { week3 } from '../context/data/weeksData';
import dataTable from '../images/data-table.png';
import highlightTable from '../images/highlight-table.png';
import heatMap from '../images/heat-map.png';
import scatterPlot from '../images/scatter-plot.png';
import bubbleChart from '../images/bubble-chart.png';
import descriptiveAnalytics from '../images/descriptive-analytics.png';
import kpi from '../images/kpi.png';

const Week3 = () => {
  return (
    <SubPage>
      <PageTitle>Week 3</PageTitle>
      <SectionList title='Data Analytics' lists={week3} />
      <hr />
      <Subtitle>Theory</Subtitle>
      <SectionGroup>
        <SectionTitle id='the-value-of-data-analytics'>
          The Value of Data Analytics
        </SectionTitle>
        <SectionContent>
          <blockquote>
            <strong>What is Data Analytics?</strong>
            <br />
            Data Analytics the process of analyzing raw data, often with the aid
            of data visualizations, to find trends and answer questions.
          </blockquote>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='stages-of-data-analytics'>
          Stages of Data Analytics
        </SectionTitle>
        <SectionContent>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text: 'Descriptive Analytics - reviewing historical data',
                  },
                  {
                    type: 'text',
                    text:
                      'Predictive Analytics - predicting future outcomes from historical data',
                  },
                  {
                    type: 'text',
                    text:
                      'Prescriptive Analytics - providing recommendations based on data',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='descriptive-analytics'>
          Descriptive Analytics
        </SectionTitle>
        <SectionContent>
          <p>
            Descriptive Analytics - make use of historical data to gain insights
            into some type of event, business practice, or other phenomena that
            has data associated with it.
          </p>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <Image
                src={descriptiveAnalytics}
                alt='Descriptive Analytics'
                captionText='Descriptive Analytics shows insights based on historical data'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='key-performance-indicators'>
          Key Performance Indicators (KPI)
        </SectionTitle>
        <SectionContent>
          <p>
            Quantitative data points that can be used to define success (or
            failure) and are easily displayed and digested.
          </p>
          <div className='columns'>
            <div className='column is-4 is-offset-4'>
              <Image
                src={kpi}
                alt='Key Performance Indicators'
                captionText='Key Performance Indicators are the critical (key) indicators of progress toward an intended result'
              />
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='aggregation'>Aggregation</SectionTitle>
        <SectionContent>
          <p>
            Aggregation is where the values of multiple rows are grouped
            together to form a single summary value
          </p>
          <p>
            <Link
              text='Data Aggregation in Tableau - Article'
              url='https://help.tableau.com/current/pro/desktop/en-us/calculations_aggregation.htm'
            />
          </p>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text: 'Sum by adding all values together',
                  },
                  {
                    type: 'text',
                    text:
                      'Average by adding all and dividing by number of values',
                  },
                  {
                    type: 'text',
                    text:
                      'Other functions such as finding the Median, Maximum, Minimum values',
                  },
                  {
                    type: 'text',
                    text: 'Custom aggregations',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <Subtitle>Tableau</Subtitle>
      <SectionGroup>
        <SectionTitle id='viewing-data-in-tables'>Data Tables</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Data Tables'
                src='https://www.youtube.com/embed/j3ubKUW6J9w'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='data-grouping-and-hierarchies'>
          Data Grouping and Hierarchies
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Data Grouping and Hierarchies'
                src='https://www.youtube.com/embed/L8pSg2cDZUw'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='working-with-aggregated-data'>
          Working with Aggregated Data
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Working with Aggregated Data'
                src='https://www.youtube.com/embed/pUkZrl_cmt0'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='examining-relationships-between-quantitative-values'>
          Examining Relationships between Quantitative Values
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Examining Relationships between Quantitative Values'
                src='https://www.youtube.com/embed/ICFK2wyHZlQ'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='creating-calculated-fields'>
          Creating Calculated Fields
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Creating Calculated Fields'
                src='https://www.youtube.com/embed/U6yO8qntbM0'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='using-quick-table-calculations-and-reference-lines'>
          Using Quick Table Calculations and Reference Lines
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Creating Calculated Fields'
                src='https://www.youtube.com/embed/c2W7sksA5uI'
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
        <SectionTitle id='data-table'>Data Table</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={dataTable}
                alt='Data Table'
                captionText='Data Table Example'
              />
            </div>
          </div>
          <p>
            Data Tables provide a text-only version of the data, often also
            called a pivot table.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='highlight-tables'>Highlight Table</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={highlightTable}
                alt='Highlight Table'
                captionText='Highlight Table Example'
              />
            </div>
          </div>
          <p>
            Highlight Tables are like data tables but add a color range or
            gradient to highlight differences in the data.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='heatmaps'>Heat Map</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={heatMap}
                alt='Heat Map'
                captionText='Heat Map Example'
              />
            </div>
          </div>
          <p>
            Heat Maps combine color variations with size variations to display
            multiple data points in the visualization.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='scatter-plot'>Scatter Plot</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={scatterPlot}
                alt='Scatter Plot'
                captionText='Scatter Plot Example'
              />
            </div>
          </div>
          <p>
            Scatter Plots situate data along axes defined by two quantitative
            ranges.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='bubble-charts'>Bubble Chart</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={bubbleChart}
                alt='Bubble Chart'
                captionText='Bubble Chart Example'
              />
            </div>
          </div>
          <p>
            Bubble Charts are like scatter plots, but add additional
            quantitative measures to the visualization, often through color or
            size.
          </p>
        </SectionContent>
      </SectionGroup>
    </SubPage>
  );
};

export default Week3;
