
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
  return dispatch => {
    dispatch(getReferrerRequest());
    fetch(`/api/v1/organizations`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        let results = json.filter(orgs => {
          return orgs.subdomain === organization;
        });
        if (results) {
          dispatch(getReferrerSuccess({
            admin: adminId,
            organization: results[0]
          }))
        }
      })
      .catch(error => {
        dispatch(getReferrerFailure(error));
      });
  };
}
