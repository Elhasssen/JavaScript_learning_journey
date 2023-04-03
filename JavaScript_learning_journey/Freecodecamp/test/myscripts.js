const workWindow = ['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'];
let index = 1;
const tabsBeforeIndex = workWindow.slice(0,index+1);
const tabsAfterIndex = workWindow.slice(index + 1);
const c = tabsBeforeIndex.concat(tabsAfterIndex);