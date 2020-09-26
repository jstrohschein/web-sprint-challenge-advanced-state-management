import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { postSmurf } from '../actions/postAction'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

const SmurfForm = props => {

  const { register, handleSubmit, errors } = useForm();

  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    height: ''
  })

  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: 0,
    height: ''
  })


  const submitSmurf = smurf => {

     props.postSmurf(smurf)

     setFormState({
      name: '',
      age: 0,
      height: ''
    })

  }

  return (

    <div>
      
      <Form className='form' onSubmit={handleSubmit(submitSmurf)}>

          <FormGroup>
            <Label for="name"></Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              ref={register({ required: true })}
            />
            {errors.name && (<p>Looks like there was an error: {errors.name.type}</p>)}
          </FormGroup>

          <FormGroup>
            <Label for="age"></Label>
            <Input 
              type="text" 
              name="age" id="age" 
              placeholder="Age"
              ref={register({ required: true })}
            />
            {errors.age && (<p>Looks like there was an error: {errors.age.type}</p>)}
          </FormGroup>

          <FormGroup>
            <Label for="height"></Label>
            <Input 
              type="text" 
              name="height" 
              id="height" 
              placeholder="Height"
              ref={register({ required: true })}
            />
            {errors.height && (<p>Looks like there was an error: {errors.height.type}</p>)}
          </FormGroup>

          <Button type='submit'>Create!</Button>

      </Form>
    </div>

  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm)