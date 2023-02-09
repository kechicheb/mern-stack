import { useEffect, useState } from "react"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts')
        const json = await response.json()
  
        if (response.ok) {
          setWorkouts(json)
        }
      }
  
      fetchWorkouts()
    }, [])
    return (
      <div className="home">
            <div className="workouts">
        {workouts && workouts.map(workout => (
          <div  key={workout._id} >
            
            
            {workout.title}
             </div>
        ))}
      </div>
      </div>
    )
  }
  
  export default Home