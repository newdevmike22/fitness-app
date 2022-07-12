import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: "DELETE_WORKOUT", payload: json})
        }
    }

    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>Load (lb): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Sets: </strong>{workout.sets}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>DELETE</span>
        </div>
    )
}

export default WorkoutDetails;