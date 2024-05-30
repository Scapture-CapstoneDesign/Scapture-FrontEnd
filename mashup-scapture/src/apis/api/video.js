import { defualtInstance } from '../utils/instance';
import axios from 'axios';

export const getList = async () => {
    try {
        const result = await axios.get('/api/video', {
            headers: {
                Range: 'bytes=0-99999' // 0부터 9999 바이트 사이의 데이터 요청
            }
        });
        return result;
    } catch (error) {
        console.error('영상 데이터를 불러오는 중에 오류가 발생했습니다:', error);
    }
};

