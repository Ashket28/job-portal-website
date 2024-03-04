const Validation = (values) =>{
    let errors = {};
    const e_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    // const passchk = values.password ;
    if (!values.firstname) {
        errors.firstname = "*hey user firstname is require*";
    }
    else if (!values.lastname) {
        errors.lastname = "*lastname is require*";
    }else if (!values.username) {
        errors.username = "* user name is require *";
    }else 
    if(!values.email){
        errors.email="*email is require*" ;
    } 
    else if
    (!e_pattern.test(values.email))
    {
        errors.email="email is invalid"
    }
     else
    //   if(!values.gender){
    //  errors.gender="**please select gender**";
    // }
    // else
     if (!values.password) {
        errors.password = "*Password is require*";
    } else if (values.password.length < 5) {
        errors.password = "*password must be more than 5 letter*";
    }else  if (!values.conpass) {
        errors.conpass = "*hey user please confirm password *";
    }
    else if (values.conpass!==values.password)
    {
        errors.conpass = "conform pass is invalid";
    }
    
    // else {
    //     console.log()
    //     errors.conpass = "done";
        
    // }
    // else
    //  if(!/\$+@\$+\.\$+/.test(values.email))
    // {
    //     errors.email="email is invalid"
    // }

    return errors;
}
    // ---------------- com- login - Validation --------//
export default Validation ;

