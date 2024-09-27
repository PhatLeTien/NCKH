import axios from 'axios';

export default function requestApi(endpoint, method, body, responseType = 'json') {
    // Đặt headers mặc định
    const headers = {
        "Accept": "application/json"
    };

    // Nếu body là một instance của FormData, không đặt Content-Type để axios tự động set
    if (body instanceof FormData) {
        delete headers['Content-Type'];
    } else {
        headers["Content-Type"] = "application/json";
    }

    // Gửi yêu cầu với headers đã cấu hình
    return axios.request({
        method: method,
        url: `${process.env.REACT_APP_API_URL}${endpoint}`,
        data: body,
        headers: headers, // Đặt headers tại đây thay vì khi tạo instance
        responseType: responseType
    });
}
