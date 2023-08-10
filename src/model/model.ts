class User {
    name:string;
    password:string;
    id:string;
    userType:string;

    constructor(name:string,password:string, id:string, userType:string){
       this.name= name;
       this.password= password;
       this.userType= userType;
       this.id=id;
     {}
    }
}
  

  
class Professor extends User {
    cantidadMaterias:number;
    fechaNacimiento: Date;
    
    constructor(
        name:string,password:string, id:string, userType:string,
        cantidadMaterias: number,
        fechaNacimiento: Date
    ) {
        super(name,password, id, "profesor");
        this.cantidadMaterias=cantidadMaterias;
        this.fechaNacimiento=fechaNacimiento;
        
    }
}
  
  
  
  class Alumno extends User {
    cantidadMaterias:number;
    fechaNacimiento: Date;
    
    constructor(
        name:string,password:string, id:string, userType:string,
        cantidadMaterias: number,
        fechaNacimiento: Date
    ) {
        super(name,password, id, "alumno");
        this.cantidadMaterias=cantidadMaterias;
        this.fechaNacimiento=fechaNacimiento;
        
    }
}
  
  
  class Administrador extends User {

    
    constructor(
        name:string,password:string, id:string, userType:string
    ) {
        super(name,password, id, "administrador");       
    }
}

  

  export { User, Professor, Alumno, Administrador };
  