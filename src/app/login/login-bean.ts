export class LoginBean {

    public static LoginInstance: LoginBean;

    public static getLoginIn(): LoginBean {
        if (!this.LoginInstance) {
            this.LoginInstance = new LoginBean();
        }
        return this.LoginInstance;
    }
    private constructor() { }
    public userName: string;
    public password: any

}
