import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(plants => setPlants(plants))
  }, [])

  const displayedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search))

  function addNewPlant(newPlant){
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant)
    })
      .then(response => response.json())
      .then(newPlant => setPlants([...plants, newPlant]))
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
