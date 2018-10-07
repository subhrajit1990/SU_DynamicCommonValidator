const CV = {
    nullcheck: function(s){
        let err = s.length ? 0 : 5;
        return err;

    },
    valid: function(element, check){
        if (element.type == 'text' || element.type == 'phone' || element.type == 'email') {
        return check(element.value);
    } else {
        return check(element);
    }
    },
    CommonValidator: function(form,list = {} ,flag){
        let errorCount = 0,
        element,
        n,
        out;
        var pThis = this;
        Object.keys(form).map(function(key, index) {        
                element = form[key];
                if (!element.hasAttribute("name")) {
                    n = element.id, out;
                } else if (element.hasAttribute("src")) {
                    n = element.src, out;
                } else {
                    n = element.name, out;
                }
                if (list[n] && list[n].verify) {
                    out = pThis.valid(element, list[n].verify);
                    if (out != 0) {                    
                        console.log("ERROR"+list[n].message || "Error occurred");
                        errorCount++;
                    }
                }
          
        });
    if (errorCount > 0) {
        return false;
    }
    return true;
    }
}

export default CV;