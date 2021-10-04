import { appCodes } from "../../mock/appCodes";
import { httpStatusActions } from "./httpStatusSlice";
//get the http header setting here with cache and token settings ..

const getRequestBody = ( requestBody, method ) =>{
    return (
        method === 'GET'? {
            method: method,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          } :    
          {
            method: method,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(requestBody)
          }
    )
};

const dispatchHttpStatusAction = (dispatch, status, message, error) => {    
    dispatch(httpStatusActions.updateHttpReqResstatus({status, message, error})); 
}


export const makeHttpCall = (url, actions, requestBody={}, method='GET') => {

    const requestObj =  getRequestBody(requestBody, method);

    return async (dispatch) => {
        const resDataLocal = await appCodes;
        dispatchHttpStatusAction(dispatch, 'pending', 'Request in flight', null, '');

        let response;
        
        try {
            response = await fetch( url, requestObj );
            //console.log(response.status);
            if(!response.ok){
                throw new Error('Request failed..')
            }
            const responseData = await response.json();
            // console.log(responseData);
            /* 
            Following are the reducer function that the reducers can implement for http verbs
            GET: addFetchData
            POST: addCreatedData
            Put: updateData
            DELETE: removeData
            */
            switch(method) {
                case 'GET':
                    dispatch(actions.addFetchedData(resDataLocal));
                    break;
                case 'POST':
                    dispatch(actions.addCreatedData(requestBody));
                    break;
                case 'PUT':
                    dispatch(actions.updateData(resDataLocal));
                    break;
                case 'DELETE':
                    dispatch(actions.removeData(resDataLocal));
                    break;
                default:                         
            }
            dispatchHttpStatusAction(dispatch, 'success', 'Request completed', null, response.status);

        } catch (error) {
            console.log(error);
            console.log(response);
            dispatchHttpStatusAction(dispatch, 'error', 'Request Errored', error, response?.status);
        }   
        
    }

}