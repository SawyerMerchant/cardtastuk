export const GET_REFERRER_REQUEST = "GET_REFERRER_REQUEST";
export const GET_REFERRER_SUCCESS = "GET_REFERRER_SUCCESS";
export const GET_REFERRER_FAILURE = "GET_REFERRER_FAILURE";

export function getReferrerRequest() {
  return {
    type: GET_REFERRER_REQUEST
  };
}

export function getReferrerSuccess(data) {
  return {
    type: GET_REFERRER_SUCCESS,
    data
  };
}

export function getReferrerFailure(error) {
  return {
    type: GET_REFERRER_FAILURE,
    error
  };
}

export function getReferrer(organization, adminId) {
  return async dispatch => {
    dispatch(getReferrerRequest());

    try {
      let response = await fetch(`/api/v1/organizations`);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      let json = await response.json();

      let results = json.filter(orgs => {
        return orgs.subdomain === organization;
      });

      if (results) {
        dispatch(
          getReferrerSuccess({
            admin: adminId,
            organization: results[0]
          })
        );
      }
    } catch (error) {
      dispatch(getReferrerFailure(error));
    }
  };
}
