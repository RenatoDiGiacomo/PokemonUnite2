import { PrivateRoutes } from '@shared/layouts'
import { createRoute, Link } from '@tanstack/react-router'

function ListExercisesPage() {
  return (
    <div>
      <h1>Exercises</h1>
      <div className="flex gap-2">
        <Link to="/exercises/create">Create Exercise</Link>
        <Link to="/exercises/1/edit">Edit Exercise 1</Link>
      </div>
    </div>
  )
}

export const LIST_EXERCISES_PAGE_ROUTE = '/exercises'

export const ListExercisesRoute = createRoute({
  path: LIST_EXERCISES_PAGE_ROUTE,
  getParentRoute: () => PrivateRoutes,
  component: ListExercisesPage,
})
