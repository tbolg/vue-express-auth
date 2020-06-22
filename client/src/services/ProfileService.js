import Api from '@/services/Api';

export default {
    changePassword(passwords) {
        return Api().post('changePassword', passwords);
    },
    changeCredentials(credentials) {
        return Api().post('credentials', credentials);
    }
}
