class User{

    constructor(name,gender,birth,email,country,password,photo,admin){
 
        this._name = name;
        this._birth = birth;
        this._country = country;
        this._gender = gender;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date().toLocaleString('pt-br');

    }
    get name(){
        return this._name
    }
    get birth(){
        return this._birth
    }
    get country(){
        return this._country
    }
    get gender(){
        return this._gender
    }
    get email(){
        return this._email
    }
    get password(){
        return this._password
    }
    get photo(){
        return this._photo
    }
    set photo(photo){
        this._photo = photo;
    }
    get admin(){
        return this._admin
    }
    get register(){
        return this._register
    }
}