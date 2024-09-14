import axios from 'axios';

export default function requestApi(endpoint, method, body, responseType = 'json') {
    // Đặt headers mặc định cho các yêu cầu không phải là multipart/form-data
    const headers = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    };

    // Nếu body là một instance của FormData, không đặt Content-Type
    if (body instanceof FormData) {
        delete headers['Content-Type'];
    } else {
        headers["Content-Type"] = "application/json";
    }

    const instance = axios.create({ headers });

    return instance.request({
        method: method,
        url: `${process.env.REACT_APP_API_URL}${endpoint}`,
        data: body,
        responseType: responseType
    });
}
