javascript:( 
    function main(){ 
        if ((/2\.\d?/.test(window.location.href)) && (window.location.href.includes('docs.python.org'))){
            window.location = window.location.href.replace(/2\.\d?/, '3.5');
        } else if (window.location.href.includes('docs.python.org/2/')){
            window.location = window.location.href.replace('docs.python.org/2/', 'docs.python.org/3/');
        } else { 
            alert('Not on a valid site'); 
        }
    } 
)();
