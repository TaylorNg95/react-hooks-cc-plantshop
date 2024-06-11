import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  function updateFormData(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    addNewPlant(formData)
    setFormData({
      name: '',
      image: '',
      price: ''
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={(e) => updateFormData(e)}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={(e) => updateFormData(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={(e) => updateFormData(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
