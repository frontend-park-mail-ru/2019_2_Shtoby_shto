export default function generateAvatar(name) {
  let hash = 0;
  let color = '#';
  let i;
  let value;

  if (!name) {
    return color + '333333';
  }

  const strLength = name.length;

  for (i = 0; i < strLength; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (i = 0; i < 3; i++) {
    value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
}
