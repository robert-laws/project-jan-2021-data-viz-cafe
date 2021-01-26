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
import { week4 } from '../context/data/weeksData';
import geographicCoordinates from '../images/geographic-coordinates.png';
import electionMap2020 from '../images/election-map-2020.png';
import blackDeathMap from '../images/black-death-map.png';
import australiaAnnualRainfallMap from '../images/australia-annual-rainfall-map.png';
import dotMap from '../images/dot-map.png';
import choroplethMap from '../images/choropleth-map.png';

export const Week4 = () => {
  return (
    <SubPage>
      <PageTitle>Week 4</PageTitle>
      <SectionList title='Geographic Data' lists={week4} />
      <hr />
      <Subtitle>Theory</Subtitle>
      <SectionGroup>
        <SectionTitle id='combining-maps-and-data'>
          Combining Maps and Data
        </SectionTitle>
        <SectionContent>
          <p>
            The combination of maps and data can result in some powerful
            visualizations. The different types of visualizations used with maps
            include electorial maps, weather maps, historical maps, and more.
          </p>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={electionMap2020}
                alt='2020 Presidential Election Map'
                captionText='2020 Presidential Election Map'
              />
            </div>
          </div>
          <p>
            This{' '}
            <a href='https://www.nytimes.com/interactive/2020/11/03/us/elections/results-president.html'>
              election map from the NYTimes
            </a>{' '}
            shows who won the electoral votes from each state.
          </p>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={blackDeathMap}
                alt='Map showing the spread of the Black Death in Europe'
                captionText='Map showing the spread of the Black Death in Europe'
              />
            </div>
          </div>
          <p>
            Map showing{' '}
            <a href='https://als.wikipedia.org/wiki/Pandemie#/media/Datei:Pestilence_spreading_1347-1351_europe.png'>
              spread of the black death in Europe
            </a>{' '}
            between 1347 and 1351.
          </p>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={australiaAnnualRainfallMap}
                alt='Australia Annual Rainfall Map'
                captionText='Australia Annual Rainfall Map'
              />
            </div>
          </div>
          <p>
            Map from the{' '}
            <a href='http://www.bom.gov.au/'>
              Australian Bureau of Meteorology
            </a>{' '}
            shows how much rain falls in Australia annually.
          </p>
        </SectionContent>
      </SectionGroup>

      <Subtitle>Data</Subtitle>
      <SectionGroup>
        <SectionTitle id='types-of-geographic-data'>
          Types of Geographic Data
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={geographicCoordinates}
                alt='Geographic Coordinates System'
                captionText='Geographic Coordinates System'
              />
            </div>
          </div>
          <p></p>
          <strong>
            Other types of geographic data that can be used in Tableau
          </strong>
          <SectionList
            lists={[
              {
                items: [
                  {
                    type: 'text',
                    text: 'Airport',
                  },
                  {
                    type: 'text',
                    text: 'Area Code (U.S.) - U.S. telephone area codes',
                  },
                  {
                    type: 'text',
                    text: 'City',
                  },
                  {
                    type: 'text',
                    text: 'Congressional District (U.S.)',
                  },
                  {
                    type: 'text',
                    text: 'Country/Region',
                  },
                  {
                    type: 'text',
                    text:
                      'County - Second-level administrative divisions for select countries',
                  },
                  {
                    type: 'text',
                    text:
                      'NUTS (Nomenclature of Territorial Units for Statistics) Europe',
                  },
                  {
                    type: 'text',
                    text: 'State/Province',
                  },
                  {
                    type: 'text',
                    text: 'ZIP Code/Postcode',
                  },
                ],
              },
            ]}
          />
        </SectionContent>
      </SectionGroup>
      <Subtitle>Tableau</Subtitle>
      <SectionGroup>
        <SectionTitle id='building-maps-with-data'>
          Building Maps with Data
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Building Maps with Data'
                src='https://www.youtube.com/embed/jeTyrpNbMSE'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='fixing-geographic-mismatch-problems'>
          Fixing Geographic Mismatch Problems
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Fixing Geographic Mismatch Problems'
                src='https://www.youtube.com/embed/oLcrBIiNZyA'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='using-basemaps-and-visual-enhancements'>
          Using Basemaps and Visual Enhancements
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Using Basemaps and Visual Enhancements'
                src='https://www.youtube.com/embed/bhZTF4UWMZc'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='map-layers-and-options'>
          Map Layers and Options
        </SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <iframe
                style={{ width: '100%', minHeight: '450px' }}
                title='Map Layers and Options'
                src='https://www.youtube.com/embed/jPwBW-5pZQk'
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
        <SectionTitle id='choropleth-map'>Choropleth Map</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image
                src={choroplethMap}
                alt='Choropleth Map'
                captionText='Choropleth Map Example'
              />
            </div>
          </div>
          <p>
            Choropleth Maps show maps with filled-in areas equaling the level of
            detail for the geographic data used in the map.
          </p>
        </SectionContent>
      </SectionGroup>
      <SectionGroup>
        <SectionTitle id='dot-map'>Dot Map</SectionTitle>
        <SectionContent>
          <div className='columns'>
            <div className='column is-three-fifths is-offset-one-fifth'>
              <Image src={dotMap} alt='Dot Map' captionText='Dot Map Example' />
            </div>
          </div>
          <p>
            Dot maps place a dot or symbol on maps corresponding to a match
            based on the geographic data used.
          </p>
        </SectionContent>
      </SectionGroup>
    </SubPage>
  );
};
