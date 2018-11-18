import React from 'react';

const Translate = props => {
  const i18nObject = props.data;
  const language = props.language;
  if (i18nObject[language]) {
    return i18nObject[language];
  } else {
    return i18nObject['en'];
  }
}

export default Translate;
