import React, { useState } from 'react';
import { Scheme } from './types/form';
import { reduxForm, Field } from "redux-form";
import Input from './_component/Input';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addForm, addKey, addLabel, addType } from './rootSlice';
import { RootState } from './store';
interface IFormInputs {
  type: string
  key: string
  label: string
}
const Form = () => {


  const arr:Scheme[] = []
  // const [form, setForm] = useState<Scheme[]>([]) 
  // const [key, setKey] = useState<string>("") 
  // const [name, setName] = useState<string>("") 
  // const [type, setType] = useState<string>("") 
  // const [num, setNum] = useState<number>(0) 

  const dispatch = useDispatch()
  const forms = useSelector<RootState>( state => state.form)
  // const  label = useSelector( state => state.label)
  // const key = useSelector( state => state.key)
  const { 
    register,
     handleSubmit,
     
      watch, 
      formState: {errors} 
    } = useForm<IFormInputs>()

    const formSubmitHandler : SubmitHandler<IFormInputs> = (data: IFormInputs) =>  {
            console.log(data)
            dispatch(addForm(data))
    }


  const onSubmit = (data) => {
    dispatch(addForm(data))
  }
  //  function handleKey(e) {
  //    setKey(e.target.value)
  //  }
  //  function handleName(e) {
  //   setName(e.target.value)
  // }
  // function handleType(e) {
  //   setType(e.target.value)
  // }

  // function onSubmit(data) {
  //       dispatch()
  // }

  // function addForm() {
  //   form.push({
  //     fields: [{
  //     key,
  //      label: name,
  //      type: type,
  //      num: Date.now()
  //     } ]
  //   })
  //   setType("")
  //   setName("")
  //   setKey("")
  //   console.log('event')
  // }
  return (
  <div>
    <form onSubmit={handleSubmit(formSubmitHandler)}>
             <input {...register('type')} />
              <br />
              <br />
              <input {...register('label'), {required: true}} />
              <br />
              <input {...register('key'), {required: true}} />
              <br />
              <input type="submit" />
              {forms.fields.map( (input, i) => <Input label={input.label} num={i} type={input.type}/>)}
    </form>
      <form onSubmit={handleSubmit(onSubmit)}>
              
              <h2>?????????? ??????????</h2>

            <fieldset>
               <label htmlFor="name">???????????????? ??????????</label>
                <input  id="name" name="name" type="text" placeholder="?????????????? ???????????????? ??????????" />
            </fieldset>
            <h2>???????????????? ??????????</h2>
            <p>?????????? ???????????? ?????????????????? ???????? ???? ???????? ????????????????</p>
            
             
                <details>
                <summary>???????????????? 1:</summary>
                    <form action="#">
                          <fieldset>
                                  <input id="key" name="key" type="text" />
                                  <label htmlFor="key">????????</label>
                          </fieldset>
                          <fieldset>
                                  <input id="naming" type="text"  />
                                  <label htmlFor="naming">????????????????</label>
                          </fieldset> 
                          <fieldset>
                                    <input type="text" value={type}  placeholder="??????" />
                          </fieldset>
                        <button type="submit" >???????????????? ?????????? ????????????????</button>
               </form>
            </details>
              {/* {
                form.map(e => 
                  // <div key={e.id}>
                  //             <label htmlFor={e.fields.id}>{e.fields.name}</label>
                  //             <input type={e.fields.type} id={e.fields.id} /> 
                  // </div>
                  e.fields.map( f => <Input 
                    type={f.type}
                     label={f.label}
                      num={f.num}
                      />)
                  )
              } */}
              
          
      </form>
  </div>
  );
};

export default reduxForm({
  form: "Form",
}); (Form)
