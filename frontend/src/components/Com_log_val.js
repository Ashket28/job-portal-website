const Validation = (values) =>{
    let errors = {};
    if (!values.com_name) {
        errors.com_name = "*hey user firstname is require*";
    }else if(!values.email){
        errors.email="*email is require*" ;
    } 

    return errors;
}

export default Validation ;

