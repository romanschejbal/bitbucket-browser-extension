for (const a of document.getElementsByTagName('a')) {
  if (/\/pull-requests\/([0-9]+)/.test(a.href)) {
    a.href += '?w=1';
  }
}
