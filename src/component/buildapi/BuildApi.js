import React from 'react';
import './BuildApi.css';
import databaseIcon from '../../img/database.png';
import authIcon from '../../img/auth.png';
import contentIcon from '../../img/content.png';
import functionIcon from '../../img/function.png';
import graphqlIcon from '../../img/graphql.png';
import mediaIcon from '../../img/media.png';
import rolesIcon from '../../img/roles.png';
import webhooks from '../../img/webhooks.png';

const BuildApi = () => {
  const buildArr = [
    {
      icon: databaseIcon,
      name: 'Database Modeling',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      icon: contentIcon,
      name: 'Content Management',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      icon: functionIcon,
      name: 'Functions',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      icon: graphqlIcon,
      name: 'GraphQL & REST Api',
      text: 'Get your blood tests delivered athome collect a sample from theyour blood tests.'
    },
    {
      icon: authIcon,
      name: 'Auth Module',
      text: 'Enable one click JWT Token based authentication for your project with easily '
    },
    {
      icon: webhooks,
      name: 'Webhooks',
      text: 'You can now trigger webhooks whenever a data inserts/updates or deletes. '
    },
    {
      icon: mediaIcon,
      name: 'Media CDN',
      text: 'Write and easily filter content in multiple languages at a time through '
    },
    {
      icon: rolesIcon,
      name: 'Roles & Permissions',
      text: 'Conrole use api access through our robust roles & permissions management system '
    }
  ];
  return (
    <div className='build__content'>
      <div className='section__text'>Powerful & Flexible</div>
      <div className='section__heading'>
        Everything you need to build your API
      </div>
      <div className='card__contain'>
        {buildArr.map((e, indx) => {
          return (
            <div className='build__card' key={indx}>
              <div className='cardIcon'>
                <img src={e.icon} alt='' />
              </div>
              <div className='cardName'>{e.name}</div>
              <div className='card__text'>{e.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuildApi;
