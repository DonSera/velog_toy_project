import loginInfo from '../customerInfo/loginInfo.json'

const login = {
    checkSignUpLogin: function (email) {
        if (loginInfo[email]) {
            console.log(`${email} is exit`);
            return loginInfo[email]
        } else {
            console.log(`${email} is non exit`);
            return {}
        }
    },

    checkEmailForm: function (email) {
        const emailArray = email.split('@');
        if (emailArray.length > 1 && emailArray[0].length > 4) {
            const emailFormArray = emailArray[1].split('.');
            if (emailFormArray.length > 1 && emailFormArray[0].length > 1 && emailFormArray[1].length > 1) {
                return true
            }
        }
        return false
    }
}

export default login;