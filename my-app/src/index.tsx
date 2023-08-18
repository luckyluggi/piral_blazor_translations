import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi, createLocaleApi } from 'piral';
import { layout, errors } from './layout';
import { createBlazorApi } from 'piral-blazor';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

function getInitialLanguage(): string{
  let result = localStorage.getItem("language");
  if(!result){
    result = navigator.language
  } else{
    result = result.replace(/"/g, '');
  }
  return result
}

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [
    ...createStandardApi(),
    createLocaleApi(),
    createBlazorApi({
      lazy: true,
      initialLanguage: getInitialLanguage()
    })
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
