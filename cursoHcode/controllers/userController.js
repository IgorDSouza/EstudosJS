class UserController{
    
    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){
        // let_this= this; // fizemos isso para o _this se referir ao user controller, pois se usar o this dentro da function do listener, estará se referindo a um elemento da função

        // this.formEl.addEventListener('submit', function(event){

        //     event.preventDefault();

        //     _this.getValues();
            
        // });  

        // ou podemos usar uma arrow function que evita o conflito entre metodos internos e externos.
        this.formEl.addEventListener('submit', event=>{

            event.preventDefault();

            

            this.addline(this.getValues());
        });   

        // ambas as formas funcionarão do mesmo jeito.
    }

    getValues(){    

        let user={};

               /* o elements do formulario é um objeto então devemos usar os [] para 'transforma-lo' em array, porém ao fazer isso deve-se indicar os indices desse array [this.formEl.elements[0]],[this.formEl.elements[1]] e etc
               Para q isso n seja necessário, usamos o spread, um operador que serve justamente para n precisamos escrever todos os indices  */ 
               [...this.formEl.elements].forEach(function(field){
        
                if(field.name == 'gender'){
        
                    if(field.checked){
                        user[field.name]= field.value;
                    }
        
                }else{
                    user[field.name]=field.value;
                }
            });
        
            return new User(user.name, user.gender, user.birth, user.email, user.country, user.password, user.photo, user.admin);
        
            
    }

    addline(dataUser){

    
   this.tableEl.innerHTML = `
   <tr>
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>`;
    }

}