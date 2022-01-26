import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const opts = useSelector<RootState>( state => state.form.fields)
const Input = ({type, num, label}) => {
  return type == 'select' ?
  <select name="select" id="">
            {opts.map((opt) => {  
              opt.options.map(o => <option>{o.value}</option>) 
               )
              }  
            }  
  </select>
   : 
   <div>
    <div>
              <input type={type} id={num} />
      </div>
          <label htmlFor={num}>{label}</label>
  </div>;
};

export default Input



