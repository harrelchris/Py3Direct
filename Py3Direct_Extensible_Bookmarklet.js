javascript:( 
    function main(){ 
        var url = window.location.href;
        var found = false;
        var sites = [ 
            python = { 
                'url_string': 'docs.python.org', 
                'from': 'docs.python.org/2/', 
                'to': 'docs.python.org/3/'
                }, 
            youtube = { 
                'url_string': 'youtube.com', 
                'from': 'youtube.com', 
                'to': 'nsfwyoutube.com' 
                } 
            ]; 
        for (i = 0; i < sites.length; i++) { 
            if (url.includes(sites[i]['url_string'])){ 
                var final = url.replace(sites[i]['from'], sites[i]['to']); 
                window.location = final; 
                found = true; break; 
            } 
        } 
        if (!found){ 
            alert('Not on a valid site'); 
        } 
    } 
)();
