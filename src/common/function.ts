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
export {
  localStorageHandle, sessionStorageHandle
}