import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: [],}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      return {restaurants: [...state.restaurants, restaurant]}
    case 'DELETE_RESTAURANT':
      const UpdatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants: UpdatedRestaurants}
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuidFn()})
      // return {reviews: [...state.reviews, review]}
      return Object.assign({}, state, {reviews: [...state.reviews, review]})
    case 'DELETE_REVIEW':
      const UpdatedReviews = state.reviews.filter(review => review.id !== action.id)
      return {reviews: UpdatedReviews}
    default:
      return state;
  }
}
