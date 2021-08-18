import KeyCode from 'keycode';

export const MODE_NONE = 'none';
export const MODE_SEARCH = 'search';
export const MODE_CREATE = 'create';

export function getNextModeByKey(current, keyPressed) {
  switch (current) {
    case MODE_NONE:
      if (keyPressed === KeyCode('/')) return MODE_SEARCH;
      if (keyPressed === KeyCode('N')) return MODE_CREATE;

      break;

    default:
      if (keyPressed === KeyCode('Esc')) return MODE_NONE;
  }

  return current;
}
