// import Cookies from 'js-cookie';
const localStorageHandle = (type: string, itemName: string, value?: any) => {
  switch (type) {
    case 'get': {
      const getItem = localStorage.getItem(itemName);
      return getItem && getItem !== 'undefined' ? JSON.parse(getItem) : null;
    }
    case 'set':
      return localStorage.setItem(itemName, JSON.stringify(value));
    case 'remove':
      return localStorage.removeItem(itemName);
  }
};
const sessionStorageHandle = (type: string, itemName: string, value?: any) => {
  switch (type) {
    case 'get': {
      const getItem = sessionStorage.getItem(itemName);
      return getItem && getItem !== 'undefined' ? JSON.parse(getItem) : null;
    }
    case 'set':
      return sessionStorage.setItem(itemName, JSON.stringify(value));
    case 'remove':
      return sessionStorage.removeItem(itemName);
  }
};

// const cookies = (type: string, name: string, value?: any, days = 30): any => {
//   if (type === 'set') {
//     Cookies.set(name, JSON.stringify(value), { expires: days });
//   }
//   if (type === 'get') {
//     return JSON.parse(Cookies.get(name) || 'null');
//   }
//   if (type === 'delete') {
//     Cookies.remove(name);
//   }
// };
const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};
const querify = (object: any): any => {
  if (object === null || object === undefined) return 'null';
  if (typeof object === 'number') return `${object}`;
  if (Array.isArray(object)) {
    const arr = object.map((item) => querify(item));
    return `[${arr}]`;
  }
  if (typeof object === 'object') {
    const keys = Object.keys(object);
    let str = '';
    keys.forEach((key) => {
      str = `${str} ${key}: ${querify(object[key])},`;
    });
    return `{${str}}`;
  }
  return `"${object}"`;
};
const queryify = (obj: any, keepNull?: boolean): any => {
  if (obj === null || obj === undefined) {
    return 'null';
  }

  // Make sure we don't alter integers.
  if (typeof obj === 'number') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return `[${obj.map((v) => queryify(v)).join(',')}]`;
  }

  // Stringify everything other than objects.
  if (typeof obj !== 'object') {
    if (obj === '') return 'null';
    return JSON.stringify(obj);
  }

  // Iterate through object keys to convert into a string
  // to be interpolated into the query.
  let props;
  if (keepNull) {
    props = Object.keys(obj)
      .map((key) => {
        return `${key}:${queryify(obj[key], true)}`;
      })
      .join(',');
  } else {
    props = Object.keys(obj)
      .map((key) => {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
          if (key === 'states') {
            return `${key}:${queryify(obj[key]).replace(/"/gi, '')}`;
          } else {
            return `${key}:${queryify(obj[key])}`;
          }
        } else {
          return '';
        }
      })
      .join(',');
  }

  return `{${props}}`;
};
const notification = async ({ type = 'success', message = '', duration = 1000, className = '' }) => {
  const rndInt = Math.floor(Math.random() * 600) + 1;
  const typeClass: string =
    type === 'success' ? 'border-royal-green text-royal-green' : 'border-royal-red text-royal-red';
  const renderCompont = `
  <div class="message-box message-dialog right-25px border-2 bg-white px-20px py-5px rounded fixed text-white align-middle ${typeClass} ${className} notification-${rndInt}">
    ${message}
  </div>
  `;
  const nodeRender = document.createElement('div');
  document.querySelector('#app')?.appendChild(nodeRender);
  nodeRender.innerHTML = renderCompont;
  const elementItem = document.getElementsByClassName(`notification-${rndInt}`)[0];

  if (elementItem !== null) {
    await setTimeout(() => {
      elementItem.classList.add('show');
    }, 200);
    await setTimeout(async () => {
      elementItem.classList.remove('show');
    }, duration);
    await setTimeout(() => {
      elementItem?.parentNode?.removeChild(elementItem);
    }, duration + 500);
    await setTimeout(() => {
      nodeRender.remove();
    }, duration + 600);
  }
};
export {
  localStorageHandle, sessionStorageHandle, notification, querify, queryify, scrollToTop
}