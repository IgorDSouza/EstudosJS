class UserController{
    
    constructor(formId, tableId, formidUpdate){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);
        this.formUpdateEl = document.getElementById(formidUpdate);
        this.onEdit();
        this.onSubmit();

    }
          
    onEdit(){
        document.querySelector("#box-user-update .btn-cancel").addEventListener("click", e=>{
            this.showPanelCreate();
        });

        this.formUpdateEl.addEventListener("submit" , e=>{
            event.preventDefault();
            

            let values = this.getValues(this.formUpdateEl);

           let index = this.formUpdateEl.dataset.trIndex;

            let tr = this.tableEl.rows[index];

            tr.dataset.user = JSON.stringify(values);

            tr.innerHTML = `
            <td><img src="${values.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${values.name}</td>
            <td>${values.email}</td>
            <td>${(values.admin)?'Sim': 'Não'}</td>
            <td>${values.register}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat btn-edit">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
            `;

            this.addEventsTr(tr)

            this.updateCount();

            this.showPanelCreate();

        })

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
            

            let values = this.getValues(this.formEl);

            if(values){this.getPhoto().then(
                 (content)=>{

                    values.photo = content;
                    
                    this.addline(values);// a linha só é´adicionada após a resposta positiva da img gerada
                    
                },
                (e)=>{
                    console.error(e);
                }
            ) 
        } this.formEl.reset();

 

                                  
        });   
    }


    getPhoto(){
        return new Promise((resolve/** se a requisição retornar corretamente */,reject/** se a requisição retornar erro */)=> {
           
            let fileReader = new FileReader(); // APi de leitura de arquivos
            let elements = [...this.formEl.elements].filter(item=>{
                
                if(item.name === 'photo'){
                    return item;
                }
    
            });
            let file = elements[0].files[0];
            fileReader.onload = () =>{ 
             
                resolve(fileReader.result);
           
            };
            fileReader.onerror=(e)=>{
                reject(e);
            }
    
            if(file){
                fileReader.readAsDataURL(file); // ao finalizar a leitura, o resultado exibindo uma 'copia' da imagem em base64
            }else{
                resolve('dist/img/boxed-bg.png');
            }

        });
       
    }

    getValues(formEl){    

        let user={};
        let isValid = true;
        let input = [];

               /* o elements do formulario é um objeto então devemos usar os [] para 'transforma-lo' em array, porém ao fazer isso deve-se indicar os indices desse array [this.formEl.elements[0]],[this.formEl.elements[1]] e etc
               Para q isso n seja necessário, usamos o spread, um operador que serve justamente para n precisamos escrever todos os indices  */ 
               [...formEl.elements].forEach((field)=>{

                if(['name','email','password'].indexOf(field.name) >-1 && !field.value){
                    field.parentElement.classList.add("has-error"); // classe padrão do template
                    isValid = false;
                    input.push(field.name);
                }else{
                    field.parentElement.classList.remove("has-error");
                }
        
                if(field.name == 'gender'){
        
                    if(field.checked){
                        user[field.name]= field.value;
                    }
        
                }else if(field.name == 'admin'){
                    

                    user[field.name] = field.checked;

                }else{
                    user[field.name]=field.value;
                }
            });
            
            if(!isValid){
                
                return false;
            }

            return new User(user.name, user.gender, user.birth, user.email, user.country, user.password, user.photo, user.admin);
        
            
    }

    addline(dataUser){

    let tr = document.createElement("tr");

    tr.dataset.user = JSON.stringify(dataUser); // SERIALIZAMOS O OBJ E TRANSFORMAMOS EM UMA STRING depois armazenamos no dataset

    tr.innerHTML = `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin)?'Sim': 'Não'}</td>
            <td>${dataUser.register}</td>
            <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat btn-edit">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
            `;

        this.addEventsTr(tr);

        this.tableEl.appendChild(tr);

        this.updateCount();
        }

    addEventsTr(tr){
        

        tr.querySelector('.btn-edit').addEventListener("click", e =>{
            
            let json = JSON.parse(tr.dataset.user);
            let form = document.querySelector("#form-user-update");

            form.dataset.trIndex= tr.sectionRowIndex;

            for(let name in json){

                let field = form.querySelector('[name='+name.replace("_","")+"]")

                if(field){
                    
                    switch(field.type){

                        case 'file':
                            continue;
                        break;

                        case 'radio':
                            field= form.querySelector("[name=" + name.replace("_","")+"][value="+json[name]+"]");
                            field.checked=true;
                        break;

                        case 'checkbox':
                            field.checked = json[name];
                        break;

                        default:
                            field.value=json[name];
                    }
                 }
            }

           this.showPanelUpdate()

        })
    }

        showPanelUpdate(){

            document.querySelector("#box-user-create").style.display= "none";

            document.querySelector("#box-user-update").style.display= "block";
    
        }
        showPanelCreate(){
            document.querySelector("#box-user-create").style.display= "block";

            document.querySelector("#box-user-update").style.display= "none";
        }

    updateCount(){
        let numberUsers = 0;
        let numberAdmin = 0;
        [...this.tableEl.children].forEach(tr =>{//o elemento é uma coleção, colocamos em [] e usamos o spread '...' para transforma-lo em um array
            numberUsers++;
            
            let user = JSON.parse(tr.dataset.user); // pegamos o objeto transformado em string no addline() e transformamos ele dnv para objeto e podemos manipula-lo

            if(user._admin)numberAdmin++;
            
        });

        document.querySelector("#number-users").innerHTML=numberUsers;

        document.querySelector("#number-users-admin").innerHTML=numberAdmin;
    }
}