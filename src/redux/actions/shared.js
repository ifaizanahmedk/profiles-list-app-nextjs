import { getDataFromUrl } from '../../utils/helpers';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from './users';

export const fetchUsersData = (url) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await getDataFromUrl(url);
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};
