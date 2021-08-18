import KeyCode from 'keycode';
import { compose, withState, withHandlers } from 'recompose';
//import { addNew } from '../ui/StateProvider';

export default compose(
  withState('value', 'setValue', props => {
    console.log('got props', props);
    return props.value || '';
  }),
  withHandlers({
    handleKeyUp: ({ addNew, setValue }) => e => {
      const text = e.target.value.trim();
      if (e.keyCode === KeyCode('Enter') && text) {
        addNew(text);
        setValue('');
      }
    },
    handleChange: ({ setValue }) => e => {
      setValue(e.target.value);
    }
  })
);
