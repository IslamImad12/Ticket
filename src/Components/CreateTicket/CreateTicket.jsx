import React from 'react'

export default function CreateTicket() {
  return <>
  <div className="container  card py-4 my-4">
    <h2>Create a ticket</h2>
    <input type="text" className='form-control my-2' placeholder='First Name'/>
    <input type="text" className='form-control my-2' placeholder='Last Name'/>
    <input type="text" className='form-control my-2' placeholder='Email Address'/>
    <input type="text" className='form-control my-2' placeholder='Subject'/>

    <div>

    <label for="Ticket m-1" >Ticket Type</label>
    <select name="Ticket" id="Ticket" className='form-control'>
    <option value="Select">Select a Type</option>
    <option value="Hardware">Hardware</option>
    <option value="Issues">Issues</option>
    <option value="Service">Service</option>
    <option value="Software">Software</option>
    </select>

    </div>

    <div>

<label for="Ticket m-1" >Department</label>
<select name="Ticket" id="Ticket" className='form-control'>
<option value="Select2">Select a department</option>
<option value="Billing">Billing</option>
<option value="Management">Management</option>
<option value="Sales">Sales</option>
<option value="Technical">Technical</option>
</select>

</div>
<textarea name="" id="" placeholder='Request Details' className='form-control my-3'></textarea>
<button className='btn btn-primary'>submit</button>
  </div>
  </>
}
