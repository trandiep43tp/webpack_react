import axios        from 'axios';
import * as configs from '../redux/constrants/config';

function CallApi(endpoint, method = "GET", data = null){
    return(    axios({
            method: method,
            url: `${configs.URL}/${endpoint}`,
            data: data
        })
        .catch( err =>{
            console.log(err)
        })
    );
}

export default CallApi; 