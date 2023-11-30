// for (let index:number = 2; index <= 10; index++) {
//      console.log(index);
    
             
// }

        interface UserDate {
            empName : string;
            empPass : string;
        }
        let user :UserDate = {
            empName : "camilo",
            empPass : "C55555"
        }   

     
        
        
        function validatePass() {
          let minimunSegury:number = 6;
          let mediumSegury:number = 8;
          let maxSegury:number = 12;
            if(user.empPass.length <= minimunSegury){
               console.log("contraseña media podria mejorarla por seguridad");
            } else if(user.empPass.length <= mediumSegury ){
                    console.log("contraseña media")  
               } else if(user.empPass.length >= maxSegury){
                    console.log("contraseña segura");
                    
               }      
            else
            { 
                console.log("contraseña demasiado corta");
                

            }
            if (/[A-Z]/.test(user.empPass[0])) {
               return console.log("correcta");
               
             }else{
               console.log("error");
               
             }
          }
        

        validatePass();


    
        

        
        

        
    



