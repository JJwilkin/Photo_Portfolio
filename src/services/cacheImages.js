export default async function cacheImages (imgArray, setIsLoading) {

   const promises = await imgArray.map((src) => {
       return new Promise(function(resolve,reject) {
           const img = new Image();

           img.src = src;
           img.onload = resolve();
           img.onerror = reject();
       });
   });
   await Promise.all(promises);
await setTimeout(()=> {setIsLoading(false);}, 3500)
    
    
}