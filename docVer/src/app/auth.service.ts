export class AuthServices{
    x=false;

    checker(userName,passWord){

        if(userName==='abcd' && passWord==='abcd'){
            this.x=true
        }
        else{ 
            this.x=false
        }
    }
    isAuth(){
        return this.x
     

    }

}