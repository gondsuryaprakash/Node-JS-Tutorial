const dns=require('dns')
dns.resolve4('www.javatpoint.com',(err,addresses)=>{

    if(err)
    {
        throw err
    }
    console.log(`addresses: ${JSON.stringify(addresses)}`);
    addresses.forEach((a)=>{
        dns.reverse(a,(err,hostnsmes)=>{
            if(err)
            {
                throw err
            }

            console.log(`reverse for ${a}: ${JSON.stringify(hostnsmes)}`); 
            
        })
    })
})


dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
  console.log(hostname, service);  
    // Prints: localhost  
});  