import React, { useEffect } from 'react';
import { PageTitle, Subtitle, SectionContent } from '../components';
import { SubPage } from '../layout';

export const Visualizations = () => {
  useEffect(() => {
    if (document.getElementById('viz1610192503234')) {
      var divElementMap = document.getElementById('viz1610192503234');
      var vizElementMap = divElementMap.getElementsByTagName('object')[0];

      if (vizElementMap) {
        vizElementMap.style.width = '100%';
        vizElementMap.style.height = divElementMap.offsetWidth * 0.75 + 'px';
        var scriptElementMap = document.createElement('script');
        scriptElementMap.src =
          'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElementMap.parentNode.insertBefore(scriptElementMap, vizElementMap);
      }
    }

    if (document.getElementById('viz1610193687947')) {
      var divElementMenuTable = document.getElementById('viz1610193687947');
      var vizElementMenuTable = divElementMenuTable.getElementsByTagName(
        'object'
      )[0];

      if (vizElementMenuTable) {
        vizElementMenuTable.style.width = '100%';
        vizElementMenuTable.style.height =
          divElementMenuTable.offsetWidth * 0.6 + 'px';
        var scriptElementMenuTable = document.createElement('script');
        scriptElementMenuTable.src =
          'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElementMenuTable.parentNode.insertBefore(
          scriptElementMenuTable,
          vizElementMenuTable
        );
      }
    }
  }, []);

  return (
    <SubPage>
      <PageTitle>Visualizations from Tableau</PageTitle>
      <SectionContent>
        The visualizations below are embedded from Tableau Public and are based
        on the{' '}
        <a href='datasets/data-viz-cafe-dataset.xlsx'>Data Viz Cafe Data set</a>{' '}
        and built with{' '}
        <a href='https://public.tableau.com/en-us/s/'>Tableau Public</a>. The
        visualizations are meant to describe the data and show different types
        of visualizations that are possible with Tableau.
      </SectionContent>
      <section className='section'>
        <Subtitle>Map of All Data Viz Cafe Locations</Subtitle>
        <div
          className='tableauPlaceholder'
          id='viz1610192503234'
          style={{ position: 'relative' }}
        >
          <noscript>
            <a href='/visualizations'>
              <img
                alt='Locations Map'
                src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DataVizCafe&#47;LocationsMap&#47;1_rss.png'
                style={{ border: 'none' }}
              />
            </a>
          </noscript>
          <object class='tableauViz' style={{ display: 'none' }}>
            <param
              name='host_url'
              value='https%3A%2F%2Fpublic.tableau.com%2F'
            />{' '}
            <param name='embed_code_version' value='3' />{' '}
            <param name='site_root' value='' />
            <param name='name' value='DataVizCafe&#47;LocationsMap' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param
              name='static_image'
              value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DataVizCafe&#47;LocationsMap&#47;1.png'
            />{' '}
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      </section>
      <section className='section'>
        <Subtitle>Data Table of All Menu Items</Subtitle>
        <div
          className='tableauPlaceholder'
          id='viz1610193687947'
          style={{ position: 'relative' }}
        >
          <noscript>
            <a href='/visualizations'>
              <img
                alt=' '
                src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DataVizCafe&#47;MenuItems&#47;1_rss.png'
                style={{ border: 'none' }}
              />
            </a>
          </noscript>
          <object class='tableauViz' style={{ display: 'none' }}>
            <param
              name='host_url'
              value='https%3A%2F%2Fpublic.tableau.com%2F'
            />{' '}
            <param name='embed_code_version' value='3' />{' '}
            <param name='site_root' value='' />
            <param name='name' value='DataVizCafe&#47;MenuItems' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param
              name='static_image'
              value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DataVizCafe&#47;MenuItems&#47;1.png'
            />{' '}
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      </section>
    </SubPage>
  );
};
