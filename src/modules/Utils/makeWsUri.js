export default function makeWsUri(url) {
  let [uri, prot] = window.location.protocol === 'https:'
      ? ['wss:', 'https']
      : ['ws:', 'http'];

  const re = new RegExp(`^${prot}:\/\/`);
  const retUri = `${uri}//${url.replace(re, '')}/cards/ws`;
  console.log(retUri);
  return retUri;
}
