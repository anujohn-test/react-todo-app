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
      console.log('fn1', text); //tan
      console.log('fn12', addNew); //tan
      console.log('fn23', e.keyCode); //tan
      console.log('fn233', KeyCode); //tan
      console.log('fn24', KeyCode('Enter')); //tan
      if (e.keyCode === KeyCode('Enter') && text) {
        addNew(text);
        console.log('fn2', text); //tan
        setValue(text);
      }
    },
    handleChange: ({ setValue }) => e => {
      setValue(e.target.value);
      console.log('fn3', e.target.value); //tan
    }
  })
);
