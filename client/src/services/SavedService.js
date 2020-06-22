import Api from '@/services/Api';

export default {
    get(email) {
        return Api().get(`saved/${email}`);
    },
    post(text) {
        return Api().post('saved', text);
    },
    delete(id) {
        return Api().delete(`saved/${id}`);
    }
}